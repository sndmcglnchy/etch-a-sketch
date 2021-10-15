//get the slider from HTML with the class "slider"
const slider = document.querySelector(".slider");

//get the value of the slider and store it in the ariable sliderValue
let sliderValue = slider.value;

//get the HTML div with the class "grid-container which is the overall grid container"
const container = document.querySelector(".grid-container");

//set the rows and columns for the grid using repeat function where sliderValue is the number of rows/columns and 1fr sets each grid element to 
//one fraction of the free space available
container.style.gridTemplateRows = "repeat(" + sliderValue + ", 1fr)";
container.style.gridTemplateColumns = "repeat(" + sliderValue + ", 1fr)";

//let gridElement be a global variable
let gridElement;

//let gridSize equal the paragraph with class "size"
const gridSize = document.querySelector(".size");

//dynamic text for the paragraph showing the current grid size
gridSize.textContent = sliderValue + " x " + sliderValue;

//select the color picker in HTML with class "color-picker"
let color = document.querySelector(".color-picker");

//store the color value in variable "colorValue"
let colorValue = color.value;

//create a function that will be used to delete any current children divs from its parent i.e. clearing the canvas
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

//open a for loop which creates the original grid 16x16 = 256
//for each iteration, create a div and attach it to the container div
for(let i = 0; i<256; i++){   
    gridElement = document.createElement('div');
    container.appendChild(gridElement);    
 //listen out for a change to the color picker, then set the color to that value  
    color.addEventListener('change', () => {
        colorValue = color.value;
    });
//listen out for the mouse hovering over the grid elements, then change its background color to current color
    gridElement.addEventListener("mouseover", function( event ) {
        event.target.style.backgroundColor = colorValue;
    });

}
//add event for a change to the slider, update the sliderValue variable and the gridSize text
slider.addEventListener('change', () => {    
    sliderValue = slider.value;
    gridSize.textContent = sliderValue + " x " + sliderValue;    
//update the grid size with new value
    container.style.gridTemplateRows = "repeat(" + sliderValue + ", 1fr)";
    container.style.gridTemplateColumns = "repeat(" + sliderValue + ", 1fr)";
//call the removeChildNodes function where the parent node is the grid container - this clear the canvas
    removeAllChildNodes(container);
//create a for loop to create the new grid where the limit is the sliderValue * sliderValue
    for(let i=0; i <= sliderValue * sliderValue; i++){
        
        gridElement = document.createElement('div');
        container.appendChild(gridElement); 

        gridElement.addEventListener("mouseover", function( event ) {
            event.target.style.backgroundColor = colorValue;
        });

    
    }

});
//select the clear canvas button with class clearButton and add an eventlistener which looks out for clicks
let clearButton = document.querySelector(".clearButton");
clearButton.addEventListener('click', function(){
    //get the children of the overall grid container and change their colour to white, thus clearing the canvas
    let cell = container.children;
    for (let i = 0; i < sliderValue*sliderValue; i++) {
        cell[i].style.backgroundColor = 'white';
    }
});

