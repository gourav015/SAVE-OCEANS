let s;
let scl = 20;
let food;
let score = 0;
let gamestate = false;
let width = 600;
let height = 600;
let difficulty = 0;
let highScore =0;

function setup(){
	createCanvas(600,600);
        s = new Snake();
        frameRate(5);
        foodLocation();

}


function foodLocation(){
        let cols = floor(580 / scl);
        let rows = floor(580 / scl);
        let randomcol = floor(random(cols));
        let randomrow =floor(random(rows));
        if(randomcol ===0){
                randomcol+=20;
        }
        if(randomrow ===0){
                randomrow+=20;
        }
        food = createVector(randomcol,randomrow );
        food.mult(scl);

}
function draw(){
        if(gamestate === false){
                
                fill(255,255,255);
                textSize(32);
                text(score, 300, 45);
                textAlign(CENTER);
                background(158,199,12);
                textSize(32);
                text("Select difficulty", 300, 45);
                textAlign(CENTER);
                if(difficulty === 0){
                        frameRate(5);
                        fill(0,0,0);
                        textSize(32);
                        text("EASY", 300, 85);
                        textAlign(CENTER);
                        fill(255,255,255);
                        textSize(32);
                        text("MEDIUM", 300, 115);
                        textAlign(CENTER);
                        fill(255,255,255);
                        textSize(32);
                        text("HARD", 300, 145);
                        textAlign(CENTER);
                }else  if(difficulty === 1){
                        frameRate(7);
                        fill(255,255,255);
                        textSize(32);
                        text("EASY", 300, 85);
                        textAlign(CENTER);
                        fill(0,0,0);
                        textSize(32);
                        text("MEDIUM", 300, 115);
                        textAlign(CENTER);
                        fill(255,255,255);
                        textSize(32);
                        text("HARD", 300, 145);
                        textAlign(CENTER);
                }else if(difficulty === 2){
                        frameRate(9);
                        fill(255,255,255);
                        textSize(32);
                        text("EASY", 300, 85);
                        textAlign(CENTER);
                        fill(255,255,255);
                        textSize(32);
                        text("MEDIUM", 300, 115);
                        textAlign(CENTER);
                        fill(0,0,0);
                        textSize(32);
                        text("HARD", 300, 145);
                        textAlign(CENTER);
                }
                fill(255,255,255);
                        textSize(32);
                        text("High Score : " + highScore, 300, 200);
                        textAlign(CENTER);
        }else{



        background(158,199,12);
        if(s.eat(food)){
                foodLocation();
                score++;
                if(score>highScore){
                        highScore = score;
                }
        }
        fill(255,255,255);
        textSize(32);
        text(score, 300, 45);
        textAlign(CENTER);

        s.update();
        s.wall();
        s.show();
        s.death();
        rect(food.x, food.y, scl, scl);
        }
}

function keyPressed(){
	if(keyCode === UP_ARROW){
                if(gamestate === false){
                        if(difficulty ===0){

                        }else{
                        difficulty = difficulty-1;}
                }else{ s.dir(0, -1);}
           
	}else if(keyCode ===DOWN_ARROW){
                if(gamestate === false){
                        if(difficulty ===2){

                        }else{
                        difficulty = difficulty+1;}
                }else{s.dir(0,1);}
    }else if(keyCode === RIGHT_ARROW){
        if(gamestate === false){

        }else{s.dir(1,0);}
    }else if(keyCode === LEFT_ARROW){
        if(gamestate === false){

        }else{  s.dir(-1,0);}

    }else if(keyCode === ENTER){
            if(difficulty ===0){
                   
            }else if(difficulty === 1){
                    
            }else if(difficulty ===2){
                  
            }
                gamestate = true;
    }


}