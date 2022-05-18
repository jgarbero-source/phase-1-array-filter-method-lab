// Code your solution here

// function findMatching(drivers, str) {
//     return str === str;
// }

// const findMatching = filter(drivers, function (driver) {
//     return driver === 
// }

// const findMatching = filter(drivers, function (str) {
//     return str === "Bobby"; 
// })

// function findMatching(drivers, str) {
//     return str === "Bobby";
// }

// function findMatching(drivers, str) {
//     drivers.filter()
// }

// const findMatching = drivers.filter(drivers => str)

// const findMatching = 

// drivers.filter(function (name){
//     return array.
// })


// array.filter(function (something something ){return name === something something something});

// function findMatching(array, str) {
//     return array.filter(str.toLowerCase) === str.toLowerCase;
// }

// const findMatching = filter(array, function (str) {
//     return str.toLowerCase = array.str.toLowerCase;
// })

// str === str

// function findMatching(array, string) {
//     array.filter(function (index) {
//         if (index === string) {
//             return index
//         }
//     })
// }

// function findMatching(drivers, name){
//     const solution = drivers.filter(function(person){
//         return person.toLowerCase() === name.toLowerCase()
//     })
// }

function findMatching(array, name) {
    let match = array.filter(driverName => driverName.toLowerCase() === name.toLowerCase());
    return match;
}
findMatching('Bobby');

// function fuzzyMatch(drivers, str) {
//     let match = drivers.filter(driverNames => driverNames.startsWith() === str);
//     return match
// }

function fuzzyMatch(array, str) {
    let match = array.filter(driverNames => driverNames.startsWith(str));
    return match;
}

function matchName(array, name) {
    let match = array.filter(driverNames => driverNames.name === name)
    return match;
}

// function fuzzyMatch(array, str) {
//     let match = array.filter(driverNames => driverNames.startsWith() === str.startsWith())
//     return match;
// }


// function findMatching(drivers, name) {
//     let match = drivers.filter(function (driverName) {
//         driverName.toLowerCase() === name.toLowerCase();
//         return match
//     })
// }

// findMatching('Bobby')