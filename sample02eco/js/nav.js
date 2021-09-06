let menuOpen = false;
$(".open-menu").click(function () {
	// toggle menu
	menuOpen = !menuOpen;
	if (menuOpen) {
		$(".fullscreen").addClass("show");
		$(".drawer_container").addClass("open");
	} else {
		$(".fullscreen").removeClass("show");
		$(".drawer_container").removeClass("open");
	}
});


$(".close-drawer").click(function () {
		$(".fullscreen").removeClass("show");
		$(".drawer_container").removeClass("open");
	});


// shopping bag
	let bagOpen = false;
	$(".open-bag").click(function () {
		// toggle bag
		bagOpen = !bagOpen;
		if (bagOpen) {
			$(".fullscreen_bag").addClass("show_bag");
			$(".bag_container").addClass("open_bag");
		} else {
			$(".fullscreen_bag").removeClass("show_bag");
			$(".bag_container").removeClass("open_bag");
		}
	});
	
	
	$(".close-bag").click(function () {
			$(".fullscreen_bag").removeClass("show_bag");
			$(".bag_container").removeClass("open_bag");
		});
	

	
	
