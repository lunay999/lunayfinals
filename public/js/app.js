$('#app').html(`

  <center>

<h1>"Welcome To the world of pokemon"</h1>

</div>

   <div class="loaderbg">

    <img class="loaderimg" src="img/loader.gif">

</div>

  `);
setTimeout(function(){
      x();
  },3000);

function x(){
$.ajax({
  
  url: "https://www.omdbapi.com/?t=Pok%C3%A9mon+the+first+movie"


}).done(function(res){
  console.log(res);
  let html =


   ` 
  
<div style="background-color: black;" class="thumbnail">
 <br> <h1>${res.Title}</h1></br>
 <br><h3>${res.Genre}</h3></br>
 <br><h3>${res.Actors}</h3></br>
  <h3>${res.Plot}</h3>
</div>
  <div class="col-sm-6 col-md-4">
  <div style="background-color: black"; class="thumbnail"> 
  <div class="left">
  <img src="${res.Poster}" />
  </div>

  `;



  $('#app').html(html);


});


$.ajax({
  
  url: "https://www.omdbapi.com/?t=Pok%C3%A9mon+the+movie+2000"


}).done(function(res){
  console.log(res);
  let html = 
  
  `
   
<div style="background-color: black;" class="thumbnail">
  <h1>${res.Title}</h1>
<br><h3>${res.Genre}</h3></br>
 <br><h3>${res.Actors}</h3></br>
  <h3>${res.Plot}</h3>
  </div>
  <div class="col-sm-6 col-md-4">
  <div  style="background-color: black"; class="thumbnail">
  <div class="left">
  <img src="${res.Poster}" />
  </div>


  `;



  $('#secondary').html(html);



});


$.ajax({
  
  url: "https://www.omdbapi.com/?t=Pok%C3%A9mon%3A+Giratina+and+the+Sky+Warrior"


}).done(function(res){
  console.log(res);
  let html = 
  ` 

  
<div style="background-color: black;" class="thumbnail">
  <h1>${res.Title}</h1></font>
<br><h3>${res.Genre}</h3></br>
 <br><h3>${res.Actors}</h3></br>
  <h3>${res.Plot}</h3>
</div>
  <div class="col-sm-6 col-md-4">
  <div  style="background-color: black"; class="thumbnail">
  <div class="left">
  <img src="${res.Poster}" />

  </div>

  `;



  $('#a').html(html);


});




$.ajax({
  
  url: "https://www.omdbapi.com/?t=Pok%C3%A9mon+4ever"


}).done(function(res){
  console.log(res);
  let html =

   ` 

  
<div style="background-color: black;" class="thumbnail">
  <h1>${res.Title}</h1>
<br><h3>${res.Genre}</h3></br>
 <br><h3>${res.Actors}</h3></br>
  <h3>${res.Plot}</h3>
  </div>
  <div class="col-sm-6 col-md-4">
    <div  style="background-color: black"; class="thumbnail">
    <div class="left">
  <img src="${res.Poster}" />

  </div>
  `;


  $('#b').html(html);


});




$.ajax({
  
  url: "https://www.omdbapi.com/?t=Pok%C3%A9mon+heroes"


}).done(function(res){
  console.log(res);
  let html = 
  

  ` 
   
<div style="background-color: black;" class="thumbnail">
  <h1>${res.Title}</h1>
<br><h3>${res.Genre}</h3></br>
 <br><h3>${res.Actors}</h3></br>
  <h3>${res.Plot}</h3>
  </div>
  <div class="col-sm-6 col-md-4">
    <div  style="background-color: black"; class="thumbnail">
    <div class="left">
  <img src="${res.Poster}" />
  </div>
  `;



  $('#c').html(html);
}); 
}

