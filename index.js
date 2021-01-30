// increase and decrease function part
function handleTicketChange(ticket, isIncrease) {
	const ticketCount = getInputValue(ticket);
	let ticketNewCount = ticketCount;
	if (isIncrease == true) {
		ticketNewCount = ticketCount + 1;
	}
	if (isIncrease == false && ticketCount > 0) {
		ticketNewCount = ticketCount - 1;
	}
	document.getElementById(ticket + '-count').value = ticketNewCount;

	//ticket condition code
	let ticketTotal = 0;
	if (ticket == 'first_count') {
		ticketTotal = ticketNewCount * 150;
	}
	if (ticket == 'economy_count') {
		ticketTotal = ticketNewCount * 100;
	}
	document.getElementById(ticket + '-total').innerText = '$' + ticketTotal;
	calculateTotal();
}

//total and subtotal  calculation function  part
function calculateTotal() {
	const firstCount = getInputValue('first_count');
	const economyCount = getInputValue('economy_count');

	const totalPrice = firstCount * 150 + economyCount * 100;
	document.getElementById('subtotal_price').innerText = '$' + totalPrice;

	const text = Math.round(totalPrice * 0.1);
	document.getElementById('text_amount').innerText = '$' + text;

	const grandTotal = totalPrice + text;
	document.getElementById('grand_total').innerText = '$' + grandTotal;
}
function getInputValue(ticket) {
	const ticketInput = document.getElementById(ticket + '-count');
	const ticketCount = parseInt(ticketInput.value);
	return ticketCount;
}

// ticket submit success massage
const loginBtn = document.getElementById('final_submit_button');
loginBtn.addEventListener('click', function() {
	const loginArea = document.getElementById('full-ticket-form');
	loginArea.style.display = 'none';
	const transactionArea = document.getElementById('success_page');
	transactionArea.style.display = 'block';
});
