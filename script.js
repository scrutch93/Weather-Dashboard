var currentDate = moment().format('MM/DD/YYYY');
document.getElementById('currentDate').innerHTML = currentDate;


var cityInput = document.getElementById("inputKey")
var button =  document.getElementById("runSearch")


button.onclick = function (){
    var key = cityInput.value;

    console.log(key)

}



