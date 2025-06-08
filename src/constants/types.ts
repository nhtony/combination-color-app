interface Color {
  slug: string;
  hex: string;
  name: string;
}

interface FeaturedImage {
  alt: string;
  url: string;
}

interface MainCombination {
  liked: boolean;
  id: number | null;
  slug: string;
  color: Color;
  featuredImage: FeaturedImage;
  name: string;
  likes: number;
  colors: Color[];
}

interface RelatedCombinationType {
  id: number | null;
  name: string;
  slug: string;
  colors: string[];
  likes: number;
  liked: boolean;
}

interface CombinationResponse {
  combination: MainCombination;
  relatedCombinations: RelatedCombinationType[];
}

export type {
  Color,
  FeaturedImage,
  MainCombination,
  RelatedCombinationType,
  CombinationResponse
};