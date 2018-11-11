var topics =['smile','wow','ohmigosh','angry'];
var userTopics = $("#topicInput");
console.log("#topicInput");

$(document).ready(function (){
    for (i = 0; i < topics.length; i++) {
        console.log(topics)
        $("#topicButtons").append(`<button id="${topics[i]}" class="topicButtons">${topics[i]}</button>`)
    }

$("#submitButton").click(userInput)

function userInput (e) {
    e.preventDefault();
}

//function renderBtns(){
    //$('reactionButtons').empty();
//}
//Reminder:
//Selector	Example	Selects
//#id	$("#lastname")	The element with id="lastname"
//.class	$(".intro")	All elements with class="intro"
//.class,.class	$(".intro,.demo")	All elements with the class "intro" or "demo"
//element	$("p")	All <p> elements

if (topics.indexOf(userTopics.val()) === -1) {
    topics.push(userTopics.val())
    $("#topicButtons").append(`<button id="${userTopics.val()}" class="topicButtons">${userTopics.val()}</button>`)}

$(document).on('click', ".topicButtons", function(event) {
    $('#topicGifs').empty()


var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=UwxJzwJMQppN3jfqtFfxn3mfwOnBNKsr" 
//+ event.target.id + "&limit=10&offset=0&rating=PG&lang=en"
//"http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5

$.ajax({
    url:queryURL,
    method:"GET",
}).then(function(response){
    console.log(response);

for (var i = 0; i < response.data.length; i++) {
    $("#topicGIFs").append(`<div class="gifDivs"><p>Rating: ${response.data[i].rating}</p><img src='${response.data[i].images.fixed_height_still.url}' data-still='${response.data[i].images.fixed_height_still.url}' data-animate='${response.data[i].images.fixed_height.url}' data-state='still' width='200px' height='200px' class='GIFs'></div>`)
            }


// Function for Playing/Pausing Gifs
$(".GIFs").on("click", function() {
    var state = $(this).attr("data-state");

    if (state === "still") {
      var animateURL = $(this).attr("data-animate")
      $(this).attr("src", animateURL);
      $(this).attr("data-state", "animate");
    } 

    else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
})

})

})
})

//);
//'
//}
//})
//})

//for (var i=0;i<topics.length;i++) {
  // var a=$('<button>');
   // a.addClass('btn btn-primary reactionBtn');
   // a.attr('data-name', topics[i]);
   // a.text(topics[i]);
  //  $('#reactionButtons').append(a);

   // console.log (a);
//}

//renderBtns();
//$('#addReaction').on('click', function(){
 //   event.preventDefault();
  // var topic = $('#addReaction').val().trim();
  // topics.push('topic');
  //


   //function renderBtns(){
  // $('#reaction-input').append('');
  // }
//})
//console.log(topics);

//$(document).on('click','reactionButtons', function(){
  //  $('<button>').empty();
    //var reaction=$(this).attr('data-name');
  //  var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";
    
 //   $.ajax({
 //   url: queryURL,
 //   method: "GET"
 // }).then(function(response) {
 //   console.log(response);
 ///   var results = response.data;

    //  for (var i=0; i<results.length;i++){
     //   var reactionDiv = $('<div>');
       //  reactionDiv.attr('class','gifDivs');
         //var p = $('<p>');
         //p.append(results[i].rating);
         //var reactionImg = $('<img>');
         //var attrObj = {'data-still':results[i].images}
         
      //}
  //})
