import { apiClient } from "../../../services/apiClient";

export async function getPopularMedia(page = 1) {
  const response = await apiClient.get("/trending/all/week", {
    params: {
      page,
    },
  });

  return response.data;
}