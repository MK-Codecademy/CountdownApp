// To use overlay create a button with id="toggle-overlay" onclick="toggleOverlay()"
visible = false;

const toggleOverlay = (el) => {
    visible = !visible;
    visible ? document.getElementById("overlay").style.display = "block" : document.getElementById("edit-countdown-container").style.display = "none"
};