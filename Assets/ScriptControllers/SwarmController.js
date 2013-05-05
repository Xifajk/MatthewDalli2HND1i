#pragma strict

var leftmargin:float=-13.0;
var rightmargin:float=7.0;

var leftWallBoundary:boolean;
var rightWallBoundary:boolean;

function moveLeft()
{
	transform.Translate(Vector3.left * 10 * Time.deltaTime);
}

function moveRight()
{
	transform.Translate(Vector3.right * 10 * Time.deltaTime);
}

function Start () {

	rightWallBoundary = true;

}

function Update () {

	if (transform.position.x < leftmargin)
	{
		leftWallBoundary = true;
		rightWallBoundary = false;
		moveRight();
	}
	
	if (transform.position.x > rightmargin)
	{
		leftWallBoundary = false;
		rightWallBoundary = true;
		moveLeft();
	}
}