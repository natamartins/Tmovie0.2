export default function formatTime(timeString: any) {
    const hours = Math.floor(Number(timeString) / 60);
    return `${hours}h`;
}