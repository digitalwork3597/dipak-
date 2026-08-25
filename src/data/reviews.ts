// BORCELLE Customer Reviews & Happy Pet Stories Data Source
// -------------------------------------------------------------
// Note: The reviews below are sample placeholder stories for demonstration purposes.
// To connect real customer reviews from a database or CMS:
// 1. Set `isSample: false` on approved real reviews.
// 2. Set `isApproved: true` for reviews verified by moderation.
// 3. Update customer names, pet names, photos, and review text.

export interface Review {
  id: string;
  customerName: string;
  customerImage: string;
  petName: string;
  petImage: string;
  petType: 'dog' | 'cat';
  rating: number; // 1 to 5
  reviewText: string;
  isSample: boolean; // True indicates placeholder data
  isApproved?: boolean; // Set true when approved by moderation
  submissionDate?: string;
}

export interface PetStory {
  id: string;
  title: string;
  petName: string;
  petType: 'dog' | 'cat';
  image: string;
  shortStory: string;
  isSample: boolean;
}

/**
 * Sample Pet Parent Stories (Clearly labeled as sample data until real reviews are loaded)
 */
export const SAMPLE_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    customerName: 'Rahul Sharma',
    customerImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    petName: 'Bruno',
    petImage: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=500&q=80',
    petType: 'dog',
    rating: 5,
    reviewText: 'The BORCELLE website made it easy for me to explore food options suitable for Bruno’s age and needs. The product information is clear and easy to understand.',
    isSample: true,
    isApproved: false
  },
  {
    id: 'rev-2',
    customerName: 'Priya Patel',
    customerImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    petName: 'Luna',
    petImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=500&q=80',
    petType: 'cat',
    rating: 5,
    reviewText: 'I liked how easily I could explore the cat food range and understand the different nutrition options for Luna.',
    isSample: true,
    isApproved: false
  },
  {
    id: 'rev-3',
    customerName: 'Amit Mehta',
    customerImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    petName: 'Max',
    petImage: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=500&q=80',
    petType: 'dog',
    rating: 5,
    reviewText: 'The Pet Food Finder helped me quickly explore the right BORCELLE category for Max. The website is simple and useful.',
    isSample: true,
    isApproved: false
  },
  {
    id: 'rev-4',
    customerName: 'Neha Shah',
    customerImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    petName: 'Bella',
    petImage: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=500&q=80',
    petType: 'cat',
    rating: 5,
    reviewText: 'The product details and feeding information are presented clearly. Finding information for Bella was quick and convenient.',
    isSample: true,
    isApproved: false
  },
  {
    id: 'rev-5',
    customerName: 'Rohan Verma',
    customerImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    petName: 'Rocky',
    petImage: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=500&q=80',
    petType: 'dog',
    rating: 5,
    reviewText: 'The Store Locator made it easy to search for a nearby BORCELLE store. The overall experience was smooth and helpful.',
    isSample: true,
    isApproved: false
  },
  {
    id: 'rev-6',
    customerName: 'Anjali Desai',
    customerImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    petName: 'Simba',
    petImage: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=500&q=80',
    petType: 'cat',
    rating: 5,
    reviewText: 'I enjoy reading the pet-care articles and exploring the different BORCELLE nutrition categories for Simba.',
    isSample: true,
    isApproved: false
  }
];

/**
 * Happy Pet Stories Gallery Items
 */
export const HAPPY_PET_STORIES: PetStory[] = [
  {
    id: 'story-1',
    title: 'Bruno’s Everyday Adventures',
    petName: 'Bruno',
    petType: 'dog',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80',
    shortStory: 'Bruno loves long walks and playful outdoor moments with his family.',
    isSample: true
  },
  {
    id: 'story-2',
    title: 'Luna’s Cozy Home',
    petName: 'Luna',
    petType: 'cat',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&q=80',
    shortStory: 'Luna enjoys peaceful afternoons and spending time with her family.',
    isSample: true
  },
  {
    id: 'story-3',
    title: 'Max’s Playful Days',
    petName: 'Max',
    petType: 'dog',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=600&q=80',
    shortStory: 'Max brings energy and happiness to every family moment.',
    isSample: true
  },
  {
    id: 'story-4',
    title: 'Bella’s Happy Moments',
    petName: 'Bella',
    petType: 'cat',
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=600&q=80',
    shortStory: 'Bella enjoys calm, comfortable days with her pet parents.',
    isSample: true
  },
  {
    id: 'story-5',
    title: 'Rocky’s Morning Strolls',
    petName: 'Rocky',
    petType: 'dog',
    image: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=600&q=80',
    shortStory: 'Rocky brings joy and enthusiasm to morning walks in the park.',
    isSample: true
  },
  {
    id: 'story-6',
    title: 'Simba’s Sunlit Naps',
    petName: 'Simba',
    petType: 'cat',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=600&q=80',
    shortStory: 'Simba loves finding sunny spots around the house to curl up and relax.',
    isSample: true
  }
];
