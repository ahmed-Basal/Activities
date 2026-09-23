import { useQuery } from "@tanstack/react-query";
import agent from "../Api/agent";
import type { Activity } from "../Types";

const useactivites = () => {
    const { data: activities, isPending } = useQuery({
        queryKey: ['activities'],
        queryFn: async () => {
            const response = await agent.get<Activity[]>('/activities');
            return response.data;
        }
    });

    return { activities, isPending };
};

export default useactivites;