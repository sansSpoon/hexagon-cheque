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

// to be replaced with user input
// will change num to immutable
let num = ' $101511 ';
// clean up the input
num = num.trim().replace('$', '').replace(/,/g,'');
num = parseFloat(num).toFixed(2).toString();
num = num.split('.');

const dlr = num[0].padStart(9,'0'); // ES17 padding, might need a polly
const cnt = num[1];
console.log(dlr);
console.log(cnt);
console.log(cnt.substring(0,1));
console.log(cnt.substring(1,2));

let arr = dlr.split("");

// Don't really need to do this, could just access
// the array by index, creating variables just helps
// with legibility, also arr is now dead.
const one = arr.pop(),
      ten = arr.pop(),
      hun = arr.pop(),
      tho = arr.pop(),
      tth = arr.pop(),
      hth = arr.pop(),
      mil = arr.pop(),
      tml = arr.pop(),
      hml = arr.pop();

function fTen(ten, one) {
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

function tJoin(x1000, x100)	{
	if(parseInt(x1000) > 0 && parseInt(x100) === 0) {
		return ' and ';
	} else {
		return ' ';
	}
}

function sumTho(x100, x10, x1) {
	const sum = parseInt(x100) + parseInt(x10) + parseInt(x1);
	return sum;
}

function period(x100, x10, x1) {
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

function cents(x10, x1) {
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

const mString = parseInt(mil + tml + hml) > 0 ? `${period(hml, tml, mil)} million` : '';
const tString = parseInt(tho + tth + hth) > 0 ? `${period(hth, tth, tho)} thousand` : '';
const oString = parseInt(one + ten + hun) > 0 ? `${period(hun, ten, one)}` : '';

const dString = `${mString} ${tString.length>0?tString:''}${oString.length>0?tJoin(sumTho(mil, tml, hml), hth):''}${oString.length>0?tJoin(sumTho(tho, tth, hth), hun):''}${oString} dollars`;

// This is a bit hacky, need to improve joining
const dStringClean = dString.replace(/\s\s/g, ' ').trim();

console.log(`${dStringClean}${cents(cnt.substring(0,1), cnt.substring(1,2))}`);