export interface Restaurant {
  info: {
    cards: any;
    id: string;
    name: string;
    cloudinaryImageId: string;
    locality: string;
    costForTwo: string;
    avgRating: number;
    cuisines: string[];
    promoted: string;
  };
}
