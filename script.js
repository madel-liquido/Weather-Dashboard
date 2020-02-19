$(".searchButton").on("click", function(event) {
    var APIKey = "6d4195a03381e835c0506dab4bd5193c";
    var currentCity = $(".cityInSearchBar").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
        "q=" + currentCity + "&units=imperial&appid=" + APIKey;


    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response) {

        // Log the resulting object
        console.log(response);


        $(".cityName").html("<h1>" + response.name + "</h1>");
        $(".windspeed").text("Wind Speed: " + response.wind.speed + " MPH");
        $(".humidity").text("Humidity: " + response.main.humidity + "%");
        $(".temperature").html("Temperature: " + response.main.temp + "&#8457;");
        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
    });

});


$(".searchButton").on("click", function(event) {
    var APIKey = "6d4195a03381e835c0506dab4bd5193c";
    var currentCity = $(".cityInSearchBar").val();
    var totalFiveDayCards = 5;
    var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?&q=" + currentCity + ",us&appid=" + APIKey;

    $.ajax({
        url: fiveDayURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        console.log(response.list[0].main.temp - 273.15);
        for (var i = 0; i < totalFiveDayCards; i++) {
            $("#card" + i).empty();
        };

        $("#card0").append($("<h5>").addClass("card-title").text((response.list[0].dt_txt).slice(0, -8)));
        $("#card1").append($("<h5>").addClass("card-title").text((response.list[4].dt_txt).slice(0, -8)));
        $("#card2").append($("<h5>").addClass("card-title").text((response.list[12].dt_txt).slice(0, -8)));
        $("#card3").append($("<h5>").addClass("card-title").text((response.list[20].dt_txt).slice(0, -8)));
        $("#card4").append($("<h5>").addClass("card-title").text((response.list[28].dt_txt).slice(0, -8)));


        $("#card0").append($("<img>").addClass("card-image").attr("src", "https://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png").attr("title", response.list[0].weather[0].main).attr("alt", response.list[0].weather[0].main));
        $("#card1").append($("<img>").addClass("card-image").attr("src", "https://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + "@2x.png").attr("title", response.list[4].weather[0].main).attr("alt", response.list[4].weather[0].main));
        $("#card2").append($("<img>").addClass("card-image").attr("src", "https://openweathermap.org/img/wn/" + response.list[12].weather[0].icon + "@2x.png").attr("title", response.list[12].weather[0].main).attr("alt", response.list[12].weather[0].main));
        $("#card3").append($("<img>").addClass("card-image").attr("src", "https://openweathermap.org/img/wn/" + response.list[20].weather[0].icon + "@2x.png").attr("title", response.list[20].weather[0].main).attr("alt", response.list[20].weather[0].main));
        $("#card4").append($("<img>").addClass("card-image").attr("src", "https://openweathermap.org/img/wn/" + response.list[28].weather[0].icon + "@2x.png").attr("title", response.list[28].weather[0].main).attr("alt", response.list[28].weather[0].main));

        $("#card0").append($("<p>").addClass("card-text").html("Temp: " + (parseInt((response.list[0].main.temp - 273.15) * 1.80 + 32)) + "&#8457;"));
        $("#card1").append($("<p>").addClass("card-text").html("Temp: " + (parseInt((response.list[4].main.temp - 273.15) * 1.80 + 32)) + "&#8457;"));
        $("#card2").append($("<p>").addClass("card-text").html("Temp: " + (parseInt((response.list[12].main.temp - 273.15) * 1.80 + 32)) + "&#8457;"));
        $("#card3").append($("<p>").addClass("card-text").html("Temp: " + (parseInt((response.list[20].main.temp - 273.15) * 1.80 + 32)) + "&#8457;"));
        $("#card4").append($("<p>").addClass("card-text").html("Temp: " + (parseInt((response.list[28].main.temp - 273.15) * 1.80 + 32)) + "&#8457;"));

        $("#card0").append($("<p>").addClass("card-text").text("Humdity: " + response.list[0].main.humidity + "%"));
        $("#card1").append($("<p>").addClass("card-text").text("Humidity: " + response.list[4].main.humidity + "%"));
        $("#card2").append($("<p>").addClass("card-text").text("Humidity: " + response.list[12].main.humidity + "%"));
        $("#card3").append($("<p>").addClass("card-text").text("Humidity: " + response.list[20].main.humidity + "%"));
        $("#card4").append($("<p>").addClass("card-text").text("Humidity: " + response.list[28].main.humidity + "%"));

    });

});