let submitButton = document.querySelector('#submit-button');

function clickListener(event) {
	event.preventDefault();
	console.log('Button clicked');
}

submitButton.addEventListener('click', clickListener);

function clickListener(event) {
	event.preventDefault();

	let emailInput = document.querySelector('#email');
	let messageInput = document.querySelector('#message');

	let emailText = emailInput.value;
	let messageText = messageInput.value;

	console.log('Email address:', emailText, 'Message:', messageText);

	if(validateEmail(emailText) !== true) {
		console.log('The email address must contain @');
		return false;
	}	
	console.log('Thanks for your message');

	if(validateMessageNSFW(messageText) == true) {
		console.log('This message is not safe for work');
		return true;
	}
	console.log('Thanks for your message');
}

function validateEmail(email) {
	if (email.includes('@')) {
		return true;
	} else {
		return false;
	}
	}

function validateMessageNSFW(message) {
	if (message.includes('crap')) {
		return true; 
	} else {
		return false;
	}
	}
