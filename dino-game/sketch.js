const SPACE_K = " ";
let bgImg;
let bg1;
let bg2;
let x = 0;
let rapidashImg;
let rapidash;
let exeggutorImg;
let exeggutor;
const exeggutors = [];

function preload() 
{
	//bgImg = loadImage()
	bgImg = loadImage('assets/bg.png');
	rapidashImg = loadImage('assets/rapidash.png');
	exeggutorImg = loadImage('assets/exeggutor.png');
}

function setup() 
{
	createCanvas(windowWidth, windowHeight);
	bg1 = new Bg(bgImg, 0);
	bg2 = new Bg(bgImg, width);
	rapidash = new Rapidash(rapidashImg);
	exeggutor = new Exeggutor(exeggutorImg);
}

function draw() 
{
	/*
	if(random(1) < 0.005 && (exeggutors[exeggutors.length - 1].x))
	{
		exeggutors.push(new Exeggutor(exeggutorImg));	
	}*/
	if(random(1) < 0.005)
	{
		exeggutors.push(new Exeggutor(exeggutorImg));	
	}
	bg1.draw();
	bg2.draw();
	rapidash.draw();
	//exeggutor.draw();
	for(let exeggutor of exeggutors)
	{
		exeggutor.draw();
		exeggutor.move();
	}

	bg1.scroll();
	bg2.scroll();

	rapidash.update();
	exeggutor.move();
}

function keyPressed() 
{
	if(key === SPACE_K) 
	{
		rapidash.jump();
	}
	
}