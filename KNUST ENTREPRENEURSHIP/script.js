const menuBtn = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector(".links");

menuBtn.addEventListener('click', () => {
       const containerHeight = navLinks.getBoundingClientRect().height;
		const linksHeight = links.getBoundingClientRect().height;

				if (containerHeight === 0) {
					navLinks.style.height = `${linksHeight}px`;
				} 
                else {
					navLinks.style.height = 0;
				}
})