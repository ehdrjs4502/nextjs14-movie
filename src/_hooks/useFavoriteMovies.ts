import { addFavoriteMovie } from "@/app/api/add-favorite-movie";
import { delFavoriteMovie } from "@/app/api/del-favorite-movie";
import { getFavoriteMovies } from "@/app/api/get-favorite-movies";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IFavoriteMovies {
  favoriteMovies: any[];
  fetch: (id: any) => Promise<void>;
  delFavoriteMovie: (id: any) => Promise<void>;
  addFavoriteMovie: (data: any) => Promise<void>;
}

const useFavoriteMovies = create<IFavoriteMovies>()(
  persist(
    (set) => ({
      favoriteMovies: [], // 선호 영화 목록 상태
      fetch: async (id: any) => {
        // 선호 영화 목록 가져오기
        const response = await getFavoriteMovies(id);
        console.log("선호 영화 불러옴");
        set({ favoriteMovies: response });
      },
      delFavoriteMovie: async (data: any) => {
        // 선호 영화 삭제
        await delFavoriteMovie(data);
        set((state) => ({
          favoriteMovies: state.favoriteMovies.filter((movie) => movie.movie_id !== data.movie_id),
        }));
      },

      addFavoriteMovie: async (data: any) => {
        // 선호 영화 추가
        await addFavoriteMovie(data);
        set((state) => ({ favoriteMovies: [...state.favoriteMovies, data] })); // 상태 업데이트
      },
    }),
    {
      name: "favoriteMovies-storage", // 로컬 스토리지에 저장될 키 이름
    }
  )
);

export default useFavoriteMovies;
