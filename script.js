var cSlider = document.getElementById("cSlider");
var rSlider = document.getElementById("rSlider");
var fSlider = document.getElementById("fSlider");
var hSlider = document.getElementById("hSlider");
var wSlider = document.getElementById("wSlider");
var pSlider = document.getElementById("pSlider");
var hcSlider = document.getElementById("hcSlider");
var textInput = document.getElementById("textInput");
var button = document.getElementById("button");

// Changes Button Text
textInput.addEventListener("input", function changeText(){
    button.innerHTML = textInput.value;
 }, false);

// Getting input of color picker and setting the buttons style to the value.
cSlider.addEventListener("input", function watchColorPicker(){
    button.style.backgroundColor = cSlider.value;
 }, false);

//  Changes border radius of button
 rSlider.addEventListener("input", function changeRadius(){
     button.style.borderRadius = rSlider.value + "px";
 }, false);


//  Changes Font Size
 fSlider.addEventListener("input", function changeFontSize(){
    button.style.fontSize = fSlider.value + "px";
}, false);

// Changes Height Size
hSlider.addEventListener("input", function changeHeight(){
    button.style.height = hSlider.value + "px";
});

// Changes Width Size
wSlider.addEventListener("input", function changeWidth(){
    button.style.width = wSlider.value + "px";
});

// Changes Padding Size
pSlider.addEventListener("input", function changePadding(){
    button.style.padding = pSlider.value + "px";
});


// Change P tags to their correct values
var getRadiusTag = document.getElementById("rslider-value");
getRadiusTag.innerHTML = rSlider.value + "px";
rSlider.oninput = function() {
    getRadiusTag.innerHTML = this.value + "px";
  } 

var getFontTag = document.getElementById("fslider-value");
getFontTag.innerHTML = fSlider.value + "px";
fSlider.oninput = function() {
    getFontTag.innerHTML = this.value + "px";
  } 

var getHeightTag = document.getElementById("hslider-value");
getHeightTag.innerHTML = hSlider.value + "px";
hSlider.oninput = function() {
    getHeightTag.innerHTML = this.value + "px";
  } 

var getWidthTag = document.getElementById("wslider-value");
getWidthTag.innerHTML = wSlider.value + "px";
wSlider.oninput = function() {
    getWidthTag.innerHTML = this.value + "px";
  } 
  
var getPaddingTag = document.getElementById("pslider-value");
getPaddingTag.innerHTML = pSlider.value + "px";
pSlider.oninput = function() {
    getPaddingTag.innerHTML = this.value + "px";
  } 


