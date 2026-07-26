export type Locale = 'es' | 'en';

export type ResumeItem = {
  title: string;
  period: string;
  place: string;
  file?: string;
};

export type Job = {
  title: string;
  period: string;
  place: string;
  bullets: string[];
  skills: string[];
};

export type PortfolioProject = {
  filter: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  cover: string;
  gallery: string[];
  demo?: string;
  /** phone = mobile screenshot framing; web = full-bleed cover */
  layout?: 'phone' | 'web';
};

export type SkillIcon = {
  href?: string;
  iconClass: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string;
    lang: string;
  };
  profile: {
    name: string;
    shortName: string;
    role: string;
    imageAlt: string;
  };
  social: {
    phone: string;
    email: string;
    linkedin: string;
    skype: string;
    github: string;
  };
  nav: {
    home: string;
    about: string;
    resume: string;
    portfolio: string;
    skills: string;
    downloadCv: string;
    cvFile: string;
    switchLangLabel: string;
    switchLangFlag: string;
    switchLangHref: string;
  };
  hero: {
    typedItems: string;
    tagline: string;
    ctaExperience: string;
  };
  about: {
    title: string;
    headline: string;
    birthLabel: string;
    birthValue: string;
    locationLabel: string;
    locationValue: string;
    extraLabel: string;
    extras: string[];
    summary: string;
    showBirth: boolean;
  };
  resume: {
    title: string;
    intro: string;
    educationTab: string;
    experienceTab: string;
    educationTitle: string;
    certificatesTitle: string;
    experienceTitle: string;
    viewCertificate: string;
    microsoftGroup: string;
    education: ResumeItem[];
    certificates: ResumeItem[];
    microsoft: ResumeItem[];
    jobs: Job[];
  };
  portfolio: {
    title: string;
    filterAll: string;
    filterWeb: string;
    filterApps: string;
    openGallery: string;
    demo: string;
    closeGallery: string;
    projects: PortfolioProject[];
  };
  skills: {
    title: string;
    tabs: { id: string; label: string }[];
    groups: Record<string, SkillIcon[]>;
    languagesTitle: string;
    languages: string[];
  };
  footer: {
    copyright: string;
  };
};
