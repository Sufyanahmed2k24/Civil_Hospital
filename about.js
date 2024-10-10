function moveline(section) {
    var verticalline =  document.getElementById('verticalline');
    var historyButton =  document.getElementById('historyButton');
    var InfrastructureButton =  document.getElementById('InfrastructureButton');


                // Remove the active class from both buttons
                historyButton.classList.remove('active');
                InfrastructureButton.classList.remove('active');
if (section === 'history') {
    verticalline.style.top = "12%";
    historyButton.classList.add('active');
}
else  if (section === 'infrastructure') {
    verticalline.style.top = "29%";
    InfrastructureButton.classList.add('active');

}
}
function hideAllSection() {
    document.getElementById('history_section').style.display = 'none';
    document.getElementById('infrastructure_section').style.display = 'none';
}

     // Add event listeners to buttons
     document.getElementById('historyButton').addEventListener('click' , function() {
        hideAllSection();
        document.getElementById('history_section').style.display = 'block';
        
     })

     document.getElementById('InfrastructureButton').addEventListener('click' , function() {
        hideAllSection();
        document.getElementById('infrastructure_section').style.display = 'block';
        
     })
    
    // Show the first section by default on page load
document.getElementById('history_section').style.display = 'block';
document.getElementById('infrastructure_section').style.display = 'none';