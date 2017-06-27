window.addEventListener("load", function(){

	var burger = document.getElementsByClassName("js-burger")[0];
	var mobileMenu = document.getElementsByClassName("js-mobileNav")[0];

	burger.addEventListener("click", menuDisplay);

	window.onresize = moveMenu;
	
	function menuDisplay(e){
		
		e.preventDefault();

		var rightPos = window.getComputedStyle(mobileMenu).getPropertyValue('right');
		
		if(rightPos === "-220px" || rightPos === "-350px" || rightPos === "-400px"){

			openMenu();
		}
		else {
			
			closeMenu();
		}
	}

	function openMenu(){

		mobileMenu.style.right = "0px";
	}

	function closeMenu(){

		var winSize = window.innerWidth;
		
		if (winSize < 550){

			mobileMenu.style.right = "-220px";
		}

		else if (winSize >= 550 && winSize < 800){

			mobileMenu.style.right = "-350px";
		}

		else {

			mobileMenu.style.right = "-400px";
		}

	}

	function moveMenu(){

		var windowSize = window.innerWidth;
		
		if (windowSize < 550){

			mobileMenu.style.right = "-220px";
		}

		else if (windowSize >= 550 && windowSize < 800){

			mobileMenu.style.right = "-350px";
		}

		else {

			mobileMenu.style.right = "-400px";
		}
	}
});