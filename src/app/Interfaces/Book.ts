import {Author} from "./Author";


export interface Book {
  id: number | null;
  title: string;
  author_name?: '';
  author_id?: number | null,
  author?: Author
  language: string;
  pages: number;
  description: string;
  genre: string;
}
