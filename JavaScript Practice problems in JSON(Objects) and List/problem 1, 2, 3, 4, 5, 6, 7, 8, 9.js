/*Problem 1 (5 mins):
Parsing an JSON object’s Values:
Write a function called “printAllValues” which returns an newArray of all the input object’s values.
Input (Object):
var object = {name: “RajiniKanth”, age: 33, hasPets : false};
Output:
[“RajiniKanth”, 33, false]
*/

function JSONValues(obj){
    let valueArray = [];
    for(let i in obj){
        valueArray.push(obj[i]);
    }
    return valueArray;
}

/*==========================================================*/

/*Problem 2(5 mins) :
Parsing an JSON object’s Keys:
Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
Example Input:
{name : ‘RajiniKanth’, age : 25, hasPets : true}
Example Output:
[‘name’, ‘age’, ‘hasPets’]*/

function JSONKeys(obj){
    let keyArray = Object.keys(obj);
    return keyArray;
}
/*==========================================================*/

/*Problem 3( 7–9 mins):
Parsing an JSON object and convert it to a list:
Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
Input (Object):
var object = {name: “ISRO”, age: 35, role: “Scientist”};
Output:
[[“name”, “ISRO”], [“age”, 35], [“role”, “Scientist”]]*/

function OBJtoList(obj){
    let listArr = [];
    let keyArr = Object.keys(obj);
    for(let i in keyArr){
        let tempArr = [];
        tempArr.push(keyArr[i]);
        tempArr.push(obj[keyArr[i]]);
        listArr.push(tempArr);
    }
    return listArr;
}
/*==========================================================*/

/*Problem 4( 5 mins):
Parsing a list and transform the first and last elements of it:
Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
1) the first element of the array as the object’s key, and
2) the last element of the array as that key’s value.
Input (Array):
var array = [“GUVI”, “I”, “am”, “Geek”];
Output:
var object = {
GUVI : “Geek”
}*/

function transformFirstAndLast(arr){
    let obj = {};
    obj[arr[0]] = arr[arr.length - 1];
    return obj;
}
/*==========================================================*/

/*Problem 5 ( 7 -9 mins):
Parsing a list of lists and convert into a JSON object:
Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
Input (Array):
var array = [[“make”, “Ford”], [“model”, “Mustang”], [“year”, 1964]];
Output:
var object = {
make : “Ford”
model : “Mustang”,
year : 1964
}*/

function fromListToObject(arr) {
    let newObject = {};
    for(let i in arr){
        newObject[arr[i][0]] = arr[i][1];
    }
    return newObject;
}
/*==========================================================*/

/*Problem 6 (10 mins):
Parsing a list of lists and convert into a JSON object:
Write a function called “transformGeekData” that transforms some set of data from one format to another.
Input (Array):
var array = [[[“firstName”, “Vasanth”], [“lastName”, “Raja”], [“age”, 24], [“role”, “JSWizard”]], [[“firstName”, “Sri”], [“lastName”, “Devi”], [“age”, 28], [“role”, “Coder”]]];
Output:
[
{firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
{firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
]*/

function transformEmployeeData(arr) {
    let tranformEmployeeList = [];
    
    for(let i in arr){
        let tempArr = arr[i];
        let tempObj = fromListToObject(tempArr);
        tranformEmployeeList.push(tempObj);
    } 
    return tranformEmployeeList;
}
/*==========================================================*/

/*Problem 7 (10 — 20 mins):
Parsing two JSON objects and Compare:
Write an “assertObjectsEqual” function from scratch.
Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
It is OK to use JSON.stringify().
Note: The examples below represent different use cases for the same test. In practice, you should never have multiple tests with the same name.
Success Case:
Input:
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);
Output:
Passed
Failure Case:
Input:var expected = {foo: 6, bar: 5};
var actual = {foo: 5, bar: 6}
assertObjectsEqual(actual, expected, ‘detects that two objects are equal’);
Output:
FAILED [my test] Expected {“foo”:6,”bar”:5}, but got {“foo”:5,”bar”:6}*/

function assertObjectsEqual(actual, expected){
    if(JSON.stringify(actual) === JSON.stringify(expected)){
        console.log("Equal objets!");
    }else{
        console.log("Unequal Objects!");
    }
}
/*==========================================================*/

/*Problem 8(10 mins):
Parsing JSON objects and Compare:
I have a mock data of security Questions and Answers. Your 
function should take the object and a pair of strings and should 
return if the quest is present and if its valid answer*/

function chksecurityQuestions(securityQuestions,question, answer) {
    for(let i in securityQuestions){
        if(Object.values(securityQuestions[i]).includes(question) && Object.values(securityQuestions[i]).includes(answer)){
            return true;
        }
    }
    return false;
}
/*==========================================================*/

/*Problem 9(20 mins):
Parsing JSON objects and Compare:
Write a function to return the list of characters below 20 age*/

function returnMinors(arr)
{
    let minorsArray = [];
    for(let i in arr){
        if(arr[i].age <= 20){
            minorsArray.push(arr[i]);
        }
    }
    return minorsArray;
}
/*==========================================================*/



let myObj = {
    name: "RUTURAJ",
    age: "22",
    interest: "Casual Gaming"
};

let oneDList = ["Key", 1, 2, 3, "asd", "Value"];
let arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
let array = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], [['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];

let expected = {foo: 5, bar: 6};
let actual = {foo: 5, bar: 6};

var securityQuestions = [
 {
 question: 'What was your first pet’s name?',
 expectedAnswer: 'FlufferNutter'
 },
 {
 question: 'What was the model year of your first car?',
 expectedAnswer: '1985'
 },
 {
 question: 'What city were you born in?',
 expectedAnswer: 'NYC'
 }
];

console.log(JSONValues(myObj));
console.log(JSONKeys(myObj));
console.log(OBJtoList(myObj));
console.log(transformFirstAndLast(oneDList));
console.log(fromListToObject(arr));
console.log(transformEmployeeData(array));
assertObjectsEqual(actual, expected);

//Test case1:
var ques1 = 'What was your first pet’s name?';
var ans1  =  'FlufferNutter';
var status1 = chksecurityQuestions(securityQuestions, ques1, ans1);
console.log(status1); // true
//Test case2:
var ques2 = 'What was your first pet’s name?';
var ans2  =  'DufferNutter';
var status2 = chksecurityQuestions(securityQuestions, ques2, ans2);
console.log(status2); //false

var students = [
 {
 name: 'Siddharth Abhimanyu', age: 21}, { name: 'Malar', age: 25},
 {name: 'Maari',age: 18},{name: 'Bhallala Deva',age: 17},
 {name: 'Baahubali',age: 16},{name: 'AAK chandran',age: 23},   {name:'Gabbar Singh',age: 33},{name: 'Mogambo',age: 53},
 {name: 'Munnabhai',age: 40},{name: 'Sher Khan',age: 20},
 {name: 'Chulbul Pandey',age: 19},{name: 'Anthony',age: 28},
 {name: 'Devdas',age: 56} 
 ];
 
 console.log(returnMinors(students));