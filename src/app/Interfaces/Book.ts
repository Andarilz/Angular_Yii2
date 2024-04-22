import {Author} from "./Author";

export interface Book {
  id: number | null;
  title: string;
  author_name?: '';
  author_id?: '',
  language: string;
  pages: number;
  description: string;
  genre: string;
}
