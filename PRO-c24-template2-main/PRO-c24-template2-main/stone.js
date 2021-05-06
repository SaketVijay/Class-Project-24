class Stone{
	constructor(x,y,r)
	{
	var options = {
	'density' : 0.8,
	'friction': 1,
	'restitution': 0.8
	}
		this.x=6;
		this.y=2;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stone.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			rect(0, 0, this.width, this.height)
			pop()
	}

}