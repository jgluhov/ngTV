export interface IGenre {
  genreID: string;
  genreType: string;
  genreName: string;
}

export interface IPictureList {
  backgrounds: string[];
  channelBlackWhites: string[];
  channelPics: string[];
}

export interface IChannel {
  ID: string;
  name: string;
  introduce: string;
  genres: IGenre[];
  picture: IPictureList;
}
