import { api } from "@services/api";
import type { GetAvailableDevelopers } from "@@types/requests";
import type { AvailableDeveloper } from "@@types/developer";

const getAvailableDevelopers = async ({ id }: GetAvailableDevelopers) =>
  await api.get<AvailableDeveloper[]>("/developers", {
    headers: {
      id,
    },
  });

export { getAvailableDevelopers };
