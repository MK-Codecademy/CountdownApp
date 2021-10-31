// To toggle overlay create a button with onclick toggleOverlay
// Pass in the id of the component you want to display on overlay as a parameter and pass the display type you want it to have when overlay opens
// When you close the overlay you can just pass id as display type will default to none;
visible = false;

const toggleOverlay = (el, dType = "none") => {
    visible = !visible
    if (visible) {
        document.getElementById("overlay").style.display = "block";
        document.getElementById(el).style.display = dType;
    } else {
        document.getElementById("overlay").style.display = "none";
        document.getElementById(el).style.display = dType;
    }
}