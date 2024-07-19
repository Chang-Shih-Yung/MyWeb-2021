// font animation-----------------

// const timeline = gsap.timeline({repeat: -1});
// const chars = document.querySelectorAll(".text");

// gsap.set(".one", {color: "#000"});
// gsap.set(".two", {color: "#000"});
// // gsap.set(".three", {color: "#000F"});
// // gsap.set(".four", {color: "#000"});
// // gsap.set(".five", {color: "#000"});

// timeline.from(chars, {opacity: 1, scale: 0, ease: "sine", delay: 0.2})
//     .to(".text", {
//         "font-weight": 400,
//         duration: .7,
//         ease: "sine.inOut",
//         stagger: {
//             yoyo: true,
//             each: 0.1,
//             repeat: -1
//         }
//     }, 0.5);

		



		


    // bar-----------------------

		class StickyNavigation {
	
			constructor() {
				this.currentId = null;
				this.currentTab = null;
				this.tabContainerHeight = 70;
				let self = this;
				$('.et-hero-tab').click(function() { 
					self.onTabClick(event, $(this)); 
				});
				$(window).scroll(() => { this.onScroll(); });
				$(window).resize(() => { this.onResize(); });
			}
			
			onTabClick(event, element) {
				event.preventDefault();
				let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
				$('html, body').animate({ scrollTop: scrollTop }, 300);
			}
			
			onScroll() {
				this.checkTabContainerPosition();
				this.findCurrentTabSelector();
			}
			
			onResize() {
				if(this.currentId) {
					this.setSliderCss();
				}
			}
			
			checkTabContainerPosition() {
				let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
				if($(window).scrollTop() > offset) {
					$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
				} 
				else {
					$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
				}
			}
			
			findCurrentTabSelector(element) {
				let newCurrentId;
				let newCurrentTab;
				let self = this;
				$('.et-hero-tab').each(function() {
					let id = $(this).attr('href');
					let offsetTop = $(id).offset().top - self.tabContainerHeight;
					let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
					if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
						newCurrentId = id;
						newCurrentTab = $(this);
					}
				});
				if(this.currentId != newCurrentId || this.currentId === null) {
					this.currentId = newCurrentId;
					this.currentTab = newCurrentTab;
					this.setSliderCss();
				}
			}
			
			setSliderCss() {
				let width = 0;
				let left = 0;
				if(this.currentTab) {
					width = this.currentTab.css('width');
					left = this.currentTab.offset().left;
				}
				$('.et-hero-tab-slider').css('width', width);
				$('.et-hero-tab-slider').css('left', left);
			}
			
		}
		
		new StickyNavigation();



// 首頁3d動畫----------------

// const circle = document.querySelector("#circle");
// const text = circle.dataset.text;
// const characters = text.split("");

// const deltaAngle = 360 / characters.length;
// const distanceFromCenter = 206;

// characters.forEach((character, index) => {
//   const span = document.createElement("span");
//   span.innerText = character;

//   const rotateY = `rotateY(${index * deltaAngle}deg)`;
//   const translateZ = `translateZ(${distanceFromCenter}px)`;
//   span.style.transform = `${rotateY} ${translateZ}`;

//   circle.appendChild(span);
// });




// load跳到主頁----------------

		$(document).ready(function() {
	
			setTimeout(function(){
				$('body').addClass('loaded');
				$('h1').css('color',' rgb(45, 45, 45)');
			}, 1500);
			
		});


		// bar hide-up --------------

		var nav_hidden = document.getElementById('test1').classList
console.log (nav_hidden)
lastScrollY = 0;
window.addEventListener('scroll', function(){
 var st = this.scrollY;
  // 判斷是向上捲動，而且捲軸超過 200px
 if( st < lastScrollY) {
   nav_hidden.remove('hideUp');
   }else{
   nav_hidden.add('hideUp');
}
 lastScrollY = st;
});





// 打字動化--------------------

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["AESTHETICS","PARTICIPATION","EMPATH","RESEARCH","HUMAN"];
const typingDelay = 100;
const erasingDelay = 70;
const newTextDelay = 900; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 200);
});






// 關閉滑動與開啟滑動----------------------------------

const body =document.getElementById('body');
const gallery = document.getElementById('gallery');

gallery.addEventListener("click",function(event){
  console.log(event.target.className)
  if(event.target.classList.contains('get_in')){
		circle
    body.classList.add('noScroll')
  }else{body.classList.remove('noScroll')}}) 

	// 當點擊gallery觸發監聽事件--導出結果

	// 假如監聽事件由包含get_in(最後放在蒙版上，因為上了蒙版之後蒙板變為最外層，這樣點擊才會觸發不滑動)觸發，body就會no-scroll 無法滑動

	// 否則（否定上述觸發的行為）移除no-scroll （跟沒點擊時一樣）


body.addEventListener('click',function(event){
	console.log(event.target.className)
    if(event.target.classList.contains('go_back')){
      body.classList.remove('noScroll')
    }else{}})

		// 點擊任何body位置觸發監聽
		
		// 假如有包含go_back的地方，就會移除noscroll(可以滑動)



		

		// 圖片延遲載入監聽器----------------

		const watcher = new IntersectionObserver(onEnterView)
const lazyImages = document.querySelectorAll('img.lazy')
for (let image of lazyImages) {
    watcher.observe(image) // 開始監視
}

function onEnterView(entries, observer) {
	for (let entry of entries) {
			if (entry.isIntersecting) {
					// 監視目標進入畫面
					const img = entry.target
					img.setAttribute('src', img.dataset.src) // 把值塞回 src
					img.removeAttribute('data-src')
					observer.unobserve(img) // 取消監視
			}
	}
}

// 監聽岸上一頁回首頁可以滑動

$(function(){
	pushHistory();
	window.addEventListener("popstate", function(e) {
		body.classList.remove('noScroll')
	}, false);
	function pushHistory() {
			var state = {
					title: "title",
					url: "#"
			};
			window.history.pushState(state, "title", "#");
	}
});


