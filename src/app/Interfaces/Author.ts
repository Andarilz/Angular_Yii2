import {Book} from "./Book";

export interface Author {
  id: number | null;
  name: string;
  books?: Book[];
  country: string;
  birth_year: number | null;
}
