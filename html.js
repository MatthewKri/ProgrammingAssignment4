const canvas = document.getElementById("avatarCanvas");
const ctx = canvas.getContext("2d");
//head
ctx.fillStyle= "black";
ctx.fillRect(49, 49, 77, 77)
ctx.fillStyle= "beige";
ctx.fillRect(50, 50, 75, 75)
//arrow on head
ctx.fillStyle= "lightblue";
ctx.fillRect(75, 50, 25, 18)
ctx.beginPath();
ctx.strokeStyle = "lightblue";
ctx.moveTo(75, 68);
ctx.lineTo(65, 68);
ctx.lineTo(87, 86)
ctx.lineTo(110,68)
ctx.lineTo(65,68)
ctx.stroke();
ctx.fill();
// Eyes
ctx.strokeStyle= "black";
ctx.beginPath();
ctx.arc(68, 85, 7, 0, 2 * Math.PI);
ctx.stroke();

ctx.moveTo(110,85);
ctx.beginPath();
ctx.arc(110, 85, 7, 0, 2 * Math.PI); 
ctx.stroke();
// Pupils
ctx.fillStyle = "#494949";
ctx.moveTo(69,86);
ctx.beginPath();
ctx.arc(69, 86, 3, 0, 2 * Math.PI); 
ctx.stroke();
ctx.fill();

ctx.moveTo(109,86);
ctx.beginPath();
ctx.arc(109, 86, 3, 0, 2 * Math.PI); 
ctx.stroke();
ctx.fill();
// mouth
ctx.fillStyle= "black";
ctx.fillRect(74,99, 25, 17);
ctx.fillStyle = "white"
ctx.fillRect(75,100, 23, 15);

ctx.strokeStyle="black";
ctx.beginPath();
ctx.moveTo(75,107);
ctx.lineTo(83,108);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(90,108);
ctx.lineTo(99,107);
ctx.stroke();

function toggleImage() {
    var image = document.getElementById("referenceImage");
    if (image.style.display === "none") {
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var elementSelect = document.getElementById("elementSelect");
    
    elementSelect.addEventListener("change", function() {
        var selectedElement = elementSelect.value;
        var body = document.body;

        switch (selectedElement) {
            case "fire":
                body.style.backgroundColor = "orange";
                break;
            case "air":
                body.style.backgroundColor = "lightblue";
                break;
            case "earth":
                body.style.backgroundColor = "green";
                break;
            case "water":
                body.style.backgroundColor = "blue";
                break;
            default:
                body.style.backgroundColor = "white";
                break;
        }
    });
});