#pragma strict

var alien:Rigidbody;
var rows:int;
var columns:int;
static var aliencount:int; //static to call it from another javascript

function generateAliens(rows:int, columns:int)
{
	var ypos = transform.position.y;
	transform.position.x = 0; //setting it to 0
			
	for(var rowscounter=0; rowscounter<rows; rowscounter++)
	{
		var tempAlien:Rigidbody;
		//repeat for COLUMNS times
		for(var counter=0; counter<columns; counter++)
		{
			//y position of swarm
			tempAlien = Instantiate(alien,Vector3(counter*3,ypos-(rowscounter*2),1),Quaternion.identity); //x position, y position - spacing * 1.5
			//place this object INSIDE the swarm
			tempAlien.transform.parent = this.transform;
			aliencount++; //counts all the aliens
		}
	}
}

function Start ()
{

	aliencount = 0;
	//create rows by columns which are then entered manually
	generateAliens(rows,columns);
}
