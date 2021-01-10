import {format} from 'date-fns';


/**
 *
 * @param (String) str
 * @param (String) type
 *
 *
 */
export function formatDate(str, type) {
    const date = new Date(str); //Возвращаем объект даты
    return format(date, type);
}

