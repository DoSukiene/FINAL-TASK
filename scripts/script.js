function filter() {
    let dateValue = document.getElementById("dateFilter");
    let startsValue = document.getElementById("startsFilter");
    let endsValue = document.getElementById("endsFilter");
    let allRows = document.getElementById("tableRows").getElementsByTagName("tr");

    for (let i = 0; i < allRows.length; i++) {
        let row = allRows[i];
        let columns = row.getElementsByTagName("td");
        let rowDateVal = columns[0].innerText;
        let rowStartsVal = columns[1].innerText;
        let rowEndsVal = columns[2].innerText;

        if ((dateValue.value === "" || dateValue.selectedOptions[0].innerText === rowDateVal) &&
            (startsValue.value === "" || startsValue.selectedOptions[0].innerText === rowStartsVal) && (endsValue.value === "" || endsValue.selectedOptions[0].innerText === rowEndsVal))
            row.hidden = false;
        else
            row.hidden = true;
    }



}     