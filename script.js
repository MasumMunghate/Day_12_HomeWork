const text_area = document.getElementById("text_area");


text_area.addEventListener("keyup" , function(e){
  // let textValue = text_area.value;
 let textLength = text_area.value.length;
  let Remaining_Char = 50 - textLength;

  if (Remaining_Char <= 0) {
    // Limit the textarea length to 10 characters
    text_area.value = text_area.value.substring(0, 50);
  }

  document.getElementById("Count").innerHTML ="Count :-"+ textLength ;
  document.getElementById("remaining_Count").innerHTML = "Remaining Charector :-" + Remaining_Char;

  
})