import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { FetchRespone } from "../services/api-client";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get<FetchRespone<Platform>>('platforms/lists/parents').then(res => res.data),
    staleTime: 24*60*60*1000,
    initialData: {count: platforms.length, results: platforms}
})

export default usePlatforms;