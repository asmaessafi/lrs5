import { z } from "zod";

export type Category = 
  | "gel-douche"
  | "deodorant"
  | "roll-on"
  | "shampoing"
  | "masques-capillaires"
  | "huiles"
  | "soins-enfants-bebe"
  | "styling"
  | "cremes-vaselines"
  | "gel-hydro-alcoolique"
  | "autres";

export type Brand = "LYS INTENSE" | "BOOM" | "AL JARA";

export interface Product {
  id: string;
  name: string;
  brand: Brand;
  category: Category;
  description: string;
  variants?: string[];
  imageUrl: string;
}

export const categoryLabels: Record<Category, string> = {
  "gel-douche": "Gel Douche",
  "deodorant": "Déodorant",
  "roll-on": "Roll-On",
  "shampoing": "Shampoing",
  "masques-capillaires": "Masques Capillaires",
  "huiles": "Huiles",
  "soins-enfants-bebe": "Soins Enfants/Bébé",
  "styling": "Styling (BOOM)",
  "cremes-vaselines": "Crèmes/Vaselines",
  "gel-hydro-alcoolique": "Gel Hydro/Alcoolique",
  "autres": "Autres",
};

export const allCategories: Category[] = [
  "gel-douche",
  "deodorant",
  "roll-on",
  "shampoing",
  "masques-capillaires",
  "huiles",
  "soins-enfants-bebe",
  "styling",
  "cremes-vaselines",
  "gel-hydro-alcoolique",
  "autres",
];

