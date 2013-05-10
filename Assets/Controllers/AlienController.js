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
	delay = Random.Range(1.0,3.0);
	InvokeRepeating("shootLaser",delay,delay);
}

function Update ()
{

}

