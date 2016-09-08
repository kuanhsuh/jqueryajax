$(document).ready(function(){
  // getWeather("Taipei");
  $("form").submit(function(e){
      var input = $('input').val();
      // alert(input);
      // debugger;
      e.preventDefault;
      getWeather("Taipei");


  });
});


function getWeather(city){
  $.ajax({

    // url: "http://api.openweathermap.org/data/2.5/weather?q=taipei&appid=4c35ca129b3d80f4303a4632af8adfcf&units=metric",
    url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=4c35ca129b3d80f4303a4632af8adfcf&units=metric",
    dataType: "json",
    type: "GET",
    success: function(data){
      debugger;
     $("#temp").append(data.main.temp);
     $("#city").append(data.name);
    $("#weather").append(data.weather[0].description);
    }});
}


//data.name"Kaohsiung", data.weather[0].description
