const slide = document.getElementsByClassName('slide')[0];
const title = document.getElementById('slideshow-title');
const prev = document.getElementsByClassName('prev')[0];
const next = document.getElementsByClassName('next')[0];
let slideArr = ["OldKyivCenter", "OldKyivStreet", "StAndrewsChurch"];
let titleArr = ["Independence Square, Kyiv", "Andrew's Descent, Kyiv", "St. Andrew's Church, Kyiv"];
let slideIndex = 0;

function changeSlide(action) {
    console.log("called func");
    if (slideIndex + action < 0 || slideIndex + action > 2) {
        console.log("out of range");
        return;
    }

    slideIndex += action;
    console.log("plus or minus action");
    slide.style.backgroundImage = `url("./pics/${slideArr[slideIndex]}.jpg")`;
    console.log("change pic");
    title.innerHTML = titleArr[slideIndex];
    console.log("change title");
    if (slideIndex === 0) {
        console.log("first slide");
        prev.style.color = "gray";
    }
    else if (slideIndex === 2) {
        next.style.color = "gray";
        console.log("last slide");
    }
    else {
        console.log("slide 2");
        prev.style.color = "black";
        next.style.color = "black";
    }
}

let sections = [];
let findSections = document.getElementsByClassName('sections');
for (let i = 0; i < findSections.length; i++) {
    sections.push(findSections[i]);
}
sections.push(document.getElementsByTagName('header')[0]);
function changeMode() {
    sections.forEach(section => {
       section.classList.toggle('dark-mode');
    });
}

//Tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove('_active');
				tabs_blocks[index].classList.remove('_active');
			}
			tabs_item.classList.add('_active');
			tabs_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
}