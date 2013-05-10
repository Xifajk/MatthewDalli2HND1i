#pragma strict

var laserSpeed:int;

function Start ()
{

}

function Update ()
{
	transform.Translate(Vector3.up * laserSpeed * Time.deltaTime);	
}

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag=="alien")
	{
		SpaceshipController.score++;
		//destroy the alien
		Destroy(other.gameObject);
		//destroy the laser
		Destroy(this.gameObject);
		SpaceshipController.shotshit++;
		//retrieves the variable from the mentioned javascript
		AlienGenerator.aliencount--;
		//reduces the variable from when the laser hits the alien
	}
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}