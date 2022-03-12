import { Developer, Like, Dislike } from "@@types/general";

interface AvailableDeveloper extends Developer {
  likes: Like[];
  dislikes: Dislike[];
}

export type { AvailableDeveloper };
