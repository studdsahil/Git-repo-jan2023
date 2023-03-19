let fs = require("fs");
const path = require("path");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
function isCircular(path)
{

   
    let x = 0, y = 0;
    

    
    for (let i = 0; i < path.length; i++)
    {

        
        let move = path[i];

       
        if (move == 'R')
            dir = (dir + 1) % 4;
        else if (move == 'L')
            dir = (4 + dir - 1) % 4;

       
        else
        {
            if (dir == 0)
                y++;
            else if (dir == 1)
                x++;
            else if (dir == 2)
                y--;
            else // dir == 3
                x--;
        }
    }

    // If robot comes back to
    // (0, 0), then path is cyclic
    return (x == 0 && y == 0);
}
 

 
let dir = readLine();
console.log(isCircular(path));




