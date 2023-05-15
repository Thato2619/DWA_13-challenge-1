const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

//use forEach statement and console log all names 
names.forEach(name =>  console.log(name));

//Use forEach to console log each name with a matching province (for example Ashwin (Western Cape). Note that you are only allowed to call console.log seven times.
names.forEach(function name(province) {
    console.log(names[0] && provinces[0])
    console.log(names[1] && provinces[1])
    console.log(names[2] && provinces[2])
    console.log(names[3] && provinces[3])
    console.log(names[4] && provinces[4])
    console.log(names[5] && provinces[5])
})

//Using map loop over all province names and turn the string to all uppercase. Log the new array to the console.
const upperProvinces = provinces.map(function(province) {
    return province.toUpperCase();
})

console.log(upperProvinces);

//Create a new array with map that has the amount of characters in each name. The result should be: [6, 9, 11, 5, 8, 7, 7]
const numSeq = [6, 9, 11, 5, 8, 7,7];
const mapToAlphabets = numSeq => {
    const numStr = '' + numSeq;
    let res = [];
    const shoveElements = (left, right) => {
        if(!left.length) {
            res.push(right.map(el => {
                return (+el + 9).toString(36);
            })).join('');
        }
        return;
    };
    if(+left[0] > 0){
        shoveElements(left.slice(1), right.concat(left[0]));
    }
    if( left.length >= 2 && +(left.slice(0, 2)) <= 26){
        shoveElements(left.slice(2), right.concat(left(0,2)))
    };
    shoveElements(numStr, [])
    return res;
}
console.log(mapToAlphabets(numSeq));

//this is totally inspired by https://www.tutorialspoint.com/map-numbers-to-characters-in-javascript 


//Using toSorted to sort all provinces alphabetically.

let sortedProvinces= provinces.sort();
console.log(sortedProvinces);


//Use filter to remove all provinces that have the word Cape in them. After filtering the array, return the amount of provinces left. The final value should be 3
let filteredProvince = provinces.filter((province) => province === 'Cape');

console.log(filteredProvince)

