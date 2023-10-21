export type Career = {
  name: string;
  season: string;
  text: string;
  link?: string;
};

export type Skill = {
  name: string;
};

export type About = {
  text: string;
};

export type Certification = {
  name: string;
};

export type Awards = {
  name: string;
  link: string;
};

export type Works = {
  title: string;
  skill: string;
  imageName: string;
  imageLink: string;
  otherLinks?: Link;
};

type Link = {
  github?: string;
  webpage?: string;
  other?: string;
};

export type Other = {
  year: string;
  content: {
    name: string;
    link?: string;
  }[];
};
