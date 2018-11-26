const table = [
    [
        { id: 0, row: 0, column: 0, position: 1 },
        { id: 1, row: 1, column: 0, position: 2 },
        { id: 2, row: 2, column: 0, position: 3 },
    ],
    [
        { id: 3, row: 0, column: 1, position: 4 },
        { id: 4, row: 1, column: 1, position: 5 },
        { id: 5, row: 2, column: 1, position: 6 },
    ],
    [
        { id: 6, row: 0, column: 2, position: 7 },
        { id: 7, row: 1, column: 2, position: 8 },
        { id: 8, row: 2, column: 2, position: 9 }
    ]
];

const getPosition = (colomn, row, tableLength) => colomn*tableLength + row + 1;

const getColomnRowByPosition = (position, tableLength) => ({
        row: (position - 1)%tableLength,
        column: Math.floor((position - 1)/tableLength)
   });

const changeElements = (array, tableLength) => {
    var positionInitial = 1;
    return _.map(array, (element) => ({
            id: element.id,
            ...getColomnRowByPosition(positionInitial, tableLength),
            position: positionInitial++
        })
    );
}

const getTableWithNewItem = (tableWithoutItem, position, item, tableLength) => {
    const part1 = _.slice(tableWithoutItem, 0, position - 1);
    const part2 = _.slice(tableWithoutItem, position - 1, tableLength*tableLength);
    return [...part1, item, ...part2];
}

var curried = _.curryRight(_.reject);

const rearrangeMatrix = (table, newColumn, newRow, item) => {
    const getTableWithoutItem = _.flow([
        _.flatten,
        curried(item)
    ]);
    const tableWithoutItem = getTableWithoutItem(table);

    const position = getPosition(newColumn, newRow, table.length);

    const tableWithNewItem  = getTableWithNewItem(tableWithoutItem, position, item, table.length);
  
    const result = changeElements(tableWithNewItem, table.length);
    return _.chunk(result, table.length); 
}

const newColumn = 0;
const newRow = 0;
const item = table[1][1];

const newTable = rearrangeMatrix(table, newColumn, newRow, item);

console.log(newTable);
