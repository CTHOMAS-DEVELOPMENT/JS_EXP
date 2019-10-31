let total=0,currentNumber=0,dateList=[],dateListText="",totalText="";
function sortDateList(list){
    return list.sort(function(a, b){return new Date(a).getTime()  - new Date(b).getTime()});
}
const listItems = $("#list").find("li");
//Note that this expression is testing for a date format of YYYY-MM-DD only
const DATE_EXPRESSION=/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
const LOW_NUMBER=45;
const HIGH_NUMBER=200;
listItems.each(function(idx, li) {
    if(!isNaN($(li).text()))
    {
        currentNumber=parseInt($(li).text());
        if(currentNumber < LOW_NUMBER)  { $(li).addClass('red'); }
        if(currentNumber > HIGH_NUMBER) { $(li).addClass('green'); }
        total+=currentNumber;
    }
    else
    {
        if(DATE_EXPRESSION.test($(li).text()))
        {
            dateList.push($(li).text())
        }
    }
});
//Populate the two spans with the total and the ordered date list
dateListText=$("#ordered_dates").text()+sortDateList(dateList).join();
$("#ordered_dates").text( dateListText );
$("#ordered_dates").addClass('red');
totalText=$("#total").text()+total;
$("#total").text( totalText );
$("#total").addClass('green');

