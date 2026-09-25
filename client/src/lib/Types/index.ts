export type Category = 'drinks' | 'culture' | 'music' | 'travel' | 'film';

export interface Activity {
    id: string;
    title: string;
    date: string;
    description: string;
    category: Category | string;
    city: string;
    venue: string;
    latitude: number;
    longitude: number;
    isCancelled: boolean;
}