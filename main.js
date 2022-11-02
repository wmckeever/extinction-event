//1. querySelectorAll()
//parent id = #ordered-dino
//child id = li

let dinoList1 = document.querySelectorAll('#ordered-dinos li') // grab the list


//function to create striketrough effect
function olStrike () {
  for (let i = 0; i < dinoList1.length; i++) {
      dinoList1[i].addEventListener('click', function(){
        console.log(dinoList1[i].innerText);
        dinoList1[i].style.textDecoration = "line-through";
      })
  }
}
olStrike();

//BUBBLING
//unordered-dinos = Parent id
let dinoList2 = document.querySelector('#unordered-dinos');

dinoList2.addEventListener('click', function(event){
      let listItem= event.target;
      console.log(listItem.innerText); //shows each item in the list. 
      listItem.style.opacity = '0';
});


////////////////////////////////////////////////////////

let dinoImageFade = document.querySelectorAll('#row img') // grab the images


//function to create collapse effect
function imageCollapse () {
  for (let i = 0; i < dinoImageFade.length; i++) {
      dinoImageFade[i].addEventListener('click', function(){
        console.log(dinoImageFade[i].innerText);
        dinoImageFade[i].style.width = "0";
      })
  }
}
imageCollapse();