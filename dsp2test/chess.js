'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the simplifiedChessEngine function below.
 */
function simplifiedChessEngine(whites, blacks, moves) {
    /*
     * Write your code here.
     */

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const g = parseInt(readLine(), 10);

    for (let gItr = 0; gItr < g; gItr++) {
        const wbm = readLine().split(' ');

        const w = parseInt(wbm[0], 10);

        const b = parseInt(wbm[1], 10);

        const m = parseInt(wbm[2], 10);

        let whites = Array(w);

        for (let whitesRowItr = 0; whitesRowItr < w; whitesRowItr++) {
            whites[whitesRowItr] = readLine().split(' ').map(whitesTemp => whitesTemp[0]);
        }

        let blacks = Array(b);

        for (let blacksRowItr = 0; blacksRowItr < b; blacksRowItr++) {
            blacks[blacksRowItr] = readLine().split(' ').map(blacksTemp => blacksTemp[0]);
        }

        let result = simplifiedChessEngine(whites, blacks, m);
    }

    ws.end();
}
