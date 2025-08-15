const imgContainers = document.querySelectorAll(".imgContainer");

for (let imgContainer of imgContainers) {
  imgContainer.addEventListener("mouseenter", (e) => {
    const childLabelActive = imgContainer.querySelector("label");
    childLabelActive.style.display = "block";
    imgContainer.classList.add("active");
    for (let imgContainer2 of imgContainers) {
      if (imgContainer != imgContainer2) {
        const childLabelHidden = imgContainer2.querySelector("label");
        imgContainer2.classList.remove("active");
        childLabelHidden.style.display = "none";
      }
    }
  });
}
