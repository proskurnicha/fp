const input = [
	{ name: 'TV', price: 300, date: '2018-10-10' },
	{ name: 'laptop', price: 600, date: '2018-10-12' },
	{ name: 'PC', price: 800, date: '2018-09-05' },
	{ name: 'owen', price: 300 },
	{ name: 'Camera', price: 500, date: '2018-03-03' },
	{ name: 'Fridge', price: 1000, date: '2018-12-11' },
	{ name: 'table', price: 150, date: '2018-12-10' },
	{ name: 'Sofa', price: 400, date: '2018-12-08' },
	{ name: 'chair', date: '2018-09-10' },
	{ name: 'Window', price: 300, date: '2018-05-05' },
];

function firstLetterToUpperCase(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}

function plusDollar(value) {
	return value + '$'; 
}

function compare(a, b) {
	if (a.date < b.date)
		return -1;
	if (a.date > b.date)
		return 1;
	return 0;
}

function getSortedValuesByDate(values) {
	return [...values].sort(compare);
}

function changePropertiesElement(element) {
	return Object.assign({}, {
		name: firstLetterToUpperCase(element.name),
		price: plusDollar(element.price),
		date: element.date,
	});
}

function getResult(values) {
	return values.map((element) => changePropertiesElement(element));
}

function devideOnTwoMassive(values) {
	const output = values.filter(element => element.date && element.name && element.price);
	const errors = values.filter(element => !(element.date && element.name && element.price));
	const sorted = getSortedValuesByDate(output);	
	const result =  getResult(sorted);
	console.log(result);	
	// const res = pipe(
 //    	getResult(),
 //        getSortedValuesByDate()
	// )(output);
}

devideOnTwoMassive(input);