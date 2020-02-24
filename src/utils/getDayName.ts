export const getDayNameFromString = (dateString: string): string => {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(dateString);
    var dayName = days[d.getDay()];
    return dayName
}