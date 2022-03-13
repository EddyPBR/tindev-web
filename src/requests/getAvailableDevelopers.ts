import { api } from "@services/api";
import type { GetAvailableDevelopers } from "@@types/requests";
import type { AvailableDeveloper } from "@@types/developer";
import type { AxiosError } from "axios";

const getAvailableDevelopers = async ({ id }: GetAvailableDevelopers) => {
  try {
    return await api.get<AvailableDeveloper[]>("/developers", {
      headers: {
        id,
      },
    });
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }, Error>;
    throw axiosError.response?.data?.message as string;
  }
};

export { getAvailableDevelopers };
