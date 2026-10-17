// Conteúdo extraído de afonsonobre.com.br e conteudo.afonsonobre.com.br/portifolio.
// Nada aqui é inventado: se mudar no site oficial, atualize aqui.

const WP = "https://afonsonobre.com.br/wp-content/uploads";

export const firm = {
  name: "Afonso Nobre Advocacia",
  since: 2006,
  city: "Belém",
  state: "Pará",
  site: "https://afonsonobre.com.br/",
  logo: `${WP}/2023/03/logo.jpg`,
  privacyPolicy: "https://afonsonobre.com.br/politica-de-privacidade/",
};

export const contact = {
  phoneDisplay: "(91) 3230-4267",
  phoneHref: "tel:+559132304267",
  whatsappDisplay: "(91) 98899-2572",
  whatsappNumber: "5591988992572",
  email: "advocacia@afonsonobre.com.br",
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/afonsonobreadvocacia/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/afonsonobreadv/" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCo2D65LdHLLZUtgt5Ur38CQ" },
];

export type PracticeArea = { title: string; summary: string };

export const practiceAreas: PracticeArea[] = [
  {
    title: "Agrário e Agronegócios",
    summary: "Assessoria aos agentes do setor durante projetos de implantação.",
  },
  {
    title: "Ambiental",
    summary: "Pareceres e notas técnicas sob a ótica do direito ambiental.",
  },
  {
    title: "Fundiário",
    summary: "Regularização fundiária urbana e rural, onerosa e não onerosa.",
  },
  {
    title: "Imobiliário e Usucapião",
    summary: "Contratos de compra e venda, permutas físicas e financeiras, entre outros.",
  },
  {
    title: "Empresarial",
    summary: "Consultoria e assessoria societária para investidores e empresários.",
  },
  {
    title: "Sucessão e Planejamento Patrimonial",
    summary:
      "Inventários judiciais e extrajudiciais, planejamento familiar e sucessório, doações, testamentos e holdings patrimoniais.",
  },
  {
    title: "Logística Portuária e Direito Marítimo",
    summary: "Assessoria a empresas que atuam no setor portuário e marítimo.",
  },
];

export type Partner = {
  name: string;
  oab: string;
  focus: string;
  photo: string;
};

export const partners: Partner[] = [
  {
    name: "Ariani Nobre",
    oab: "OAB/PA 11.889",
    focus: "Direito civil e sucessório",
    photo: `${WP}/2026/08/A1A9319.jpg-683x1024.jpeg`,
  },
  {
    name: "Adriana Nobre",
    oab: "OAB/PA 11.962",
    focus: "Direito agroambiental e empresarial",
    photo: `${WP}/2026/08/A1A9386.jpg-683x1024.jpeg`,
  },
];

export type RecognitionYear = { year: number; items: string[] };

// Conforme a página /reconhecimento. Onde o site não nomeia a advogada, também não nomeamos.
export const recognitions: RecognitionYear[] = [
  {
    year: 2025,
    items: ["Análise Advocacia Mulher", "Análise Advocacia Regional — Advogada mais admirada"],
  },
  { year: 2024, items: ["Análise Advocacia Regional — Região Norte"] },
  {
    year: 2023,
    items: ["Ranking Análise Advocacia Regional — Região Norte", "Ranking Análise Advocacia Mulher"],
  },
  {
    year: 2022,
    items: [
      "Legal Elite Awards — Environmental Law Firm of the Year, North Brazil",
      "Ranking Análise Advocacia Regional — Região Norte",
      "Análise Advocacia Nacional",
      "Ranking Análise Advocacia Mulher",
      "Advogada mais admirada — Análise Advocacia",
      "Selo Referência Nacional em Advocacia e Justiça, pelo desempenho na área de atuação",
    ],
  },
  {
    year: 2021,
    items: ["Escritório mais admirado", "Advogada mais admirada", "Análise Advocacia Nacional"],
  },
];

export const seals = [
  `${WP}/2023/03/selo-mulher-2023.png`,
  `${WP}/2023/03/selo1.png`,
  `${WP}/2023/03/selo2.png`,
  `${WP}/2023/03/selo-adm22.png`,
  `${WP}/2023/03/selo3.png`,
  `${WP}/2023/03/selo4.png`,
  `${WP}/2023/03/selo5.png`,
  `${WP}/2023/03/selo6.png`,
];

export type Office = { city: string; lines: string[]; mapsQuery: string };

export const offices: Office[] = [
  {
    city: "Belém",
    lines: [
      "Trav. Quintino Bocaiúva, 2301",
      "Ed. Rogélio Fernandez, salas 613–615",
      "Batista Campos, CEP 66045-315",
    ],
    mapsQuery: "Trav. Quintino Bocaiúva, 2301, Batista Campos, Belém - PA, 66045-315",
  },
  {
    city: "Paragominas",
    lines: ["Av. do Contorno, 1298", "Centro, CEP 68625-245"],
    mapsQuery: "Av. do Contorno, 1298, Centro, Paragominas - PA, 68625-245",
  },
];

export function mapsLink(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
