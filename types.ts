
export interface ArtPiece {
  id: string;
  title: string;
  dimensions: string;
  price?: string;
  imageUrl: string;
  description: string;
  isAvailable: boolean;
  edition: string;
}

export type Page = 'Home' | 'Edition I' | 'Studio' | 'Archived';
