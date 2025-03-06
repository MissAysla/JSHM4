// Function to update image display when hovered or focused
function upDate(previewPic) {
    console.log("Image updated: " + previewPic.alt);
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url(" + previewPic.src + ")";
    imageDiv.innerHTML = previewPic.alt;
}

// Function to revert back when mouse leaves or focus is lost
function unDo() {
    console.log("Reverting image display");
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "none";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

// Function to initialize gallery on page load
function initializeGallery() {
    console.log("Gallery Initialized");
    let images = document.querySelectorAll(".preview");

    // Loop through all images to ensure keyboard accessibility
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
