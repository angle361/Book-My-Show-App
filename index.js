var container = document.querySelector("#container");
var count = document.querySelector("#count");
var total = document.querySelector("#total");
var seats = document.querySelectorAll(".row .seat:not(.occupied)");
var movie = document.getElementById("movie");
function updateCount(){
    var count = document.querySelectorAll(".row .seat.selected").length;

    var selectedSeats= document.querySelectorAll(".row .seat.selected");
    //console.log(selectedSeats);
    const seatsIndex= [...selectedSeats].map(function(seat){
        return [...seats].indexOf(seat);
    })
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));  //its a key value pair
   // console.log(count);
    return count;
}
function updateTotal(){
    var moviePrice = movie.options[movie.selectedIndex].value;
   // console.log(moviePrice);
    var count = updateCount();
   // console.log(count*moviePrice);
    return (count*moviePrice);
}
container.addEventListener("click",(e)=>{
   if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
      e.target.classList.toggle("selected");
      count.innerHTML = updateCount();
      total.innerHTML = updateTotal();
   }
});

function setMovieData(tcktIndex, tcktPrice){
      localStorage.setItem('MovieIndex', tcktIndex);
      localStorage.setItem('MoviePrice',tcktPrice);
}
movie.addEventListener("change",(e)=>{
    total.innerHTML = updateTotal();
    setMovieData(e.target.selectedIndex,e.target.value);
});
