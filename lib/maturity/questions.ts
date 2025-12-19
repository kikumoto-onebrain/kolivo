export type DimensionKey =
  | 'itsm'
  | 'automation'
  | 'people'
  | 'assets'
  | 'ai'
  | 'culture';

export type QuestionOption = {
  value: 1 | 2 | 3 | 4 | 5;
  label: string;
};

export type Question = {
  id: string;
  dimension: DimensionKey;
  title: string;
  helper?: string;
  options: QuestionOption[];
};

export const DIMENSIONS: Record<DimensionKey, { label: string; weight: number }> =
  {
    itsm: { label: 'Gestão de Serviços (ITSM)', weight: 0.2 },
    automation: { label: 'Automação e Processos', weight: 0.25 },
    people: { label: 'People Analytics', weight: 0.15 },
    assets: { label: 'Gestão de Ativos (ITAM)', weight: 0.15 },
    ai: { label: 'IA e Inovação', weight: 0.15 },
    culture: { label: 'Cultura e Liderança Digital', weight: 0.1 },
  };

// 18 perguntas (3 por dimensão)
export const QUESTIONS: Question[] = [
  // Gestão de Serviços de TI (ITSM) (3)
  {
    id: 'q1',
    dimension: 'itsm',
    title: 'Como sua organização gerencia incidentes e solicitações de TI?',
    helper:
      'Avalia a maturidade dos processos de gerenciamento de serviços de tecnologia.',
    options: [
      { value: 1, label: 'Via e-mail ou telefone, sem controle centralizado' },
      { value: 2, label: 'Planilhas compartilhadas para registro e acompanhamento' },
      { value: 3, label: 'Sistema de tickets com workflow básico' },
      { value: 4, label: 'Plataforma ITSM integrada com automação de processos' },
      { value: 5, label: 'ITSM com IA para classificação automática e resolução proativa' },
    ],
  },
  {
    id: 'q2',
    dimension: 'itsm',
    title: 'Qual o nível de monitoramento e controle da infraestrutura de TI?',
    options: [
      { value: 1, label: 'Monitoramento reativo apenas quando há problemas' },
      { value: 2, label: 'Ferramentas básicas de monitoramento sem integração' },
      { value: 3, label: 'Monitoramento proativo com alertas configurados' },
      { value: 4, label: 'Plataforma integrada com dashboards e métricas em tempo real' },
      { value: 5, label: 'Monitoramento inteligente com IA e análise preditiva' },
    ],
  },
  {
    id: 'q3',
    dimension: 'itsm',
    title: 'Como são gerenciados os processos de mudança e aprovações em TI?',
    options: [
      { value: 1, label: 'Mudanças realizadas sem processo formal' },
      { value: 2, label: 'Aprovações informais via e-mail ou reunião' },
      { value: 3, label: 'Processo documentado com comitê de mudanças' },
      { value: 4, label: 'Workflow automatizado com aprovações escalonadas' },
      { value: 5, label: 'Gestão preditiva com análise de risco automatizada' },
    ],
  },

  // Automação e Otimização de Processos (3)
  {
    id: 'q4',
    dimension: 'automation',
    title: 'Qual o nível de automação dos processos organizacionais?',
    options: [
      { value: 1, label: 'Processos totalmente manuais' },
      { value: 2, label: 'Algumas planilhas com fórmulas básicas' },
      { value: 3, label: 'Workflows automatizados em ferramentas específicas' },
      { value: 4, label: 'Plataforma BPM com automação de processos-chave' },
      { value: 5, label: 'Automação inteligente com RPA e IA integrados' },
    ],
  },
  {
    id: 'q5',
    dimension: 'automation',
    title: 'Como são identificadas e otimizadas as tarefas repetitivas?',
    options: [
      { value: 1, label: 'Não há identificação sistemática de tarefas repetitivas' },
      { value: 2, label: 'Identificação informal pelos colaboradores' },
      { value: 3, label: 'Mapeamento básico com algumas melhorias pontuais' },
      { value: 4, label: 'Análise estruturada com plano de automação' },
      { value: 5, label: 'Identificação automática via process mining e IA' },
    ],
  },
  {
    id: 'q6',
    dimension: 'automation',
    title: 'Qual o nível de integração entre os sistemas da organização?',
    options: [
      { value: 1, label: 'Sistemas isolados sem integração' },
      { value: 2, label: 'Integrações pontuais via planilhas ou arquivos' },
      { value: 3, label: 'APIs básicas conectando sistemas principais' },
      { value: 4, label: 'Plataforma de integração (iPaaS) centralizada' },
      { value: 5, label: 'Arquitetura de microsserviços com orquestração inteligente' },
    ],
  },

  // People Analytics (3)
  {
    id: 'q7',
    dimension: 'people',
    title: 'Como é medida e acompanhada a performance dos colaboradores?',
    options: [
      { value: 1, label: 'Avaliação anual subjetiva' },
      { value: 2, label: 'Planilhas com indicadores básicos' },
      { value: 3, label: 'Sistema de gestão de performance com métricas' },
      { value: 4, label: 'Dashboard integrado com múltiplas fontes de dados' },
      { value: 5, label: 'Analytics preditivo com IA para desenvolvimento de talentos' },
    ],
  },
  {
    id: 'q8',
    dimension: 'people',
    title: 'Como é acompanhada a jornada e experiência do colaborador?',
    options: [
      { value: 1, label: 'Não há acompanhamento estruturado da jornada' },
      { value: 2, label: 'Controle básico de marcos importantes' },
      { value: 3, label: 'Mapeamento da jornada com pontos de contato' },
      { value: 4, label: 'Plataforma integrada de employee experience' },
      { value: 5, label: 'Análise preditiva da jornada com personalização' },
    ],
  },
  {
    id: 'q9',
    dimension: 'people',
    title: 'Qual o nível de análise do engajamento e produtividade das equipes?',
    options: [
      { value: 1, label: 'Pesquisas anuais básicas ou sem medição' },
      { value: 2, label: 'Pesquisas periódicas com análise simples' },
      { value: 3, label: 'Pulse surveys com dashboards básicos' },
      { value: 4, label: 'Análise contínua com múltiplas fontes de dados' },
      { value: 5, label: 'IA para análise de sentimento e predição de turnover' },
    ],
  },

  // Gestão de Ativos e Licenciamento (ITAM) (3)
  {
    id: 'q10',
    dimension: 'assets',
    title: 'Como é realizado o controle de licenças de software?',
    options: [
      { value: 1, label: 'Controle manual em planilhas ou papel' },
      { value: 2, label: 'Planilhas compartilhadas com informações básicas' },
      { value: 3, label: 'Sistema básico de gestão de ativos' },
      { value: 4, label: 'Plataforma integrada com descoberta automática' },
      { value: 5, label: 'Gestão inteligente com otimização automática de custos' },
    ],
  },
  {
    id: 'q11',
    dimension: 'assets',
    title: 'Como são identificadas e gerenciadas licenças não utilizadas?',
    options: [
      { value: 1, label: 'Não há identificação sistemática' },
      { value: 2, label: 'Verificação manual periódica' },
      { value: 3, label: 'Relatórios básicos de uso' },
      { value: 4, label: 'Monitoramento automático com alertas' },
      { value: 5, label: 'IA para otimização e realocação automática' },
    ],
  },
  {
    id: 'q12',
    dimension: 'assets',
    title: 'Qual o nível de controle e análise de custos de TI?',
    options: [
      { value: 1, label: 'Controle básico de gastos sem análise' },
      { value: 2, label: 'Relatórios mensais simples' },
      { value: 3, label: 'Análise por centro de custo' },
      { value: 4, label: 'Dashboard com análises comparativas' },
      { value: 5, label: 'Otimização automática com IA e forecasting' },
    ],
  },

  // Inovação e Inteligência Artificial (3)
  {
    id: 'q13',
    dimension: 'ai',
    title: 'Qual o nível de uso de Inteligência Artificial na organização?',
    options: [
      { value: 1, label: 'Não utilizamos IA em nossos processos' },
      { value: 2, label: 'Uso experimental ou piloto em área específica' },
      { value: 3, label: 'IA implementada em alguns processos-chave' },
      { value: 4, label: 'IA integrada em múltiplas áreas da organização' },
      { value: 5, label: 'IA estratégica com centro de excelência estabelecido' },
    ],
  },
  {
    id: 'q14',
    dimension: 'ai',
    title: 'Como são tratados os dados para análises e insights?',
    options: [
      { value: 1, label: 'Dados fragmentados sem análise estruturada' },
      { value: 2, label: 'Relatórios básicos com dados históricos' },
      { value: 3, label: 'Data warehouse com análises básicas' },
      { value: 4, label: 'Plataforma de analytics com self-service' },
      { value: 5, label: 'Data lake com machine learning e IA avançada' },
    ],
  },
  {
    id: 'q15',
    dimension: 'ai',
    title: 'Como são desenvolvidas e implementadas inovações tecnológicas?',
    options: [
      { value: 1, label: 'Não há processo estruturado de inovação' },
      { value: 2, label: 'Testes pontuais sem metodologia' },
      { value: 3, label: 'Projetos piloto com avaliação básica' },
      { value: 4, label: 'Laboratório de inovação com metodologia ágil' },
      { value: 5, label: 'Centro de excelência com experimentação contínua' },
    ],
  },

  // Cultura e Liderança Digital (3)
  {
    id: 'q16',
    dimension: 'culture',
    title: 'Qual o nível de engajamento da liderança na transformação digital?',
    options: [
      { value: 1, label: 'Baixo engajamento ou resistência à mudança' },
      { value: 2, label: 'Apoio básico sem participação ativa' },
      { value: 3, label: 'Liderança engajada com iniciativas pontuais' },
      { value: 4, label: 'Liderança ativa como patrocinadora da transformação' },
      { value: 5, label: 'Liderança digital estratégica e visionária' },
    ],
  },
  {
    id: 'q17',
    dimension: 'culture',
    title: 'Como é a capacitação digital e colaboração na organização?',
    options: [
      { value: 1, label: 'Treinamentos esporádicos e trabalho isolado' },
      { value: 2, label: 'Treinamentos básicos e compartilhamento informal' },
      { value: 3, label: 'Programa estruturado de capacitação e ferramentas de colaboração' },
      { value: 4, label: 'Plataforma de aprendizado contínuo e colaboração integrada' },
      { value: 5, label: 'Cultura de aprendizado com IA e ecossistema colaborativo' },
    ],
  },
  {
    id: 'q18',
    dimension: 'culture',
    title: 'Qual o nível de orientação a dados e inovação nas decisões?',
    options: [
      { value: 1, label: 'Decisões baseadas em intuição com resistência a mudanças' },
      { value: 2, label: 'Uso esporádico de dados e mudanças pontuais' },
      { value: 3, label: 'Dados utilizados regularmente e cultura de melhoria contínua' },
      { value: 4, label: 'Cultura data-driven com incentivo à experimentação' },
      { value: 5, label: 'Decisões automatizadas com IA e cultura de inovação disruptiva' },
    ],
  },
];
