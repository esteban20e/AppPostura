let postureAlertInterval; 

function showPostureAlert() {
    alert("¡Endereza tu espalda!");
}

document.getElementById('startButton').addEventListener('click', function() {
    alert("En breve te avisamos.");
    
    postureAlertInterval = setInterval(showPostureAlert, 60000);
});

document.getElementById('stopButton').addEventListener('click', function() {
    clearInterval(postureAlertInterval);
    alert("alertas canceladas");
});
