import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import agent from "../Api/agent";
import type { Activity } from "../Types";

 export    const useactivites = (id?:string) => {
    const queryClient = useQueryClient();

    const { data: activities, isPending } = useQuery({
        queryKey: ['activities'],
        queryFn: async () => {
            const response = await agent.get<Activity[]>('/activities');
            return response.data;
        }
    });
    const {data:activity,isLoading:isLoadingActivity} = useQuery({
        queryKey: ['selectedActivity',id],
        queryFn: async () => {
            const response = await agent.get<Activity>(`/activities/${id}`);
            return response.data;
        },
        enabled:!!id
    });
    const updateActivity = useMutation({
        mutationFn: async (activity: Activity) => {
            const response = await agent.put(`/activities/${activity.id}`, activity);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['activities'] });
            queryClient.invalidateQueries({ queryKey: ['selectedActivity'] });
        }
    });

    const deleteActivity = useMutation({
        mutationFn: async (id: string) => {
            await agent.delete(`/activities/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['activities'] });
        }
    });

    const createActivity = useMutation({
        mutationFn: async (activity: Activity) => {
            const response = await agent.post('/activities', activity);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['activities'] });
        }
    });

    return {
        activities,
        isPending,
        updateActivity,
        deleteActivity,
        createActivity,
        activity,
        isLoadingActivity
    };
};

export default useactivites;