import fs from "fs";

 function readFile(){
const data = fs.readFileSync('Data.txt', 'utf8');
console.log(data);
return data;
}

export default readFile;

