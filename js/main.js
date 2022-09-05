// TIMER 
$(function(){
	FlipClock.Lang.Custom = { days:'DAYS', hours:'HOURS', minutes:'MINUTES', seconds:'SECONDES' };
	var opts = {
		clockFace: 'DailyCounter',
		countdown: true,
		language: 'Custom'
	};
	opts.classes = {
		active: 'flip-clock-active',
		before: 'flip-clock-before',
		divider: 'flip-clock-divider',
		dot: 'flip-clock-dot',
		label: 'flip-clock-label',
		flip: 'flip',
		play: 'play',
		wrapper: 'flip-clock-small-wrapper'
	};  
	var countdown = 1662906900 - ((new Date().getTime())/1000); // from: 09/11/2022 07:35 am -0700
	countdown = Math.max(1, countdown);
	$('.clock-builder-output').FlipClock(countdown, opts);
});


// HEADER SLIDER PHOTO SLIDER 
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 6,
	spaceBetween: 0,
	loop: true,
	centeredSlides: true,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		350: {
			slidesPerView: 4,
			  spaceBetween: 5,
  
		  },
		400: {
		  slidesPerView: 5,
			spaceBetween: 1,

		},
		
	  },
});

// var swiper = new Swiper(".mySwiper-1", {
// 	slidesPerView: 1,
// 	spaceBetween: 0,
// 	loop: true,
// 	centeredSlides: true,
// 	navigation: {
// 	  nextEl: ".swiper-button-next",
// 	  prevEl: ".swiper-button-prev",
// 	},
// });
var swiper2 = new Swiper(".mySwiper-1", {
	slidesPerView: 1,
	grabCursor: true,
	effect: "creative",
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	spaceBetween: 10,
	loop: true,
	creativeEffect: {
	  prev: {
		shadow: true,
		translate: ["-120%", 0, -500],
	  },
	  next: {
		shadow: true,
		translate: ["120%", 0, -500],
	  },
	},
  });