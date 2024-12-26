import apiClient from "../services/api-client";
import { FetchRespone } from "../services/api-client";
import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";

 export interface Platform {
    id: number;
    name: string;
    slug: string
 }

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    rating_top: number;
  }

const useGames = (gameQuery: GameQuery) => 
  useQuery<FetchRespone<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => apiClient.get<FetchRespone<Game>>('/games', {
      params: { 
        genres: gameQuery.genre?.id, 
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      }
    }).then(res => res.data)
  });
 
export default useGames;