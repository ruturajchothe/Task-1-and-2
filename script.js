//step1: Create a request variable
var request = new XMLHttpRequest();

//step2: Create connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

//step3: Send the request
request.send();

//step4: Process and load the response
request.onload = function (){
    var data = JSON.parse(this.response)
    console.log(data);
    //task1: print the flag URL of all country
    for(let i in data){
        console.log(data[i].flag)
    }
    //task2: print the countries whose region is asia
    for(let i in data){
        if(data[i].region == 'Asia'){
            console.log(data[i].name)
        }
    }
    //Extract and print the total population of all the countries in the console.
    let totalPopulation = 0;
    for(let i in data){
        totalPopulation += data[i].population;
    }
    console.log("Total population of 250 countries is: ", totalPopulation);
}
