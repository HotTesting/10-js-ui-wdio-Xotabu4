const fs = require("fs"); // Do not worry for .require now, we will look on it on next lesson.
const util = require("util");
const readFile = util.promisify(fs.readFile);

// Error handling
// Just ordinary try/catch:
async function print3Files() {
    try {
        console.log("Reading file async 1.json");
        let content = await readFile("1.json");
        console.log("File 1.json returned", content);
        console.log("Reading file async nonexist.json");
        let content2 = await readFile("nonexist.json");
        console.log("File 2.json returned", content2);
        console.log("Reading file async 3.json");
        let content3 = await readFile("3.json");
        console.log("File 3.json returned", content3);
        console.log("Done executing async commands");
    } catch (err) {
        console.log("Oh no, we have error!");
        console.log(err);
        throw err
    }
}
let prom = print3Files().catch(err => console.log('REJECTED'));