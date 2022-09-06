const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navBarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
	navBarLinks.classList.toggle('active');
});

const messageInput = document.getElementById('message');
const remainingCharsElement = document.getElementById('remaining-chars');
const maxAllowedChars = messageInput.maxLength;

function updateRemainingCharacters(event) {
	const enteredText = event.target.value;
	const enteredTextLength = enteredText.length;

	const remainingCharacters = maxAllowedChars - enteredTextLength;

	remainingCharsElement.textContent = remainingCharacters;

	if (remainingCharacters === 0) {
		remainingCharsElement.classList.add('error');
		productNameInputElement.classList.add('error');
	} else if (remainingCharacters <= 10) {
		remainingCharsElement.classList.add('warning');
		productNameInputElement.classList.add('warning');
		remainingCharsElement.classList.remove('error');
		productNameInputElement.classList.remove('error');
	} else {
		// If the characters greater than 10, remove the warning class
		remainingCharsElement.classList.remove('warning');
		productNameInputElement.classList.remove('warning');
	}
}

messageInput.addEventListener('input', updateRemainingCharacters);

function openTab(evt, tabName) {
	let i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName('tabcontent');
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none';
	}
	tablinks = document.getElementsByClassName('tablinks');
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' active', '');
	}
	document.getElementById(tabName).style.display = 'block';
	evt.currentTarget.className += ' active';
}

document.getElementById('defaultOpen').click();
