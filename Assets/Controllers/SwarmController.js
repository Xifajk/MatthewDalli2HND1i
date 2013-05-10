#pragma strict

var leftmargin:float=-13.0;
var rightmargin:float=7.0;

var touchedLeftWall:boolean;
var touchedRightWall:boolean;

function goLeft()
{
	transform.Translate(Vector3.left * 10 * Time.deltaTime);
}

function goRight()
{
	transform.Translate(Vector3.right * 10 * Time.deltaTime);
}

function Start()
{
	//start by moving left
	touchedRightWall=true;
}

function Update ()
{
	
	if (transform.position.x < leftmargin)
	{
		touchedLeftWall = true;
		touchedRightWall = false;
	}
	
	if (transform.position.x > rightmargin)
	{
		touchedLeftWall = false;
		touchedRightWall = true;
	}
	
	if (touchedLeftWall == true)
	{
		goRight();
	}
	
	if (touchedRightWall == true)
	{
		goLeft();
	}

}