{
const people = [ { firstname: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } },
     { firstname: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];
const[{ firstname:personName1, address:{city:cityName1,street:{name:streetName1 }}},
        { firstname:personName2, address:{city:cityName2,street:{name:streetName2 }}}
]=people;
console.log(`
    ${personName1} lives in ${cityName1} on ${streetName1} \n
    ${personName2} lives in ${cityName2} on ${streetName2}
    
    `)
}
