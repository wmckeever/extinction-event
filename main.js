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

let dinoList2 = document.querySelectorAll('#unordered-dinos li') // grab the list


//function to create fade effect
function fadeEffect () {
  for (let i = 0; i < dinoList2.length; i++) {
      dinoList2[i].addEventListener('click', function(){
        console.log(dinoList2[i].innerText);
        dinoList2[i].style.opacity = '0';
      })
  }
}
fadeEffect();

// //BUBBLING
// //unordered-dinos = Parent id
// let dinoList2 = document.querySelector('#unordered-dinos');

// dinoList2.addEventListener('click', function(event){
//       let listItem= event.target;
//       console.log(listItem.innerText); //shows each item in the list. 
//       listItem.style.opacity = '0';
// });


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
////////////////////////////////////////////////////

/* 4. But this last step, the Meteor Me button mass extinction, is hugely different. How do we affect ALL the items we've covered so far on one single button press? It's not actually _that_ different. We'll just have to have a function that, when run, loops through all three sets of elements, applying the correct effect to each set. You don't need the `event` object here, because you don't care WHICH element was interacted with; you're gonna affect them all. Then simply attach that function as an event listener on the button, and you're done! */

let meteorButton = document.querySelector('#destroy-all');

meteorButton.addEventListener('click', function(){
  
  console.log("Oh no! Here comes a meteor to wipe all the dinosaurs out!!! -- Proof that the button works when pressed!");
  alert("Oh no! Here comes a meteor to wipe all the dinosaurs out!!! -- Proof that the button works when pressed!")

//apply strikethrough
  for (let i = 0; i < dinoList1.length; i++) {
    
         dinoList1[i].style.textDecoration = "line-through";
  }
//apply fade

  for (let i = 0; i < dinoList2.length; i++) {
    
         dinoList2[i].style.opacity = '0';
  }

//apply 
for (let i = 0; i < dinoImageFade.length; i++) {
  
    dinoImageFade[i].style.width = "0";
  }

    });



