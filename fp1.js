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

const mapItem(item, itemConfig) {
	// todo: call fn for each props
}

const changePropertiesElement = (element, {
	name: nameMap,
	price: priceMap,
	date: dateMap
}) => ({ 
	name: nameMap(element.name),
	price: priceMap(element.price),
	date: dateMap(element.date)
});	

const map = (arr, fn, config) =>
	arr.map(element => fn(element, config));

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

const config = {
	name: firstLetterToUpperCase,
	price: plusDollar,
	date: x => x
}

const isValid = element => element.date && element.name && element.price;

const notValid = element => !isValid(element);

const transform = (input, config) => {
	const validatedArr = input.filter(isValid);
	const errors = input.filter(notValid);
	const sortedArr = [...validatedArr].sort(compare);	
	const result = map(sortedArr, changePropertiesElement, config)
	console.log(result);
}

transform(input, config);




