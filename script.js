let currentDisplayProperty = "Grid"; 

function determineMessageOnButton(switchDisplayButton){
    if(currentDisplayProperty === "Grid"){
        switchDisplayButton.textContent = `Display with CSS Flexbox`;
    } else {
        switchDisplayButton.textContent = `Display with CSS Grid`; 
    }
}

function currentDisplayMessage(messageArea){
    messageArea.textContent = `Currently Displaying with CSS ${currentDisplayProperty}`;
}

function determineNewProperty(){
    return (currentDisplayProperty === "Grid" ? currentDisplayProperty = "Flexbox" : currentDisplayProperty = "Grid"); 
}

function switchProperty(){

    // Get the main element 
    let mainSection = document.querySelector("main");
    currentDisplayProperty = determineNewProperty(); 
    
    /* This doesn't affect how the exhibits are displayed! 
    if(currentDisplayProperty === "Grid"){
        mainSection.style.gridTemplateColumns = `repeat(2, 1fr)`; 
        mainSection.style.gridTemplateRows = `auto`; 
    } else {
        mainSection.style.flexDirection = `column`;
        mainSection.style.justifyContent = `center`;
        mainSection.style.alignItems = `space-around`;
    }
    */

    currentDisplayMessage(document.getElementById("current-display-message")); 
    determineMessageOnButton(document.getElementById("display-switch"));
}

document.getElementById("display-switch").addEventListener("click", switchProperty);