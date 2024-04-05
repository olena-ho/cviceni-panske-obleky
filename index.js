function color(z) {
  const a = getComputedStyle(z);
  const b = a.backgroundColor;
  const element = document.getElementById('product-image');

  if (b === "rgb(0, 0, 0)") {
    element.style.stroke="#fff";
    element.style.fill=b;
    } else {
    element.style.stroke="#000";
    element.style.fill=b;
    }
  }
