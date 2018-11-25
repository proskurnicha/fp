
// const tableFl = _.flatten(table);

// const getPosition = function(table, colomn, row) {
//   return _.find(table, { 'column': colomn, 'row': row }).position;
// };
 
// var curried = _.curry(getPosition);
// const oldColumn = 0;
// const oldRow = 2;  
// const newColumn = 2;
// const newRow = 1;
// const positionNew = curried(tableFl, newColumn, newRow);
// const positionOld = curried(tableFl, oldColumn, oldRow);

// const getColomnRowByPosition = (position) => ({
//         row: (position - 1)%3,
//         column: Math.floor((position - 1)/3)
//     });

// const changeElements = function(table, positionOld, positionNew) {
//     const rangeForChanges = _.slice(table, positionOld - 1, positionNew);
//     const changedRange = _.map(rangeForChanges, (element) => ({
//             id: element.id,
//             position: element.position - 1,
//             ...getColomnRowByPosition(element.position)
//         })
//     );

//     const part1 = _.slice(table, 0, positionOld - 1);
//     const part2 = _.slice(table, positionNew, tableFl.length);
//     console.log({...part1, part2});
// }

// changeElements(tableFl, positionOld, positionNew);
