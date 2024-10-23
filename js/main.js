const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header-menu');

navIcon.addEventListener('click', function () {
	if(this.classList.contains('active')) {
		this.classList.remove('active');
		nav.classList.remove('open');
	}
	else {
		this.classList.add('active');
		nav.classList.add('open');
	}
});

$(document).ready(function() {
	let containerEl = document.querySelector('#mix-cards');
	let mixer = mixitup(containerEl, {
		classNames: {
			block: ""
		}
	});
})

//placeholder
const formItems = document.querySelectorAll('.form-field');
for(let item of formItems) {
	const thisParent = item.closest('.form-item');
	const thisPlaceholder = thisParent.querySelector('.fake-placeholder');

	//focus
	item.addEventListener('focus', function(){
		thisPlaceholder.classList.add('active');
	});

	//no focus
	item.addEventListener('blur', function (){

		if(item.value.lenght > 0) {
			thisPlaceholder.checkVisibility.add('active');
		}else {
			thisPlaceholder.classList.remove('active');
		}
	})
}

const backTopBtn = document.querySelector('#backtop');

backTopBtn.style.opacity = 0;

document.addEventListener('scroll', function () {
	if(window.scrollY > 500) {
		backTopBtn.style.opacity = 1;
	}else {
		backTopBtn.style.opacity = 0;
	}
});