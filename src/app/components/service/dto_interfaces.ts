export interface Skill {
  name: string;
  progress: number;
  className: string;
}

export interface Job{
  year: string;
  className: string;
  company: string;
  city: string;
  position: string;
}

export interface Education {
  year: string;
  className: string;
  university: string;
  degree: string;
  description: string;
}

export interface Reference {
  name: string;
  address: string;
  phone: string;
  email: string;
}

export interface Contacts {
  icon: string;
  text: string;
}
