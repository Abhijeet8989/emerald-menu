const search = document.querySelector(".search input");
const cards = document.querySelectorAll(".card");

search.addEventListener("keyup", function () {

let value = search.value.toLowerCase();

cards.forEach(card => {

let text = card.innerText.toLowerCase();

if(text.includes(value)){
card.style.display="block";
}
else{
card.style.display="none";
}

});

});

cards.forEach(card=>{

card.addEventListener("click",()=>{

alert(card.innerText+"\n\nMenu items will open here in the next update.");

});

});
