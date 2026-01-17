import {readFileSync, writeFileSync} from "fs";
export function readData(){
    const data = readFileSync('./db.json','utf-8');
    return JSON.parse(data);
}

export function writeData(data){
    return writeFileSync('./db.json',JSON.stringify(data,null,2));
}
