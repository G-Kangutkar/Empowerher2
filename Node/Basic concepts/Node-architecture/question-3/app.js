import os from 'os';
import fs from 'fs/promises';
import { error } from 'console';
 console.log('Free Memory: ',os.freemem())
 console.log('Core of CPU: ',os.cpus())
 const cores = os.cpus().length;
 console.log('Total number of CPU cores: ',cores)

async function main() {
    await fs.writeFile('data.txt','Hello World');
    console.log('created the data.txt file');

    await fs.writeFile('Readme.md','## This is first line in Readme');
    console.log('created readme file');

    const data = await fs.readFile('data.txt','utf-8');
    console.log("content: ",data);

    await fs.appendFile('data.txt', '\nThis is second line');
    console.log('Added new line in data file');
     
    await fs.unlink('Readme.md');
    console.log('Deleted Readme.md file')
}
main().catch(err =>{
    console.error('Error: ',err)
})