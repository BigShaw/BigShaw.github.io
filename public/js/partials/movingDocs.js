
// Thanks to Việt Nam: http://codepen.io/laivanduc/pen/EjGLwK

window.onload = function() {

	window.requestAnimFrame = (function() {
		return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		function(callback) {
			window.setTimeout(callback, 1000 / 60);
		};
	})();

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	var P=[];
	var part=function(angle,angleZ,x,y,z,range,angVel,angVelZ,r,red,green,blue,alpha){
		this.angle=angle;   
		this.angleZ=angleZ;
		this.x=x;
		this.y=y;
		this.z=z;
		this.range=range;
		this.angVel=angVel; 
		this.angVelZ=angVelZ;
		this.r=r;
		this.red=255;
		this.green=255;
		this.blue=255;
		this.alpha=alpha;
	}
	var partNum=1200;

	var zMax=(canvas.width+canvas.height)/10;
	var zMin=-zMax;


	function size() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}

	function bg() {
		ctx.fillStyle = "rgb(40,40,40)";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}

	function init(){
		for(var i=0; i<partNum; i++){

			var angle=Math.random()*(2*Math.PI),
			angleZ=Math.random()*(2*Math.PI),
			x=(canvas.width/2)+range*Math.cos(angle),
			y=(canvas.height/2)+range*Math.sin(angle),
			z=Math.random()*zMax,
			range=zMax/2,
			angVel=Math.random()*(Math.PI/720), 
			angVelZ=Math.random()*(Math.PI/720),  
			r=3*(z/zMax)+.5,
			red=Math.round(Math.random()*155+100),
			green=Math.round(Math.random()*155+100),
			blue=Math.round(Math.random()*155+100),
			alpha=(Math.abs(z/zMax));

			P.push(new part(angle,angleZ,x,y,z,range,angVel,angVelZ,r,red,green,blue,alpha));
		}
	}

	function move(p){
      
      var dz=(zMax-p.z);
      
      p.angle+=p.angVel;
      p.angleZ+=p.angVelZ;
      
      
      p.x=(canvas.width/2)+p.range*Math.sin(p.angle);
      p.y=(canvas.height/2)+p.range*Math.cos(p.angle);
      p.z=(zMax)*Math.cos(p.angleZ);     
      
      
      p.range=550*(dz/zMax)*Math.sin(p.angleZ);
      p.r=dz/50+1;
      // p.alpha=Math.round(100*(p.r/3))/100;
  }


  function drawParts(){
  	var p;

  	for(var i=0; i<P.length; i++){
  		p=P[i];

  		ctx.fillStyle="rgba("+p.red+","+p.green+","+p.blue+","+p.alpha+")";
  		ctx.beginPath();
  		ctx.arc(p.x,p.y,p.r,0,2*Math.PI);
  		ctx.fill();

  		move(p);
  	}
  }



  function loop(){
  	bg();
  	drawParts();

  	requestAnimFrame(loop);
  }

  window.onresize=size;

  size(); 
  init(); 
  loop();
}





