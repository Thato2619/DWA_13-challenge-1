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


