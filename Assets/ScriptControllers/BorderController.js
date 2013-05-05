#pragma strict

static var leftborder:float;
static var rightborder:float;
static var bottomborder:float;

function Start () {

}

function Update () {

	/*calculating the left, right and bottom border. This is so the game will have particular boundaries
	and will be used in the CreateBorders function so as the elements in the game won't go outside the screen*/	

	leftborder = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	
	rightborder = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
	
	bottomborder = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).y;

}

static function CreateBorders(object:Transform)
{
	//this will check when the items will collide with the side borders. If they do they won't go off the screen but take a step back
	if(object.position.x < leftborder+1)
	{
		object.position.x = leftborder+1;
	}
	
	if(object.position.x > rightborder-1)
	{
		object.position.x = rightborder-1;
	}
}