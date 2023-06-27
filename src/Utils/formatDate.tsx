import { format } from 'date-fns';

export default function formatDate(dateString: any) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });

    return `${date.getDate()} de ${month} de ${year}`;
}