const selectElement = (element) => document.querySelector(element);

selectElement('.list-1').addEventListener('click', () => {
	document.selectElementById('footer-list-1').classList.toggle('showlist1');

});