export const products: Product[] = [
  {
    id: "gd-kiss-me",
    name: "Gel Douche Kiss Me Sensation",
    brand: "LYS INTENSE",
    category: "gel-douche",
    description: "Revigorant – Hydratant",
    variants: ["Kiss Me", "La Vie en Rose", "Macaron Gourmand", "Macha3ir Oriental"],
    imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=600&fit=crop",
  },
  {
    id: "gd-mojito",
    name: "Gel Douche Mojito Cocktail",
    brand: "LYS INTENSE",
    category: "gel-douche",
    description: "Relaxant – Rafraîchissant",
    variants: ["Mojito Cocktail", "Montagne & Neige", "Sidi Bou-Saïd Voyage", "Tahiti Voyage"],
    imageUrl: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=600&fit=crop",
  },
  {
    id: "gd-aljara-cedar",
    name: "Gel Douche Cedarwood",
    brand: "AL JARA",
    category: "gel-douche",
    description: "Fresh – Premium",
    variants: ["Cedarwood", "Musk", "Lavender"],
    imageUrl: "https://images.unsplash.com/photo-1620756235483-a4d8e6e40cd2?w=400&h=600&fit=crop",
  },
  {
    id: "gd-aljara-vanilla",
    name: "Gel Douche Vanilla",
    brand: "AL JARA",
    category: "gel-douche",
    description: "Delicate – Tropical",
    variants: ["Vanilla", "Purple Flowers", "Marine Minerals"],
    imageUrl: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=600&fit=crop",
  },
  {
    id: "deo-kiss-me",
    name: "Déodorant Kiss Me",
    brand: "LYS INTENSE",
    category: "deodorant",
    description: "Revigorant – Excitant",
    variants: ["Kiss Me", "La Vie en Rose", "Macaron Gourmand", "Macha3ir Oriental"],
    imageUrl: "https://images.unsplash.com/photo-1585652757141-8837d676f188?w=400&h=600&fit=crop",
  },
  {
    id: "deo-mojito",
    name: "Déodorant Mojito Cocktail",
    brand: "LYS INTENSE",
    category: "deodorant",
    description: "Relaxant – Fruité – Apaisant",
    variants: ["Mojito Cocktail", "Montagne & Neige", "Sidi Bou-Saïd Voyage", "Tahiti Voyage"],
    imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=600&fit=crop",
  },
  {
    id: "roll-gelee",
    name: "Roll-On Gelée Royale & Argan",
    brand: "LYS INTENSE",
    category: "roll-on",
    description: "48H Protection",
    variants: ["Gelée Royale & Argan", "Fleur de Lotus", "Algues Marines"],
    imageUrl: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=600&fit=crop",
  },
  {
    id: "roll-orchidee",
    name: "Roll-On Orchidée & Vanille",
    brand: "LYS INTENSE",
    category: "roll-on",
    description: "48H Protection",
    variants: ["Orchidée & Vanille", "Fruits Rouges", "Mangue & Ananas"],
    imageUrl: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=600&fit=crop",
  },
  {
    id: "masque-avocado",
    name: "Masque Capillaire Avocado & Coco",
    brand: "LYS INTENSE",
    category: "masques-capillaires",
    description: "Pour cheveux secs et abîmés",
    imageUrl: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=600&fit=crop",
  },
  {
    id: "masque-argan",
    name: "Masque Capillaire Argan & Aloe Vera",
    brand: "LYS INTENSE",
    category: "masques-capillaires",
    description: "Pour tous types de cheveux",
    imageUrl: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=600&fit=crop",
  },
  {
    id: "shampoing-2en1",
    name: "Shampoing 2en1",
    brand: "LYS INTENSE",
    category: "shampoing",
    description: "Pour tous types de cheveux",
    variants: ["Tous types", "Anti-chute", "Anti-pelliculaire", "Pour hommes"],
    imageUrl: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&h=600&fit=crop",
  },
  {
    id: "shampoing-familial",
    name: "Shampoing Familial",
    brand: "LYS INTENSE",
    category: "shampoing",
    description: "Formule douce pour toute la famille",
    variants: ["Pomme Verte", "Riz & Blé"],
    imageUrl: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=400&h=600&fit=crop",
  },
  {
    id: "balsam-familial",
    name: "Balsam Familial",
    brand: "LYS INTENSE",
    category: "shampoing",
    description: "Soin après-shampoing",
    variants: ["Anti-chute", "Tous types"],
    imageUrl: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=600&fit=crop",
  },
  {
    id: "boom-wax",
    name: "BOOM Cire Wax",
    brand: "BOOM",
    category: "styling",
    description: "Fixation professionnelle",
    variants: ["Extrait Bambou", "Multivitaminé Cactus"],
    imageUrl: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=400&h=600&fit=crop",
  },
  {
    id: "boom-gel",
    name: "BOOM Gel 3en1",
    brand: "BOOM",
    category: "styling",
    description: "Style & Tenue",
    variants: ["Normale", "Forte", "XXL", "Titanium", "Shark"],
    imageUrl: "https://images.unsplash.com/photo-1597854710846-e2e01bac44f4?w=400&h=600&fit=crop",
  },
  {
    id: "shampoing-kids",
    name: "Shampoing & Gel Douche Kids",
    brand: "LYS INTENSE",
    category: "soins-enfants-bebe",
    description: "Parfums fruités pour enfants",
    imageUrl: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=600&fit=crop",
  },
  {
    id: "shampoing-bebe",
    name: "Shampoing & Gel Douche Bébé",
    brand: "LYS INTENSE",
    category: "soins-enfants-bebe",
    description: "Cheveux et Corps – Formule douce",
    imageUrl: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=600&fit=crop",
  },
  {
    id: "huile-avocado",
    name: "Huile Précieuse Avocat & Coco",
    brand: "LYS INTENSE",
    category: "huiles",
    description: "Nutrition intense",
    imageUrl: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=600&fit=crop",
  },
  {
    id: "huile-cobra",
    name: "Huile Précieuse Cobra",
    brand: "LYS INTENSE",
    category: "huiles",
    description: "Force et brillance",
    imageUrl: "https://images.unsplash.com/photo-1600428877878-1a0fd85beda8?w=400&h=600&fit=crop",
  },
  {
    id: "huile-amande",
    name: "Huile Amande & Figue de Barbarie",
    brand: "LYS INTENSE",
    category: "huiles",
    description: "Hydratation profonde",
    imageUrl: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=600&fit=crop",
  },
  {
    id: "huile-argan",
    name: "Huile Argan & Blé",
    brand: "LYS INTENSE",
    category: "huiles",
    description: "Réparation capillaire",
    imageUrl: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=600&fit=crop",
  },
  {
    id: "huile-ail",
    name: "Huile à l'Ail",
    brand: "LYS INTENSE",
    category: "huiles",
    description: "Anti-chute – Fortifiant",
    imageUrl: "https://images.unsplash.com/photo-1600428877878-1a0fd85beda8?w=400&h=600&fit=crop",
  },
  {
    id: "huile-escargot",
    name: "Huile à l'Escargot",
    brand: "LYS INTENSE",
    category: "huiles",
    description: "Régénération cellulaire",
    imageUrl: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400&h=600&fit=crop",
  },
  {
    id: "gel-hydro-80",
    name: "Gel Hydro Alcoolique 80ml",
    brand: "LYS INTENSE",
    category: "gel-hydro-alcoolique",
    description: "Désinfectant mains",
    variants: ["80ml", "100ml", "250ml", "500ml", "1L", "5L"],
    imageUrl: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=400&h=600&fit=crop",
  },
  {
    id: "gel-lavant",
    name: "Gel Lavant Mains Antibactérien",
    brand: "LYS INTENSE",
    category: "gel-hydro-alcoolique",
    description: "Protection antibactérienne",
    imageUrl: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=400&h=600&fit=crop",
  },
  {
    id: "vaseline",
    name: "Pure Vaseline",
    brand: "LYS INTENSE",
    category: "cremes-vaselines",
    description: "Protection et hydratation",
    imageUrl: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=400&h=600&fit=crop",
  },
  {
    id: "glycerine",
    name: "Pure Glycérine",
    brand: "LYS INTENSE",
    category: "cremes-vaselines",
    description: "Hydratation intense",
    imageUrl: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=600&fit=crop",
  },
  {
    id: "body-butter",
    name: "Body Butter",
    brand: "LYS INTENSE",
    category: "cremes-vaselines",
    description: "Beurre corporel nourrissant",
    imageUrl: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=600&fit=crop",
  },
  {
    id: "petroleum-jelly",
    name: "Pure Vaseline Petroleum Jelly",
    brand: "LYS INTENSE",
    category: "cremes-vaselines",
    description: "Formule originale",
    imageUrl: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=400&h=600&fit=crop",
  },
  {
    id: "serum",
    name: "Sérum Cheveux Anti-Frizz",
    brand: "LYS INTENSE",
    category: "autres",
    description: "Lisse et protège",
    imageUrl: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=600&fit=crop",
  },
];

export const featuredProducts = products.slice(0, 8);

export const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
