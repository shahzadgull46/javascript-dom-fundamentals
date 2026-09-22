
                // task 1 
 const password = document.getElementById("password");
const toggleIcon = document.getElementById("toggleIcon");

toggleIcon.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";        // show password
        toggleIcon.innerText = "🙈";   // change icon
    } else {
        password.type = "password";    // hide password
        toggleIcon.innerText = "👁️";  // change back
    }
});

// task 2 

// const boxes = document.getElementsByClassName("hoverBox");
      for (let box of boxes) {
        box.addEventListener("mouseover", () => {
          box.style.backgroundColor = "yellow";
        });
        box.addEventListener("mouseout", () => {
          box.style.backgroundColor = "lightblue";
        });
      }


    //   task 3 

    const boxes = document.getElementsByClassName("growBox");
      for (let box of boxes) {
  box.addEventListener("click", () => {
    // Get the computed size (works whether width is inline or in CSS)
    const cs = getComputedStyle(box);
    // parseFloat is better (handles decimals). fallback to 100 if parse fails.
    let width = parseFloat(cs.width) || parseFloat(box.style.width) || 100;
    let height = parseFloat(cs.height) || parseFloat(box.style.height) || 100;

    width += 10;
    height += 10;

    box.style.width = width + "px";
    box.style.height = height + "px";
  });
}
