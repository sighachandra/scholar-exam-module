window.addEventListener("scroll", function() {
        var mainH = document.getElementById("mainHeader");
        var floatDiv = document.getElementById("headerMenu");
        floatDiv.classList.toggle("sticky", window.scrollY > floatDiv.scrollHeight);
        
        if(window.scrollY > floatDiv.scrollHeight){
        document.getElementById("stickyP").style.display = "block";
       
    }
    else{
        document.getElementById("stickyP").style.display = "none";
        
    }
      
      });

function displayMenu(){
	document.getElementById("navBarDisplay").style.display = "flex";
}
function hideMenu(){
	document.getElementById("navBarDisplay").style.display = "none";
}


document.getElementById("displayMenuBar").addEventListener("click", displayMenu);
document.getElementById("hideMenuBar").addEventListener("click", hideMenu);


// function displayMenuWindow(x) {
//   if (x.matches) { // If media query matches
//     document.getElementById("navBarDisplay").style.display = "none";
//   } else {
//    document.getElementById("navBarDisplay").style.display = "flex";
//   }
// }

// var x = window.matchMedia("(max-width: 700px)")
// displayMenuWindow(x) // Call listener function at run time
// x.addListener(displayMenuWindow) // Attach listener function on state changes






//====================popup for the doctors images==============//

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// var intexlist = document.getElementsByClassName("staff-arr-2");
// console.log(intexlist);
// for(i=0;i<intexlist.length;i++){
//   document.getElementsByClassName("staff-arr-2")[i].addEventListener("click", imageModalOpen(this));
  
// }








// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

//===================end of the section===========//