function moveline(section) {
    var verticalline =  document.getElementById('verticalline');
    var administrationButton =  document.getElementById('administrationButton');
    var ClinicalButton =  document.getElementById('ClinicalButton');
    var EmergencyButton =  document.getElementById('EmergencyButton');
    var ClinicsButton =  document.getElementById('ClinicsButton');


                // Remove the active class from all buttons
                administrationButton.classList.remove('active');
                ClinicalButton.classList.remove('active');
                EmergencyButton.classList.remove('active');
                ClinicsButton.classList.remove('active');
if (section === 'administration') {
    verticalline.style.top = "7%";
    administrationButton.classList.add('active');
}
else  if (section === 'Clinical_Support_Services') {
    verticalline.style.top = "21%";
    ClinicalButton.classList.add('active');

}
else  if (section === 'Emergency_Services') {
    verticalline.style.top = "45%";
    EmergencyButton.classList.add('active');

}
else  if (section === 'OutPatient_Clinics') {
    verticalline.style.top = "17%";
    ClinicsButton.classList.add('active');

}
}
function hideAllSection() {
    document.getElementById('administration_department').style.display = 'none';
    document.getElementById('Clinical_Support_Services').style.display = 'none';
    document.getElementById('Emergency_Services').style.display = 'none';
    document.getElementById('OutPatient_Clinics').style.display = 'none';
}

// Add event listeners to buttons
document.getElementById('administrationButton').addEventListener('click' , function() {
    hideAllSection();
    document.getElementById('administration_department').style.display = 'block';
    
 })
document.getElementById('ClinicalButton').addEventListener('click' , function() {
    hideAllSection();
    document.getElementById('Clinical_Support_Services').style.display = 'block';
    
 })
document.getElementById('EmergencyButton').addEventListener('click' , function() {
    hideAllSection();
    document.getElementById('Emergency_Services').style.display = 'block';
    
 })
 document.getElementById('ClinicsButton').addEventListener('click' , function() {
    hideAllSection();
    document.getElementById('OutPatient_Clinics').style.display = 'block';
    
 })
   // Show the first section by default on page load
document.getElementById('administration_department').style.display = 'block';
document.getElementById('Clinical_Support_Services').style.display = 'none';
document.getElementById('Emergency_Services').style.display = 'none';
document.getElementById('OutPatient_Clinics').style.display = 'none';