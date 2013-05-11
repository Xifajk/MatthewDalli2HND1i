#pragma strict

var SpeedBoost: Rigidbody;

function Start ()
{

	InvokeRepeating("generateSpeedBoost",15.0,10.0);
}


function generateSpeedBoost()
{
	Instantiate(SpeedBoost,Vector3(-9,0,1),Quaternion.identity);
}

function Update () 
{
}