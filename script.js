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
    });

    // Log the data in the console as well
    console.log("Wind Speed: " + response.wind.speed);
    console.log("Humidity: " + response.main.humidity);
    console.log("Temperature (F): " + response.main.temp);



    $(".searchButton").on("click", function(event) {
        event.preventDefault();
        console.log($(".cityInSearchBar").val());

    });
});