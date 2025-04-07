import { EXERCISE_IMAGES, ImageComponent } from "@site/src/managers/image-manager";

interface Action {
  id: number;
  title: string;
  href: string;
  descriptions?: string[];
  image: any;
}

interface ActionCategory {
  category: string;
  description: string;
  actions: Action[];
}

const customImageStyle = {
  width: "150px",
  margin: "0 auto",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
} as const;
// Lower Body: "Strong legs are your foundation—take each step with power and purpose!"
export const actionCategories: ActionCategory[] = [
  {
    category: "Interview",
    description: "Your interview is your stage—shine with every word and gesture!",
    actions: [
      {
        id: 1,
        title: "Frontend Interview",
        descriptions: ["30 mins"],
        href: "/docs/interview/interview-frontend",
        image: <ImageComponent imageUrl={""} alt="Frontend" />
      }
    ]
  }
];
