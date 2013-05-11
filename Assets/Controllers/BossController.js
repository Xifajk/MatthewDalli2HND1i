#pragma strict

var enemyLaser:Rigidbody;

function shootLaser()
{
	//shoots out the laser from the random position of the alien
	Instantiate(enemyLaser, transform.position, transform.rotation);
}

function Start ()
{
	//the laser shoots from 1 second to 3 seconds
	var delay:float;
	for (var i=0; i <= 100; i++)
	{
	
		delay = Random.Range(0.5,1.0);
		InvokeRepeating("shootLaser",delay,delay);
	}
}

function Update ()
{

}

