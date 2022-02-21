//Made by Ahmet Eren Laçinbala in 02.17.2022
//ahmetlacinbala@gmail.com


function make2DArray(cols, rows){
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++){
        arr[i] = new Array(rows);
    }
    return arr;
}

let grid;
let cols;
let rows;
let resolution = 10;
let newGrid;

function setup(){
    createCanvas(1800,900);
    cols = width / resolution;
    rows = height / resolution;

    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++){
        for (let j = 0; j < rows; j++){
            grid[i][j] = floor(random(2));            
        }
    }
    frameRate(30);
    newGrid = make2DArray(cols, rows);
}

function draw() {
    background(0);
    for (let i = 0; i < cols; i++){
        for (let j = 0; j < rows; j++){
            let x = i * resolution;
            let y = j * resolution;
            if (grid[i][j]==1){
                fill(floor(random(255)),floor(random(255)),floor(random(255)));
                stroke(0);
                rect(x, y, resolution-1, resolution-1);
            }
        }
    }


    for (let i = 0; i < cols; i++ ){
        for (let j = 0; j < rows; j++){
            let sum = 0;
            for (let k = -1; k < 2; k++){
                for (let l = -1; l < 2; l++){
                    let col = (i + k + cols) % cols;
                    let row = (j + l + rows) % rows;  
                    sum += grid[col][row];                                                 
                }
            }
            sum -= grid[i][j];
            if (grid[i][j] == 0 && sum == 3){
                newGrid[i][j] = 1; 
            }
            else if (grid[i][j] == 1 && ( sum < 2 || sum > 3)){
                newGrid[i][j] = 0;
            }
            else{
                newGrid[i][j] = grid[i][j];
            }
            
        }
    }
    grid = newGrid.map(arr => arr.slice()); 
}
  


