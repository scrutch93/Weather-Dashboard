var requestURl = "https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=6e8d8d1bcb081e9149c96a12985c31c4"

var currentDate = moment().format('MM/DD/YYYY');
document.getElementById('currentDate').innerHTML = currentDate;


var cityInput = document.getElementById("inputKey")
var button =  document.getElementById("runSearch")


button.onclick = function (){
    var key = cityInput.value;

    
    if (key, cityInput){
        localStorage.setItem (key, cityInput);
        location.reload()
    }

}

for (let i=0; i <localStorage.length; i++){
    var key =localStorage.key(i);
    displayHistory.innerHTML +='${key}';
}


