import type { Developer, Like, Dislike } from "@@types/developer";

interface AvailableDeveloper extends Developer {
  likes: Like[];
  dislikes: Dislike[];
}

export type { AvailableDeveloper };
