"use strict";

// Function to set the page theme to dark
function setDarkTheme() {
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
}

// Function to set the page theme to light
function setLightTheme() {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
}

// Function to set the page title
function setTitle(newTitle) {
    document.getElementById('pageTitle').innerText = newTitle;
}

// Function to set the page description
function setDescription(newDescription) {
    document.getElementById('pageDescription').innerText = newDescription;
}

// Function to set the background color
function setBackgroundColor(newColor) {
    document.body.style.backgroundColor = newColor;
}

// Function to set the font color
function setFontColor(newColor) {
    document.body.style.color = newColor;
}

// Applying default theme when the page loads
setLightTheme();

// Allowing functions to be accessible from the console
window.setDarkTheme = setDarkTheme;
window.setLightTheme = setLightTheme;
window.setTitle = setTitle;
window.setDescription = setDescription;
window.setBackgroundColor = setBackgroundColor;
window.setFontColor = setFontColor;