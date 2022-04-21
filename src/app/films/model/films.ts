

export interface DisneyData {
    data: Personnage[];
    count: number;
    totalPages: number;
    nextPage: string;
  }
  
  export interface Personnage {
    films: string[];
    shortFilms: string[];
    tvShows: string[];
    videoGames: string[];
    parkAttractions: string[];
    allies: any[];
    enemies: any[];
    _id: number;
    name: string;
    imageUrl: string;
    url: string;
  }
  export interface Save {
      content: string
  }
