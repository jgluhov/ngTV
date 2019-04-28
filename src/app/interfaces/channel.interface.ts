export interface IGenre {
  genreID: string;
  genreType: string;
  genreName: string;
}

export interface IPictureList {
  [index: string]: string[];
}

export interface IChannel {
  ID: string;
  name: string;
  introduce: string;
  genres: IGenre[];
  picture: IPictureList;
}
