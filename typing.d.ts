type HeroProps = {
  fullName: string;
  jobTitle: string;
  image: string | any;
};

type NavLinksProps = [
  {
    id: string;
    label: string;
    url: string;
  }
];

type StatsProps = [
  {
    label: string;
    value: number;
  }
];

type AbilitiesProps = [
  {
    name: string;
    icon: string;
    description: string;
    inverted?: boolean;
  }
];

type ProjectsProps = [
  {
    name: string;
    image: string;
    description: string;
  }
];

type EducationsProps = [
  {
    title: string;
    description: string;
    timeRange: string;
    url: string;
  }
];

type ContactsProps = [
  {
    label: string;
    icon: string;
    description: string;
    url: string;
  }
];

type FeedbacksProps = [
  {
    name: string;
    position: string;
    avatar: string;
    review: string;
  }
];

type FooterProps = [
  {
    label: string;
    urls: [
      {
        label: string;
        url: string;
        blank: boolean;
      }
    ];
  }
];

type SocialMediaProps = [
  {
    label: string;
    username: string;
    icon: string;
    url: string;
  }
];

type DataSchema = {
  hero: HeroProps;
  navLinks: NavLinksProps;
  stats: StatsProps;
  abilities: AbilitiesProps;
  projects: ProjectsProps;
  educations: EducationsProps;
  contacts: ContactsProps;
  feedbacks: FeedbacksProps;
  footer: FooterProps;
  socialMedia: SocialMediaProps;
};
