
const dataReverse = (data, out = []) => {
    for (let i = 0; i < data.length; i += 8){
        out.unshift(...data.slice(i, i+8));
    }
    return out;
}


let data = [];

//data = [0,0,1,1, 0,1,1,0]; // Remains the same

data = [0,0,1,1, 0,1,1,0,  0,0,1,0, 1,1,1,1];
// [0,0,1,0, 1,1,1,1,  0,0,1,1, 0,1,1,0]

//data = [1,1,1,1, 1,1,1,1,  0,0,0,0, 0,0,0,0,  0,0,0,0, 1,1,1,1,  1,0,1,0, 1,0,1,0];
// [1,0,1,0, 1,0,1,0,  0,0,0,0, 1,1,1,1,  0,0,0,0, 0,0,0,0,  1,1,1,1, 1,1,1,1]

console.log(dataReverse(data));
