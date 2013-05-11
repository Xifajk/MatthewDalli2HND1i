#pragma strict

var HealthBoost: Rigidbody;

function Start () {

	InvokeRepeating("generateHealthBoost",5.0,10.0);
}

function generateHealthBoost()
{

	Instantiate(HealthBoost,Vector3(-9,0,1),Quaternion.identity);
}

function Update()
{
}