#pragma strict

var laserSpeed:int;

static var bossHealth: int = 10;

var detonator: GameObject;

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
		SpaceshipController.score++;;
		//destroy the alien
		Destroy(other.gameObject);
		Instantiate(detonator, transform.position, Quaternion.identity);
		//destroy the laser
		Destroy(this.gameObject);
		SpaceshipController.shotshit++;
		//retrieves the variable from the mentioned javascript
		AlienGenerator.aliencount--;
		//reduces the variable from when the laser hits the alien
	} else 
	{
		if(other.gameObject.tag=="boss")
		{
			SpaceshipController.score = SpaceshipController.score + 5;
			bossHealth--;
			Destroy(this.gameObject);
			SpaceshipController.shotshit++;
		}
	}
	
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}