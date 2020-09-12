const fs =require('fs');
const path = require('path');
const util = require('util');


const tragetFileName = 'newMessage2.txt';
const tragetPath = path.join(__dirname,'../','data/', tragetFileName)
const writeFile = util.promisify(fs.writeFile)


async function createFile(content){
    try{
        await writeFile(tragetPath, content)
        console.log("it's done")
    }catch(error)
    {console.error(error)

    }
}


createFile("Montag 03.02.2020")
