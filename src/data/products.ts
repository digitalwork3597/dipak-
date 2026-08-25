import { Product } from '../types';
import adultDogBagImg from '../assets/images/borcelle_adult_dog_bag_1786628492232.jpg';
import puppyBagImg from '../assets/images/borcelle_puppy_bag_1786628507707.jpg';
import seniorBagImg from '../assets/images/borcelle_senior_bag_1786628522992.jpg';
import catBagImg from '../assets/images/borcelle_cat_bag_1786628538149.jpg';

export const PRODUCTS: Product[] = [
  // ==================== DOG FOOD PRODUCTS (6 VARIETIES) ====================
  {
    id: 'dog-puppy-food',
    name: 'Borcelle Puppy Food',
    suitableFor: 'Puppies from 2–12 months',
    petType: 'dog',
    lifeStage: 'puppy',
    categoryTag: 'Puppy Food',
    shortDescription: 'Complete and balanced nutrition to support healthy growth, strong bones, and playful energy.',
    fullDescription: 'Borcelle Puppy Food provides complete and balanced nutrition tailored specifically for growing puppies. Crafted with real meat protein, natural DHA, and essential minerals to build strong bones and support playful everyday energy.',
    image: puppyBagImg,
    keyBenefits: [
      'Healthy Growth',
      'Strong Bones and Teeth',
      'Energy Support',
      'Healthy Digestion'
    ],
    ingredients: [
      'Deboned Chicken',
      'Chicken Meal',
      'Whole Brown Rice',
      'Oatmeal',
      'Chicken Fat (preserved with mixed tocopherols)',
      'Dried Beet Pulp',
      'Salmon Oil (source of DHA)',
      'Natural Flavors',
      'Flaxseed',
      'Apples',
      'Blueberries',
      'Carrots',
      'Essential Vitamins & Minerals'
    ],
    nutritionalAnalysis: {
      crudeProtein: '28.0% Min',
      crudeFat: '16.0% Min',
      crudeFiber: '4.0% Max',
      moisture: '10.0% Max',
      omega3: '0.6% Min',
      omega6: '2.8% Min',
      caloricContent: '3,780 kcal/kg (420 kcal/cup)'
    },
    feedingGuide: [
      { weightKg: '1 - 3 kg', dailyServingGrams: '50 - 110g' },
      { weightKg: '3 - 7 kg', dailyServingGrams: '110 - 200g' },
      { weightKg: '7 - 12 kg', dailyServingGrams: '200 - 310g' },
      { weightKg: '12 - 20 kg', dailyServingGrams: '310 - 450g' }
    ],
    faqs: [
      {
        question: 'At what age should I transition my puppy to adult food?',
        answer: 'Most puppies transition to Borcelle Adult Dog Food around 12 to 14 months of age.'
      },
      {
        question: 'Is this kibble size suitable for small puppies?',
        answer: 'Yes, our Puppy Food kibble is designed into easy-to-chew small bites suitable for all puppy breeds.'
      }
    ],
    featured: true
  },
  {
    id: 'dog-adult-food',
    name: 'Borcelle Adult Dog Food',
    suitableFor: 'Adult Dogs (1+ Years)',
    petType: 'dog',
    lifeStage: 'adult',
    categoryTag: 'Adult Dog Food',
    shortDescription: 'Balanced everyday nutrition to support energy, strength, and overall wellbeing.',
    fullDescription: 'Borcelle Adult Dog Food offers complete daily nourishment for adult dogs of all breeds. Formulated with high-quality protein, essential vitamins, and omega fatty acids for sustained energy and a shiny coat.',
    image: adultDogBagImg,
    keyBenefits: [
      'Daily Energy',
      'Strong Muscles',
      'Healthy Digestion',
      'Healthy Skin and Coat'
    ],
    ingredients: [
      'Deboned Lamb',
      'Lamb Meal',
      'Sweet Potatoes',
      'Peas',
      'Garbanzo Beans',
      'Canola Oil',
      'Dried Kelp',
      'Spinach',
      'Cranberries',
      'Zinc Proteinate',
      'Probiotics'
    ],
    nutritionalAnalysis: {
      crudeProtein: '25.0% Min',
      crudeFat: '14.0% Min',
      crudeFiber: '4.5% Max',
      moisture: '10.0% Max',
      omega3: '0.5% Min',
      omega6: '2.2% Min',
      caloricContent: '3,650 kcal/kg (395 kcal/cup)'
    },
    feedingGuide: [
      { weightKg: '5 - 10 kg', dailyServingGrams: '110 - 180g' },
      { weightKg: '10 - 20 kg', dailyServingGrams: '180 - 300g' },
      { weightKg: '20 - 35 kg', dailyServingGrams: '300 - 450g' },
      { weightKg: '35 - 50 kg', dailyServingGrams: '450 - 580g' }
    ],
    faqs: [
      {
        question: 'Is this formula suitable for daily long-term feeding?',
        answer: 'Yes, Borcelle Adult Dog Food is 100% complete and balanced for daily lifetime adult dog maintenance.'
      }
    ],
    featured: true
  },
  {
    id: 'dog-senior-food',
    name: 'Borcelle Senior Dog Food',
    suitableFor: 'Senior Dogs (7+ Years)',
    petType: 'dog',
    lifeStage: 'senior',
    categoryTag: 'Senior Dog Food',
    shortDescription: 'Gentle and balanced nutrition designed to support healthy aging and everyday mobility.',
    fullDescription: 'Crafted specifically for mature dogs, Borcelle Senior Dog Food features gentle, easily digestible ingredients enriched with glucosamine and antioxidants to maintain joint comfort and active golden years.',
    image: seniorBagImg,
    keyBenefits: [
      'Healthy Aging',
      'Joint Support',
      'Easy Digestion',
      'Balanced Energy'
    ],
    ingredients: [
      'Wild Salmon',
      'Salmon Meal',
      'Whole Pumpkin',
      'Barley',
      'Pearled Barley',
      'Glucosamine Hydrochloride',
      'Chondroitin Sulfate',
      'Green Tea Extract'
    ],
    nutritionalAnalysis: {
      crudeProtein: '23.0% Min',
      crudeFat: '11.0% Min',
      crudeFiber: '5.0% Max',
      moisture: '10.0% Max',
      caloricContent: '3,420 kcal/kg (360 kcal/cup)'
    },
    feedingGuide: [
      { weightKg: '5 - 10 kg', dailyServingGrams: '90 - 150g' },
      { weightKg: '10 - 25 kg', dailyServingGrams: '150 - 290g' },
      { weightKg: '25 - 40 kg', dailyServingGrams: '290 - 410g' }
    ],
    faqs: [
      {
        question: 'When is a dog considered senior?',
        answer: 'Most dogs enter their senior years around age 7. Smaller breeds may enter senior stage around age 8-9.'
      }
    ],
    featured: true
  },
  {
    id: 'dog-small-breed-food',
    name: 'Borcelle Small Breed Dog Food',
    suitableFor: 'Small-Breed Adult Dogs',
    petType: 'dog',
    lifeStage: 'adult',
    categoryTag: 'Small Breed',
    shortDescription: 'Small-sized kibble with balanced nutrition specially designed for smaller dogs.',
    fullDescription: 'Borcelle Small Breed Dog Food features concentrated nutrients and smaller kibble pieces designed for smaller mouths and faster metabolisms.',
    image: adultDogBagImg,
    keyBenefits: [
      'Easy-to-Eat Kibble',
      'Daily Energy',
      'Healthy Digestion',
      'Complete Nutrition'
    ],
    ingredients: ['Deboned Turkey', 'Turkey Meal', 'Organic Quinoa', 'Flaxseed', 'Carrots', 'Vitamins & Minerals'],
    nutritionalAnalysis: {
      crudeProtein: '27.0% Min',
      crudeFat: '15.0% Min',
      crudeFiber: '3.5% Max',
      moisture: '10.0% Max',
      caloricContent: '3,810 kcal/kg (410 kcal/cup)'
    },
    feedingGuide: [
      { weightKg: '1 - 3 kg', dailyServingGrams: '35 - 75g' },
      { weightKg: '3 - 6 kg', dailyServingGrams: '75 - 120g' },
      { weightKg: '6 - 10 kg', dailyServingGrams: '120 - 170g' }
    ],
    faqs: []
  },
  {
    id: 'dog-large-breed-food',
    name: 'Borcelle Large Breed Dog Food',
    suitableFor: 'Large-Breed Adult Dogs',
    petType: 'dog',
    lifeStage: 'adult',
    categoryTag: 'Large Breed',
    shortDescription: 'Balanced nutrition designed to support strong muscles, healthy bones, and an active lifestyle.',
    fullDescription: 'Formulated for large and giant breeds over 25kg, featuring larger kibble to promote chewing and controlled calcium levels for skeletal health.',
    image: adultDogBagImg,
    keyBenefits: [
      'Muscle Support',
      'Bone Support',
      'Healthy Joints',
      'Long-Lasting Energy'
    ],
    ingredients: ['Grass-Fed Beef', 'Beef Meal', 'Whole Oats', 'Barley', 'L-Carnitine', 'Rosemary Extract'],
    nutritionalAnalysis: {
      crudeProtein: '26.0% Min',
      crudeFat: '13.0% Min',
      crudeFiber: '4.0% Max',
      moisture: '10.0% Max',
      caloricContent: '3,580 kcal/kg (380 kcal/cup)'
    },
    feedingGuide: [
      { weightKg: '25 - 40 kg', dailyServingGrams: '320 - 450g' },
      { weightKg: '40 - 60 kg', dailyServingGrams: '450 - 600g' }
    ],
    faqs: []
  },
  {
    id: 'dog-active-food',
    name: 'Borcelle Active Dog Food',
    suitableFor: 'Highly Active Adult Dogs',
    petType: 'dog',
    lifeStage: 'adult',
    categoryTag: 'Active Dog',
    shortDescription: 'Energy-focused nutrition created to support active dogs and their demanding daily routines.',
    fullDescription: 'Borcelle Active Dog Food provides extra protein and sustained energy for working dogs, sporting breeds, and dogs with high daily activity levels.',
    image: adultDogBagImg,
    keyBenefits: [
      'High Energy Support',
      'Muscle Maintenance',
      'Endurance Support',
      'Recovery Support'
    ],
    ingredients: ['Chicken Meal', 'Deboned Chicken', 'Sweet Potatoes', 'Chicken Fat', 'L-Carnitine', 'Glucosamine'],
    nutritionalAnalysis: {
      crudeProtein: '30.0% Min',
      crudeFat: '18.0% Min',
      crudeFiber: '3.5% Max',
      moisture: '10.0% Max',
      caloricContent: '3,920 kcal/kg (435 kcal/cup)'
    },
    feedingGuide: [
      { weightKg: '10 - 20 kg', dailyServingGrams: '200 - 330g' },
      { weightKg: '20 - 35 kg', dailyServingGrams: '330 - 490g' }
    ],
    faqs: []
  },

  // ==================== CAT FOOD PRODUCTS (6 VARIETIES) ====================
  {
    id: 'cat-kitten-food',
    name: 'Borcelle Kitten Food',
    suitableFor: 'Kittens up to 12 months',
    petType: 'cat',
    lifeStage: 'kitten',
    categoryTag: 'Kitten Food',
    shortDescription: 'Complete nutrition to support healthy growth, brain development, and playful energy.',
    fullDescription: 'Borcelle Kitten Food is rich in premium salmon, ocean whitefish, essential taurine, and DHA to nourish cognitive brain function and strong body development in growing kittens.',
    image: catBagImg,
    keyBenefits: [
      'Healthy Growth',
      'Brain Development',
      'Strong Bones',
      'Immune Support'
    ],
    ingredients: [
      'Deboned Salmon',
      'Ocean Whitefish Meal',
      'Chicken Meal',
      'Peas',
      'Chicken Fat',
      'Dried Egg Product',
      'Taurine',
      'Salmon Oil',
      'Dried Kelp',
      'Probiotic Fermentation Products'
    ],
    nutritionalAnalysis: {
      crudeProtein: '36.0% Min',
      crudeFat: '18.0% Min',
      crudeFiber: '3.0% Max',
      moisture: '9.0% Max',
      caloricContent: '3,950 kcal/kg (440 kcal/cup)'
    },
    feedingGuide: [
      { weightKg: '0.5 - 1.5 kg', dailyServingGrams: '30 - 55g' },
      { weightKg: '1.5 - 3.0 kg', dailyServingGrams: '55 - 85g' },
      { weightKg: '3.0 - 4.5 kg', dailyServingGrams: '85 - 110g' }
    ],
    faqs: [
      {
        question: 'When can kittens start eating dry food?',
        answer: 'Kittens can begin eating moistened Borcelle Kitten Food from around 4 to 6 weeks of age.'
      }
    ],
    featured: true
  },
  {
    id: 'cat-adult-food',
    name: 'Borcelle Adult Cat Food',
    suitableFor: 'Adult Cats (1+ Years)',
    petType: 'cat',
    lifeStage: 'adult',
    categoryTag: 'Adult Cat Food',
    shortDescription: 'Complete and balanced everyday nutrition for healthy, active, and happy cats.',
    fullDescription: 'Borcelle Adult Cat Food is crafted with real chicken and turkey to satisfy feline cravings while delivering balanced energy, taurine for heart health, and Omega-6 for shiny fur.',
    image: catBagImg,
    keyBenefits: [
      'Daily Energy',
      'Healthy Digestion',
      'Healthy Skin and Coat',
      'Overall Wellbeing'
    ],
    ingredients: [
      'Deboned Chicken',
      'Chicken Meal',
      'Turkey Meal',
      'Brown Rice',
      'Chicken Fat',
      'Flaxseed',
      'Cranberries',
      'Taurine'
    ],
    nutritionalAnalysis: {
      crudeProtein: '33.0% Min',
      crudeFat: '14.0% Min',
      crudeFiber: '4.0% Max',
      moisture: '9.0% Max',
      caloricContent: '3,650 kcal/kg (385 kcal/cup)'
    },
    feedingGuide: [
      { weightKg: '2 - 4 kg', dailyServingGrams: '40 - 60g' },
      { weightKg: '4 - 6 kg', dailyServingGrams: '60 - 80g' },
      { weightKg: '6 - 8 kg', dailyServingGrams: '80 - 100g' }
    ],
    faqs: [],
    featured: true
  },
  {
    id: 'cat-senior-food',
    name: 'Borcelle Senior Cat Food',
    suitableFor: 'Senior Cats (7+ Years)',
    petType: 'cat',
    lifeStage: 'senior',
    categoryTag: 'Senior Cat Food',
    shortDescription: 'Gentle nutrition designed to support healthy aging, comfort, and everyday vitality.',
    fullDescription: 'Designed for mature cats aged 7+, Borcelle Senior Cat Food combines gentle turkey protein, controlled mineral levels, and urinary support for comfortable senior living.',
    image: catBagImg,
    keyBenefits: [
      'Healthy Aging',
      'Easy Digestion',
      'Balanced Energy',
      'Overall Wellness'
    ],
    ingredients: ['Deboned Turkey', 'Turkey Meal', 'Cranberries', 'Brown Rice', 'Fish Oil', 'Glucosamine', 'Taurine'],
    nutritionalAnalysis: {
      crudeProtein: '30.0% Min',
      crudeFat: '11.0% Min',
      crudeFiber: '4.5% Max',
      moisture: '9.0% Max',
      caloricContent: '3,480 kcal/kg (365 kcal/cup)'
    },
    feedingGuide: [
      { weightKg: '2 - 4 kg', dailyServingGrams: '40 - 55g' },
      { weightKg: '4 - 6 kg', dailyServingGrams: '55 - 75g' }
    ],
    faqs: [],
    featured: true
  },
  {
    id: 'cat-indoor-food',
    name: 'Borcelle Indoor Cat Food',
    suitableFor: 'Indoor Adult Cats',
    petType: 'cat',
    lifeStage: 'adult',
    categoryTag: 'Indoor Cat Food',
    shortDescription: 'Balanced nutrition designed for the lifestyle and daily needs of indoor cats.',
    fullDescription: 'Borcelle Indoor Cat Food features lean poultry, moderate calories, and natural fiber to help prevent weight gain and control hairballs in indoor cats.',
    image: catBagImg,
    keyBenefits: [
      'Healthy Weight Support',
      'Hairball Support',
      'Healthy Digestion',
      'Daily Wellbeing'
    ],
    ingredients: ['Deboned Chicken', 'Turkey Meal', 'Whole Oats', 'Miscanthus Grass', 'Cranberries', 'Yucca Schidigera'],
    nutritionalAnalysis: {
      crudeProtein: '32.0% Min',
      crudeFat: '12.0% Min',
      crudeFiber: '6.0% Max',
      moisture: '9.0% Max',
      caloricContent: '3,520 kcal/kg (370 kcal/cup)'
    },
    feedingGuide: [
      { weightKg: '2 - 4 kg', dailyServingGrams: '40 - 60g' },
      { weightKg: '4 - 6 kg', dailyServingGrams: '60 - 80g' }
    ],
    faqs: []
  },
  {
    id: 'cat-hairball-care',
    name: 'Borcelle Hairball Care',
    suitableFor: 'Cats needing hairball support',
    petType: 'cat',
    lifeStage: 'special-care',
    categoryTag: 'Hairball Care',
    shortDescription: 'Specially designed nutrition to support healthy digestion and natural hairball management.',
    fullDescription: 'Borcelle Hairball Care includes a targeted blend of natural oat fibers and prebiotic miscanthus grass to gently sweep swallowed fur through the digestive system.',
    image: catBagImg,
    keyBenefits: [
      'Hairball Support',
      'Digestive Health',
      'Healthy Coat',
      'Daily Comfort'
    ],
    ingredients: ['Chicken Meal', 'Oat Fiber', 'Miscanthus Grass', 'Chicken Fat', 'Flaxseed', 'Probiotics', 'Taurine'],
    nutritionalAnalysis: {
      crudeProtein: '32.0% Min',
      crudeFat: '13.0% Min',
      crudeFiber: '6.5% Max',
      moisture: '9.0% Max',
      caloricContent: '3,540 kcal/kg (375 kcal/cup)'
    },
    feedingGuide: [
      { weightKg: '2 - 4 kg', dailyServingGrams: '40 - 60g' },
      { weightKg: '4 - 6 kg', dailyServingGrams: '60 - 80g' }
    ],
    faqs: []
  },
  {
    id: 'cat-sensitive-care',
    name: 'Borcelle Sensitive Care',
    suitableFor: 'Cats with sensitive dietary needs',
    petType: 'cat',
    lifeStage: 'special-care',
    categoryTag: 'Sensitive Care',
    shortDescription: 'Gentle and carefully selected nutrition designed for cats with sensitive dietary needs.',
    fullDescription: 'Borcelle Sensitive Care utilizes ocean whitefish as a gentle, digestible single-fish protein paired with pumpkin to soothe delicate digestive tracts.',
    image: catBagImg,
    keyBenefits: [
      'Gentle Digestion',
      'Easy-to-Digest Ingredients',
      'Healthy Skin and Coat',
      'Balanced Nutrition'
    ],
    ingredients: ['Ocean Whitefish', 'Whitefish Meal', 'Pumpkin', 'Tapioca Starch', 'Canola Oil', 'Probiotics', 'Taurine'],
    nutritionalAnalysis: {
      crudeProtein: '31.0% Min',
      crudeFat: '13.0% Min',
      crudeFiber: '4.0% Max',
      moisture: '9.0% Max',
      caloricContent: '3,600 kcal/kg (380 kcal/cup)'
    },
    feedingGuide: [
      { weightKg: '2 - 4 kg', dailyServingGrams: '45 - 65g' },
      { weightKg: '4 - 6 kg', dailyServingGrams: '65 - 85g' }
    ],
    faqs: []
  }
];
