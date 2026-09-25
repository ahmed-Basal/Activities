import { format } from 'date-fns';

export function formatDate(date?: Date | string | null, formatString: string = 'dd MMM yyyy h:mm a') {
    if (!date) return '';
    return format(new Date(date), formatString);
}
