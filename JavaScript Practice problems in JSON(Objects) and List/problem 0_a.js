/*Problem 0 : Part A (15 mins):
Playing with JSON object’s Values:
Fluffy sorry, Fluffyy is my fav cat and it has 2 catFriends
Write a code to get the below details of Fluffyy so that
I can take him to vet.
			var cat = {
			 name: ‘Fluffy’,
			 activities: [‘play’, ‘eat cat food’],
			 catFriends: [
			 {
			 name: ‘bar’,
			 activities: [‘be grumpy’, ‘eat bread omblet’],
			 weight: 8,
			 furcolor: ‘white’
			 }, 
			 {
			 name: ‘foo’,
			 activities: [‘sleep’, ‘pre-sleep naps’],
			 weight: 3
			 }
			 ]
			}

Basic Tasks to play with JSON
Add height and weight to Fluffy
Fluffy name is spelled wrongly. Update it to Fluffyy
List all the activities of Fluffyy’s catFriends.
Print the catFriends names.
Print the total weight of catFriends
Print the total activities of all cats (op:6)
Add 2 more activities to bar & foo cats
Update the fur color of bar*/

const readline = require('readline');
const inp = readline.createInterface({
input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
userInput.push(data);
});
inp.on("close", () => {
//start-here
//Your code goes here … replace this line with your code logic
    
        var cat = {
         name: 'Fluffy',
         activities: ['play', 'eat cat food'],
         catFriends: [
         {
         name: 'bar',
         activities: ['be grumpy', 'eat bread omblet'],
         weight: 8,
         furcolor: 'white'
         }, 
         {
         name: 'foo',
         activities: ['sleep', 'pre-sleep naps'],
         weight: 3
         }
         ]
        };
        // Add height and weight to Fluffy
        // Fluffy name is spelled wrongly. Update it to Fluffyy
        cat.name = "Fluffyy";
        cat.height = 50;
        cat.weight = 10;
        console.log(cat);
        
        //List all the activities of Fluffyy’s catFriends.
        console.log(cat.catFriends[0].activities, cat.catFriends[1].activities);
        
        //Print the catFriends names.
        console.log(cat.catFriends[0].name, cat.catFriends[1].name);
        
        //Print the total weight of catFriends
        let weightOfBar = cat.catFriends[0].weight;
        let weightOfFoo = cat.catFriends[1].weight;
        console.log(weightOfBar + weightOfFoo);
        
        //Print the total activities of all cats (op:6)
        let totalActivitiesOfAllCats = [];
        for(let act in cat.activities){
            totalActivitiesOfAllCats.push(cat.activities[act]);
        }
        for(let act in cat.catFriends[0].activities){
            totalActivitiesOfAllCats.push(cat.catFriends[0].activities[act]);
        }
        for(let act in cat.catFriends[1].activities){
            totalActivitiesOfAllCats.push(cat.catFriends[1].activities[act]);
        }
        console.log(totalActivitiesOfAllCats)
        
        //Add 2 more activities to bar & foo cats
        cat.catFriends[1].activities.push("Be cute");
        cat.catFriends[0].activities.push("Annoy people");
        console.log(cat.catFriends);
        
        //Update the fur color of bar
         cat.catFriends[0].furcolor = "red";
         console.log( cat.catFriends[0])

//end-here
});