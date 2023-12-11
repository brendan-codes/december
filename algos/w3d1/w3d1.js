// findObjectsFilter(searchFor, items)

// given a 'search for' object with primative values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const searchFor = {
    firstName: "Bob",
    age: 31,
    age: 31,
    age: 31,
    age: 31,
    age: 31,
    age: 31,
    age: 31,
    age: 31,
    age: 31,
    age: 31,
};

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

// return a new list of objects containing the same key pair values
const output = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

function findObjectsFilter(search, items) {
    // put all the keys for the search object into an array
    const searchKeys = Object.keys(search);

    // filter the items
    return items.filter(item => {
        // for each item in items
        // for every key in searchKeys
        for (const key of searchKeys) {
            // if the key doesn't exist
            if (!item.hasOwnProperty(key) || item[key] !== search[key]) {
                return false;
            }
        }
        // if the for loop returns no falses, return true
        return true;
    })
}