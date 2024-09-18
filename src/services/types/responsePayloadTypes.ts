interface IBase {
  offset: number;
  number: number;
  totalResults: number;
}

export interface IRecipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

export interface IRecipeResponse extends IBase {
  results: IRecipe[];
}
