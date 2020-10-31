function formateDate(date) {

    const MM = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]

    let newDate = date.replace(
        /(\d{4})-(\d{2})-(\d{2})/,
        function ($0, $1, $2, $3) {
            return $3 + " " + MM[$2 - 1] + " " + $1
        }
    );
    newDate = newDate.split('T')[0];
    return newDate;
}

export {
    formateDate
};