// Color of t-shirt


const svgElement = document.getElementById('product-image');
const colorButtons = document.querySelectorAll('.colors__button');


function changeSvgColor(event) {
  
  const color = event.target.style.backgroundColor;
  svgElement.style.fill = color;
}

colorButtons.forEach(button => {
  button.addEventListener('click', changeSvgColor);
});


