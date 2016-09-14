// Get the modal
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');

// Get the element that opens the modal
var btn1 = document.getElementById("myImg1");
var btn2 = document.getElementById("myImg2");
var btn3 = document.getElementById("mydiv3");


// Get the <span> element that closes the modal
var span1 = document.getElementById("close1");
var span2 = document.getElementById("close2");
var span3 = document.getElementById("close3");

// When the user clicks the button, open the modal 
btn1.onclick = function() {
    modal1.style.display = "block";
};

btn2.onclick = function() {
    modal2.style.display = "block";
};

btn3.onclick = function() {
    modal3.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
};

span2.onclick = function() {
    modal2.style.display = "none";
};

span3.onclick = function() {
    modal3.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
    if (event.target === modal1) {
        modal1.style.display = "none";
    }
    if (event.target === modal3) {
        modal3.style.display = "none";
    }
};


