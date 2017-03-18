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
  <center>

  <h1>${res.Title}</h1>

  <h3>${res.Plot}</h3>

  <div class="horizontal">
  <div class="col-sm-6 col-md-4">
  <div  style="background-color: black"; class="thumbnail"> 
  <a href=""><img src="${res.Poster}" /></a>
  `;



  $('#app').html(html);


});


$.ajax({
  
  url: "https://www.omdbapi.com/?t=Pok%C3%A9mon+the+movie+2000"


}).done(function(res){
  console.log(secondary);
  let html = 
  
  `
  <center> 


  <h1>${res.Title}</h1>

  <h3>${res.Plot}</h3>

  <img src="${res.Poster}" />
  `;



  $('#secondary').html(html);



});


$.ajax({
  
  url: "https://www.omdbapi.com/?t=Pok%C3%A9mon+the+movie+"


}).done(function(res){
  console.log(a);
  let html = 
  ` 

  <center> 

  <h1>${res.Title}</h1></font>

  <h3>${res.Plot}</h3>

  <img src="${res.Poster}" />
  `;



  $('#a').html(html);


});




$.ajax({
  
  url: "https://www.omdbapi.com/?t=Pok%C3%A9mon+4ever"


}).done(function(res){
  console.log(b);
  let html =

   ` 

  <center> 

  <h1>${res.Title}</h1>

  <h3>${res.Plot}</h3>

  <img src="${res.Poster}" />
  `;


  $('#b').html(html);


});




$.ajax({
  
  url: "https://www.omdbapi.com/?t=Pok%C3%A9mon+heroes"


}).done(function(res){
  console.log(c);
  let html = 
  

  ` 
  <center> 

  <h1>${res.Title}</h1>

  <h3>${res.Plot}</h3>

  <img src="${res.Poster}" />
  `;



  $('#c').html(html);
}); 
}

