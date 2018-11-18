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

const firstLetterToUpperCase = ([firstLetter, ...rest]) => firstLetter.toUpperCase() + rest.join('');

const plusDollar = value => value + '$';

function compare({date: d1}, {date: d2}) {
	if (d1 < d2)
		return -1;
	if (d1 > d2)
		return 1;
	return 0;
}

const getSortedValuesByDate = (values, compare) => [...values].sort(compare);

const changePropertiesElement = (element, changeName, changePrice, changeDate) => ({ 
		name: changeName(element.name),
		price: changePrice(element.price),
		date: changeDate(element.date)
	});

const getResult = (values, changeName, changePrice, changeDate) => values.map((element) => changePropertiesElement(element, changeName, changePrice, changeDate));

function devideOnTwoMassive(values) {
	const output = values.filter(element => element.date && element.name && element.price);
	const errors = values.filter(element => !(element.date && element.name && element.price));
	const sorted = getSortedValuesByDate(output, compare);	
	const result =  getResult(sorted, firstLetterToUpperCase, plusDollar, x => x+'p.m.');
	console.log(result);	
	// const res = pipe(
 //    	getResult(),
 //        getSortedValuesByDate()
	// )(output);
}

devideOnTwoMassive(input);