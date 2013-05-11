#pragma strict

static var leftmost:float;
static var rightmost:float;

function Start ()
{

}

function Update ()
{
	//calculate borders
	
	//leftmost border
	leftmost = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	
	//rightmost border.  The X position of the right most border RELATIVE to the center.
	rightmost = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;
	
}


static function EnableBorders(object:Transform)
{
	//if the object stays the left of the screen
	if (object.position.x < leftmost + 2)
	{
		object.position.x = leftmost + 2;
	}

	//if object stays to the right of the screen
	if (object.position.x > rightmost - 2)
	{
		object.position.x = rightmost - 2;
	}
}