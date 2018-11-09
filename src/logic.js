const ones = {
	1: 'one',
	2: 'two',
	3: 'three',
	4: 'four',
	5: 'five',
	6: 'six',
	7: 'seven',
	8: 'eight',
	9: 'nine',
};

const teens = {
	1: 'eleven',
	2: 'twelve',
	3: 'thirteen',
	4: 'fourteen',
	5: 'fifteen',
	6: 'sixteen',
	7: 'seventeen',
	8: 'eighteen',
	9: 'nineteen',
};

const tens = {
	1: 'ten',
	2: 'twenty',
	3: 'thirty',
	4: 'fourty',
	5: 'fifty',
	6: 'sixty',
	7: 'seventy',
	8: 'eighty',
	9: 'ninety',
};

export function fTen(ten, one) {
	let string = '';
	if(parseInt(ten) === 0 && parseInt(one) > 0) {
		string = `${ones[one]}`;
	} else if(parseInt(ten) === 1 && parseInt(one) === 0) {
		string = `${tens[ten]}`;
	} else if(parseInt(ten) === 1 && parseInt(one) > 0) {
		string = `${teens[one]}`;
	} else if(parseInt(ten) > 1 && parseInt(one) === 0) {
		string = `${tens[ten]}`;
	} else {
		string = `${tens[ten]} ${ones[one]}`;
	}
	return string.trim();
}

export function tJoin(x1000, x100)	{
	if(parseInt(x1000) > 0 && parseInt(x100) === 0) {
		return ' and ';
	} else {
		return ' ';
	}
}

export function sumTho(x100, x10, x1) {
	const sum = parseInt(x100) + parseInt(x10) + parseInt(x1);
	return sum;
}

export function period(x100, x10, x1) {
	const hundred = parseInt(x100) > 0 ? `${ones[x100]} hundred`: '';
	const ten = parseInt(x1 + x10) > 0 ? fTen(x10, x1) : '';
	let and = ' and';
	if(parseInt(x100) === 0 && (parseInt(x10) > 0 || parseInt(x1) > 0)){
		and = '';
	}
	if(parseInt(x100) > 0 && parseInt(x10) === 0 && parseInt(x1) === 0){
		and = '';
	}
	const string = `${hundred}${and} ${ten}`;
	return string.trim();
}

export function cents(x10, x1) {
	let string = '';
	if(parseInt(x10 + x1) === 1) {
		string = ' and one cent'
	} else if(parseInt(x10 + x1) > 1) {
		string = ` and ${fTen(x10, x1)} cents`;
	} else {
		string = ' only';
	}
	return string;
}

export function cleanAmount(num) {
	num = num.trim().replace('$', '').replace(/,/g,'');
	num = parseFloat(num).toFixed(2).toString();
	return num;
}