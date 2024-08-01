import Media from "./notion/IMedia";

export default interface Issue {
  id: string;
  cover: Media[];
  date?: string;
  issue?: string;
}
