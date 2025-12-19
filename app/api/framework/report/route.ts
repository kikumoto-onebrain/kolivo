import { NextResponse } from 'next/server';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

type Payload = {
  overall: number;
  level: string;
  desc: string;
  dimScores: Record<string, number>;
  improvements: { label: string; score: number }[];
  strengths: { label: string; score: number }[];
  services: string[];
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;

    const pdfDoc = await PDFDocument.create();
    const A4: [number, number] = [595.28, 841.89];
    const margin = 48;

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const accent = rgb(90 / 255, 90 / 255, 1);

    let page = pdfDoc.addPage(A4);
    let { width, height } = page.getSize();
    let y = height - margin;

    const newPage = () => {
      page = pdfDoc.addPage(A4);
      ({ width, height } = page.getSize());
      y = height - margin;
    };

    const ensureSpace = (minY: number) => {
      if (y < minY) newPage();
    };

    const drawTitle = (text: string) => {
      ensureSpace(100);
      page.drawText(text, { x: margin, y, size: 18, font: fontBold, color: accent });
      y -= 26;
    };

    const drawH2 = (text: string) => {
      ensureSpace(80);
      page.drawText(text, { x: margin, y, size: 13, font: fontBold, color: rgb(0, 0, 0) });
      y -= 18;
    };

    const drawP = (text: string) => {
      const maxWidth = width - margin * 2;
      const size = 10.5;

      const words = String(text ?? '').split(' ');
      let line = '';
      const lines: string[] = [];

      for (const w of words) {
        const test = line ? `${line} ${w}` : w;
        const testWidth = font.widthOfTextAtSize(test, size);
        if (testWidth > maxWidth) {
          if (line) lines.push(line);
          line = w;
        } else {
          line = test;
        }
      }
      if (line) lines.push(line);

      for (const ln of lines) {
        ensureSpace(60);
        page.drawText(ln, { x: margin, y, size, font, color: rgb(0.15, 0.18, 0.25) });
        y -= 14;
      }
      y -= 4;
    };

    const drawRow = (left: string, right: string) => {
      ensureSpace(60);

      page.drawText(String(left ?? ''), {
        x: margin,
        y,
        size: 10.5,
        font,
        color: rgb(0.15, 0.18, 0.25),
      });

      const rightText = String(right ?? '');
      const rightWidth = fontBold.widthOfTextAtSize(rightText, 10.5);

      page.drawText(rightText, {
        x: width - margin - rightWidth,
        y,
        size: 10.5,
        font: fontBold,
        color: rgb(0, 0, 0),
      });

      y -= 16;
    };

    drawTitle('Relatório do Framework de Maturidade — Kolivo');
    drawP('Este relatório foi gerado automaticamente com base nas respostas do seu questionário.');

    drawH2('Resumo');
    drawRow('Pontuação geral (0–100)', String(body.overall ?? 0));
    drawRow('Classificação', String(body.level ?? ''));
    drawP(String(body.desc ?? ''));

    drawH2('Pontuação por dimensão (1–5)');
    for (const [k, v] of Object.entries(body.dimScores ?? {})) {
      drawRow(k, `${Number(v).toFixed(2)}/5`);
    }

    drawH2('Oportunidades de melhoria');
    if (!body.improvements?.length) drawP('Sem dados suficientes para exibir oportunidades.');
    else body.improvements.slice(0, 3).forEach((it, idx) => drawRow(`${idx + 1}. ${it.label}`, `${it.score.toFixed(2)}/5`));

    drawH2('Pontos fortes');
    if (!body.strengths?.length) drawP('Sem dados suficientes para exibir pontos fortes.');
    else body.strengths.slice(0, 3).forEach((it, idx) => drawRow(`${idx + 1}. ${it.label}`, `${it.score.toFixed(2)}/5`));

    drawH2('Serviços especializados recomendados');
    if (!body.services?.length) drawP('Sem recomendações disponíveis.');
    else body.services.forEach((s) => drawP(`• ${s}`));

    page.drawText('kolivo.com.br', {
      x: margin,
      y: 24,
      size: 9,
      font,
      color: rgb(0.45, 0.48, 0.55),
    });

    const pdfBytes = await pdfDoc.save();

    return new NextResponse(pdfBytes, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="relatorio-kolivo.pdf"',
        'Cache-Control': 'no-store, max-age=0',
      },
    });
  } catch (e) {
    return NextResponse.json(
      { error: 'Falha ao gerar PDF', details: String((e as any)?.message ?? e) },
      { status: 500 }
    );
  }
}
