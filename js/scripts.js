$(document).ready(function(){
  $("#questions").submit(function(event){
    var colorInput = $("input#color").val();
    var animalInput = $("input#animal").val();
    var timeInput = $("input#time").val();
    var foodInput = $("input#food").val();
    var cityInput = $("input#city").val();

    var favorites = [colorInput, animalInput, timeInput, foodInput, cityInput];
    var favorites2 = favorites[1];
    var favorites1 = favorites[0];
    var favorites3 = favorites[2];
    var array2 = [favorites2];
    array2.push(favorites1);
    array2.push(favorites3);

    $(".array").text(favorites);
    $(".array2").text(array2);

    event.preventDefault();
  });
});
