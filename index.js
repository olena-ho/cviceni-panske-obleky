function color(obj) {
  const style = getComputedStyle(obj);
  const elementColor = style.backgroundColor;
  const element = document.getElementById('product-image');

  if (elementColor === "rgb(0, 0, 0)") {
    element.style.stroke="#fff";
    element.style.fill=elementColor;
    } else {
    element.style.stroke="#000";
    element.style.fill=elementColor;
    }
  }
