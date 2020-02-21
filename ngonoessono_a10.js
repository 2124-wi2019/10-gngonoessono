/*Gertrude Vanessa Ngono Essono
ngonoessono_a10.js
INFO2124
Thoendel
02/21/2020
*/



document.getElementById('action').addEventListener('click', function() {
    //WRITE YOUR SOLUTION BETWEEN THIS COMMENT
    
const h1= document.getElementById("photo");
const oldPhoto = h1.firstChild;
const newPhoto = document.createElement("02.jpg");
h1.replaceChild(newPhoto, oldPhoto);

h1.setAttribute("class","greenText");


    //AND THIS COMMENT
});