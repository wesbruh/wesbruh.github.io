/*
 * Starter file 
 */
(function() {
  
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
  console.log("Encryption script window loaded!");    // Assignment 6 specific log message to make sure function is working properly
  

  /** 
 * Initializes the page by setting up event handlers for user interactions.
 * Attaches click event listeners to the encrypt and reset buttons.
 * This function should be called when the DOM is fully loaded.
 */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    document.getElementById("encrypt-it").addEventListener("click", shiftCipher);
    document.getElementById("reset").addEventListener("click", handleReset);
  }
  
  /**
   * Take the text from the input text area and apply a shift cipher to it. Simply a->b,
   * b->c, ..., z->a, and then display the result in the result area.
   * Also ignores capitalization and non-letter characters from the input text area.
   * This function is called when the user clicks the "Encrypt It!" button.
   */
  function shiftCipher() {
    console.log("Shift Cipher Button clicked!");    // Assignment 6 specific log message to make sure function is working properly

    let text = document.getElementById("input-text").value.toLowerCase();
    let result = "";

    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char >= 'a' && char <= 'z') {
        if(char === 'z') {
          result += 'a';
        } else {
          let charCode = char.charCodeAt(0);
          let shiftedCharCode = charCode + 1;
          result += String.fromCharCode(shiftedCharCode);
        }
      } else {
        result += char;
      }
    }
    document.getElementById("result").textContent = result;
  };

  /**
   * Resets the input text area to be empty when the reset button is clicked.
   * This function is called when the user clicks the "Reset" button.
   */
  function handleReset() {
    console.log("Reset button clicked!");   // Assignment 6 specific log message to make sure function is working properly
    
    let textArea = document.getElementById("input-text");
    textArea.value = "";
  };

})();




