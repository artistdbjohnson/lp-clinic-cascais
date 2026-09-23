/** Published before/after pairs. Instagram frames live in public/gallery. */

export type GalleryPair = {
  id: string;
  before: string;
  after: string;
  href: string;
  source: "instagram" | "clinic";
  kicker: { pt: string; en: string };
  label: { pt: string; en: string };
  detail: { pt: string; en: string };
};

export const GALLERY_PAIRS: GalleryPair[] = [
  {
    id: "facetas",
    before: "/gallery/facetas-antes.jpg",
    after: "/gallery/facetas-depois.jpg",
    href: "https://www.instagram.com/p/Dc_V1khkS6U/",
    source: "instagram",
    kicker: { pt: "Facetas", en: "Veneers" },
    label: { pt: "Invisalign e 4 facetas", en: "Invisalign, then 4 veneers" },
    detail: {
      pt: "A publicação descreve o alinhamento primeiro, para criar espaço, e só depois 4 facetas nos incisivos. Tratamento do Dr. Pedro Pimenta.",
      en: "The post describes alignment first, to create space, and only then 4 veneers on the incisors. Treatment by Dr. Pedro Pimenta.",
    },
  },
  {
    id: "invisalign",
    before: "/gallery/invisalign-antes.jpg",
    after: "/gallery/invisalign-depois.jpg",
    href: "https://www.instagram.com/p/Ddl4HxLiNXU/",
    source: "instagram",
    kicker: { pt: "Invisalign", en: "Invisalign" },
    label: { pt: "Alinhamento progressivo", en: "Progressive alignment" },
    detail: {
      pt: "Dois enquadramentos do mesmo caso: o alinhamento muda ao longo do tratamento e o sorriso publicado mantém a naturalidade. Dr. Pedro Pimenta, OMD 9911.",
      en: "Two frames from the same case: alignment changes through treatment, and the published smile keeps its natural look. Dr. Pedro Pimenta, OMD 9911.",
    },
  },
  {
    id: "branqueamento",
    before: "/gallery/branqueamento-antes.jpg",
    after: "/gallery/branqueamento-depois.jpg",
    href: "https://www.instagram.com/p/DcLdfHqjOoB/",
    source: "instagram",
    kicker: { pt: "Branqueamento", en: "Whitening" },
    label: { pt: "Philips Zoom", en: "Philips Zoom" },
    detail: {
      pt: "A clínica descreve uma sessão em consultório e duas semanas em casa, com a Drª Catarina Leonardo. O objetivo publicado é luminosidade natural, não um sorriso artificial.",
      en: "The clinic describes one in-office session and two weeks at home, with Dr. Catarina Leonardo. The published aim is natural luminosity, not an artificial smile.",
    },
  },
  {
    id: "perio",
    before: "/gallery/perio-antes.jpg",
    after: "/gallery/perio-depois.jpg",
    href: "https://www.instagram.com/p/DceDGBMCCFA/",
    source: "instagram",
    kicker: { pt: "Periodontite e implantes", en: "Periodontitis and implants" },
    label: { pt: "Reabilitação fixa", en: "Fixed rehabilitation" },
    detail: {
      pt: "Caso publicado de periodontite severa: extração dos dentes comprometidos, implantes e reabilitação fixa, com planeamento digital e cirurgia guiada por CBCT.",
      en: "Published severe-periodontitis case: extraction of the compromised teeth, implants, and a fixed rehabilitation, with digital planning and CBCT-guided surgery.",
    },
  },
  {
    id: "reab",
    before: "/gallery/reab-antes.jpg",
    after: "/gallery/reab-depois.jpg",
    href: "https://www.instagram.com/p/DcwCpU6kQq3/",
    source: "instagram",
    kicker: { pt: "Reabilitação oral", en: "Oral rehabilitation" },
    label: { pt: "Higiene, implantes, coroas", en: "Hygiene, implants, crowns" },
    detail: {
      pt: "O percurso publicado começa na higiene e nas cáries, segue com implantes e Invisalign, e termina em coroas unitárias sobre dentes naturais e implantes.",
      en: "The published path starts with hygiene and caries, continues with implants and Invisalign, and ends in single crowns on natural teeth and implants.",
    },
  },
  {
    id: "reab-frame",
    before: "/gallery/reab-antes.jpg",
    after: "/gallery/reab-sorriso-depois.jpg",
    href: "https://www.instagram.com/p/DcwCpU6kQq3/",
    source: "instagram",
    kicker: { pt: "Reabilitação oral", en: "Oral rehabilitation" },
    label: { pt: "O mesmo caso, outro enquadramento", en: "Same case, another frame" },
    detail: {
      pt: "Segundo par do mesmo carrossel. Não é outro paciente: é outro registo publicado do sorriso depois da reabilitação.",
      en: "Second pair from the same carousel. Not another patient: another published frame of the smile after rehabilitation.",
    },
  },
  {
    id: "desgaste",
    before: "/gallery/desgaste-antes.jpg",
    after: "/gallery/desgaste-depois.jpg",
    href: "https://www.instagram.com/p/Db3NI4OiAfn/",
    source: "instagram",
    kicker: { pt: "Desgaste severo", en: "Severe wear" },
    label: { pt: "Reabilitação total", en: "Full-mouth rehabilitation" },
    detail: {
      pt: "A publicação fala de desgaste severo nos dentes naturais, implantes nos dentes em falta e coroas em cima e em baixo, sobre dentes e sobre implantes.",
      en: "The post describes severe wear of the natural teeth, implants for missing teeth, and upper and lower crowns on teeth and on implants.",
    },
  },
  {
    id: "maxila",
    before: "/gallery/maxila-antes.jpg",
    after: "/gallery/maxila-depois.jpg",
    href: "https://www.instagram.com/p/DbqeXINCAOX/",
    source: "instagram",
    kicker: { pt: "Prótese sobre implantes", en: "Implant prosthesis" },
    label: { pt: "Depois de um tumor maxilar", en: "After a maxillary tumor" },
    detail: {
      pt: "A clínica publica a perda de metade da maxila após um tumor, e a reabilitação com prótese sobre implantes pelo Dr. Pedro Pimenta.",
      en: "The clinic publishes the loss of half the maxilla after a tumor, and rehabilitation with a prosthesis on implants by Dr. Pedro Pimenta.",
    },
  },
  {
    id: "md-1",
    before: "/cases/case-01.jpg",
    after: "/cases/case-02.jpg",
    href: "https://www.lpclinic.pt/casos-clinicos-md",
    source: "clinic",
    kicker: { pt: "Arquivo da clínica", en: "Clinic archive" },
    label: { pt: "Caso clínico MD", en: "Clinical case MD" },
    detail: {
      pt: "Par do arquivo de medicina dentária em lpclinic.pt. A comparação fica no registo publicado, sem um resultado inventado.",
      en: "Pair from the dentistry archive on lpclinic.pt. The comparison stays with the published record, not an invented result.",
    },
  },
  {
    id: "md-2",
    before: "/cases/case-03.jpg",
    after: "/cases/case-04.jpg",
    href: "https://www.lpclinic.pt/casos-clinicos-md",
    source: "clinic",
    kicker: { pt: "Arquivo da clínica", en: "Clinic archive" },
    label: { pt: "Segundo caso MD", en: "Second MD case" },
    detail: {
      pt: "Segundo par MD do mesmo arquivo publicado.",
      en: "Second MD pair from the same published archive.",
    },
  },
  {
    id: "hf-1",
    before: "/cases/case-05.jpg",
    after: "/cases/case-06.jpg",
    href: "https://www.lpclinic.pt/casos-clinicos-hf",
    source: "clinic",
    kicker: { pt: "Harmonização facial", en: "Facial harmonization" },
    label: { pt: "Caso clínico HF", en: "Clinical case HF" },
    detail: {
      pt: "Par de harmonização facial publicado no site da clínica.",
      en: "Facial-harmonization pair published on the clinic site.",
    },
  },
];
