import { api } from "@services/api";
import { GetAvailableDevelopers } from "@@types/services/requests/GetAvailableDevelopers";
import { AvailableDeveloper } from "@@types/general";

const getAvailableDevelopers = async ({ id }: GetAvailableDevelopers) => {
  try {
    return await api.get<AvailableDeveloper>("/developers", {
      headers: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export { getAvailableDevelopers };
