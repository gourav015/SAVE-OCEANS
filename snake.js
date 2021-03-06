function Snake(){
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];
    
    this.dir = function(x,y){
        this.xspeed = x;
        this.yspeed = y;
	};

this.death = function(){
	for(let i =0;i<this.tail.length;i++){
		let pos = this.tail[i];
		let d = dist(this.x, this.y, pos.x, pos.y);
		if(d<1){
			this.total = 0;
			this.tail = [];
			console.log("hit");
			gamestate = false;
			score = 0;
		}
	}
}

	this.eat = function(food){
		let d = dist(this.x, this.y, food.x, food.y);
		if(d<1){
			this.total++;
			return true;
		}
		return false;
	}
    
	this.update = function(){
		for(let i=0; i<this.tail.length-1;i++){
			this.tail[i] = this.tail[i+1];
        }
        if(this.total>=1){
            this.tail[this.total - 1] = createVector(this.x,this.y);
		}
		
        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;
        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
	};
	
	this.show = function(){
		fill(27,33,3);
		for(let i =0;i<this.tail.length;i++){
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}
			rect(this.x,this.y,scl,scl);
	
	};

	this.wall =function(){




		if(this.y === 0){
			this.y = 560;
		}
		if(this.y === 580){
			this.y = 20;
		}
		if(this.x === 0){
			this.x = 560;
		}
		if(this.x === 580){
			this.x = 20;
		}

	}
}
