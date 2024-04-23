import {Author} from "./Author";


export interface Book {
  id: number | null;
  title: string;
  author_name?: '';
  author_id: number | null,
  author?: Author
  language: string | null;
  pages: number | null;
  description: string;
  genre: string | null;
}
