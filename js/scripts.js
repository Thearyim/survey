$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var person1Input = $("input#person1").val();
    var foodInput = $("input#food").val();
    var musicInput= $("input#music").val();
    var experienceInput = $("input#experience").val();

    $(".person1").text(person1Input);
    $(".food").text(foodInput);
    $(".music").text(musicInput);
    $(".experience").text(experienceInput);

    $("#story").show();

    event.preventDefault();
  });
});
