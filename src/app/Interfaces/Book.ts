import {Author} from "./Author";

export interface Book {
  id: number | null;
  title: string;
  author?: Author;
  language: string;
  pages: number;
  description: string;
  genre: string;
}
