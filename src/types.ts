export type PageType = 
  | 'home' 
  | 'about' 
  | 'dog-food' 
  | 'cat-food' 
  | 'products' 
  | 'store-locator' 
  | 'blogs' 
  | 'contact';

export type PetType = 'dog' | 'cat';

export type LifeStage = 'puppy' | 'kitten' | 'adult' | 'senior' | 'all-stages' | 'special-care';

export interface Product {
  id: string;
  name: string;
  suitableFor: string;
  petType: PetType;
  lifeStage: LifeStage;
  categoryTag: string; // e.g., "Puppy Food", "Adult Dog Food", "Indoor Cat"
  shortDescription: string;
  fullDescription: string;
  image: string;
  keyBenefits: string[];
  ingredients: string[];
  nutritionalAnalysis: {
    crudeProtein: string;
    crudeFat: string;
    crudeFiber: string;
    moisture: string;
    omega3?: string;
    omega6?: string;
    caloricContent: string;
  };
  feedingGuide: {
    weightKg: string;
    dailyServingGrams: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  featured?: boolean;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  openingHours: string;
  dogFoodInStock: boolean;
  catFoodInStock: boolean;
  latitude: number;
  longitude: number;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Dog Care' | 'Cat Care' | 'Nutrition Guide' | 'Pet Health';
  readTime: string;
  date: string;
  author: string;
  image: string;
  shortDescription: string;
  contentParagraphs: string[];
  keyTakeaways: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
