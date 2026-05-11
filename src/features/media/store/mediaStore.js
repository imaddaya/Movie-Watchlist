import { create } from "zustand";
import { getPopularMedia } from "../services/mediaApi";

export const useMediaStore = create((set, get) => ({
  media: [],
  page: 1,
  loading: false,
  error: null,

  fetchPopularMedia: async () => {
    const { page } = get();

    try {
      set({ loading: true, error: null });

      const data = await getPopularMedia(page);

      set({
        media: data.results,
        loading: false,
      });
    } catch (error) {
      set({
        error: error.message,
        loading: false,
      });
    }
  },
}));