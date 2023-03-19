let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string forma

function repeating(arr,size){
    
    for(i = 0;i<size-1;i++){
        for(j = i;j<size;j++){
            if(arr[i]==arr[j]){
                console.log(arr[i] + " ");
            }

        }
        
    }
}
let arr = parseInt(readLine());
let arr_size= arr.length;
console.log(repeating(arr,size));