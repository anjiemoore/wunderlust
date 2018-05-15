function random(array){
    return Math.floor(Math.random()*array.length);
    // return Math.floor(Math.random()*array.length)
}

var city;

function pickCity(){

    var queryURL = "https://api.teleport.org/api/urban_areas/"
  

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        var cities = response._links["ua:item"];
        // for(var i = 0; i< cities.length; i++){
        //     console.log(cities[i].name);
            
        // }

       // console.log(cities[random(cities)].name);
         city = cities[random(cities)].name;
        $(".city-name").text(city);
          pickWeather();

    });
}        



$("body").on("click" , ".wunderlust-btn" , pickCity);

// Weather API function

function pickWeather() {
    var APIKey = "5ce481d465ddd9be8701296ff58a72c4";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&APPID=" + APIKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        for (i = 0; i < response.list.length; i++) {

        var temp = response.list[i].main.temp;
            console.log(temp);
            
        var date = new Date(response.list[i].dt_txt);
        var dateString = date.toString();
        var dateSplit = dateString.split(" ");
        console.log(dateSplit[0]);

    }

    var dailyTemp = [
        sunTempAvg = [],
        monTempAvg = [],
        tueTempAvg = [],
        wedTempAvg = [],
        thuTempAvg = [],
        friTempAvg = [],
        satTempAvg = []
    ];

    console.log(dailyTemp);

        if (dateSplit[0] === "Sun") {
            dailyTemp[0].push(temp);
        } else if (dateSplit[0] === "Mon") {
            dailyTemp[1].push(temp);
        } else if (dateSplit[0] === "Tue") {
            dailyTemp[2].push(temp); 
        } else if (dateSplit[0] === "Wed") {
            dailyTemp[3].push(temp);
        } else if (dateSplit[0] === "Thu") {
            dailyTemp[4].push(temp);
        } else if (dateSplit[0] === "Fri") {
            dailyTemp[5].push(temp);
        } else (dateSplit[0] === "Sat")
            dailyTemp[6].push(temp);
            
        // var txtList = response.list[i].dt_txt;
        // var day = txtList.split(" ", 2);
        // console.log(day);
        // console.log(day[0]);
        // console.log(txtList);
    

        })
    };

