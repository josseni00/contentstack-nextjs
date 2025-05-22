export interface IPricing {
  name: string;
  price: string;
  currency: string;
  frequency: string;
  topPick: boolean;
  features: {
    title: string;
    description: string;
    items: string[];
  };
}

export interface IFAQ {
  question: string;
  answer: string;
}

export interface ITestimonial {
  name: string;
  role: string;
  message: string;
  avatar: string;
}

export interface IStats {
  title: string;
  icon: string;
  description: string;
}
