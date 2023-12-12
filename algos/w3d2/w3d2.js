// findByIdAndUpdate(id, updateObject, arr)

// Given an id, an object that has keys with corresponding updated values, and an array of objects

// Find the object by "id" key that matches the given id value and then update that object's
// keys with the provided new values.

// Return the updated object, or null if no object was found

const obj = {
    name: "Steve",
    isLateToday: true
}

const id = 3;

const students = [{
    id: 1,
    name: "student1",
    isLateToday: false,
    lateCount: 15,
    redBeltStatus: false
},
{
    id: 2,
    name: "student2",
    isLateToday: false,
    lateCount: 1,
    redBeltStatus: false
},
{
    id: 3,
    name: "Steve",
    isLateToday: false,
    lateCount: 0,
    redBeltStatus: false
}
];

// Input: 3, { redBeltStatus: true }, students
// Output: {
//   id: 3,
//   name: "student3",
//   isLateToday: false,
//   lateCount: 0,
//   redBeltStatus: true
// }

// Input: 1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students
// Output: {
//   id: 1,
//   name: "student1",
//   isLateToday: true,
//   lateCount: 16,
//   redBeltStatus: false
// }

// Input: 5, {}, students
// Output: null

function findByIdAndUpdate(id, updatedVals, collection) {}























function findByIdAndUpdate(id, updatedVals, collection) {
    const keys = Object.keys(updatedVals);
    //["isLateToday", "name", "lateCount", "unrelatedKey"]

    for (const item of collection){
        if(item.id === id){
            for(const key of keys){
                if(item.hasOwnProperty(key)){
                    item[key] = updatedVals[key];
                }
            }
            return item;
        }
    }

    return null;
}

findByIdAndUpdate(3, { redBeltStatus: true, admin: "very yes" }, students );