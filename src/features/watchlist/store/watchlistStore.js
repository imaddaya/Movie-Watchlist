import { create } from "zustand";

export const useWatchlistStore = create((set) => ({
  watchlist: [],

  addToWatchlist: (item) =>
    set((state) => {
      const exists = state.watchlist.some(
        (mediaItem) =>
          mediaItem.id === item.id && mediaItem.media_type === item.media_type
      );

      if (exists) return state;

      return {
        watchlist: [...state.watchlist, item],
      };
    }),

  removeFromWatchlist: (item) =>
    set((state) => ({
      watchlist: state.watchlist.filter(
        (mediaItem) =>
          !(
            mediaItem.id === item.id &&
            mediaItem.media_type === item.media_type
          )
      ),
    })),
}));