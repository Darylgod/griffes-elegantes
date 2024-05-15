function openNav() {
	document.getElementById("mySidebar").style.width="100vw";
	document.getElementById("mySidebar").style.overflow="hidden";
}

function closeNav() {
	document.getElementById("mySidebar").style.width="0";
	document.getElementById("mySidebar").style.overflow="auto";
}

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const contain = document.querySelector(".contain");

sign_up_btn.addEventListener('click',() =>{
	contain.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
	contain.classList.remove("sign-up-mode");
});