window.addEventListener("load", function(){

	var burger = document.getElementsByClassName("js-burger")[0];
	var mobileMenu = document.getElementsByClassName("js-mobileNav")[0];

	burger.addEventListener("click", menuDisplay);
	
	function menuDisplay(e){
		
		e.preventDefault();

		var rightPos = window.getComputedStyle(mobileMenu).getPropertyValue('right');
		
		if(rightPos <= "-220px"){

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

		mobileMenu.style.right = "-220px";
	}
});