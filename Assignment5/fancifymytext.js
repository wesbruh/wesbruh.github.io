// Assignment 5 .js
// makes text bigger in textArea
function handleClickBigger() {
    document.getElementById("textArea").style.fontSize = "2em";
}

// radio style buttons when checked
function handleChangeStyle() {

    let textArea = document.getElementById("textArea");
    let fancyRadioButton = document.getElementById("fancyRadio");
    let boringRadioButton = document.getElementById("boringRadio");

    if (fancyRadioButton.checked) {
        alert("Your text is now fancy!")
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";

    } else if (boringRadioButton.checked) {
        alert("Your text is now boring!")
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Capitalize all letters in sentence and add "-Moo" to last word of sentence
function handleClickMoo() {

    let textArea = document.getElementById("textArea");
    let text = textArea.value.toUpperCase();

    // split sentence(s) by period
    let sentences = text.split(".");

    // process to add "-Moo" to last word of each sentence
    for (let i = 0; i < sentences.length; i++) {
        let sentence = sentences[i].trim();

        if(sentence.length > 0) {
            sentences[i] = sentence + "-Moo";
        }
    }
    textArea.value = sentences.join(". ")
}
