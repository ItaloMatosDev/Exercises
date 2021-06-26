var header = document.getElementById("header-container");
header.style.background = "#45E87F";

var emergency = document.getElementsByClassName("emergency-tasks")[0];
emergency.style.background = "#F07305"

var noEmergency = document.getElementsByClassName("no-emergency-tasks")[0];
noEmergency.style.background = "#04C292";

var tituloEmergency = document.querySelector("h3");
tituloEmergency.style.background = "#728AB3";

var tituloNoEmergency = document.querySelectorAll(".no-emergency-tasks div h3")[1];
tituloNoEmergency.style.background = "#000";