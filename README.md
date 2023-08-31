# Day_12_HomeWork

start by getting a reference to the <textarea> element with the ID "text_area" using document.getElementById text_area.

 attach an event listener to the textarea that listens for the "keyup" event. This means the function inside the listener will be called whenever a key is released in the textarea.

Inside the event listener, you calculate the current length of the text in the textarea using text_area.value.length.

 calculate the remaining characters that can be typed by subtracting the current text length from 50.

The code then checks if there are no remaining characters left Remaining_Char <= 0. If this condition is true, it means that the textarea should not accept more characters.

Inside this condition, you limit the text in the textarea to 50 characters using text_area.value.substring(0, 50). This ensures that no more characters can be typed beyond 50 characters.

The code updates the text of the HTML element with the ID "Count" to show the current character count textLength.

Similarly the code updates the text of the HTML element with the ID "remaining_Count" to show the remaining character count Remaining_Char.
