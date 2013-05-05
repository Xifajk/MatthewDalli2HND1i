#pragma strict

var alienLaser:Rigidbody;

function Start () {

	var delay:float;
	delay = Random.Range(1.0,5.0);
	InvokeRepeating("shootLaser",delay,delay);
}

function Update () {

}

function shootLaser()
{
	Instantiate(alienLaser,transform.position,transform.rotation);
}