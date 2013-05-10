#pragma strict

var powerup:Rigidbody;

var powerupMaterial:Material[];

function Start () {

	

}

function Update ()
{
	var randomnum : float = Random.Range(1.0,2.0);
	
	WaitForSeconds(10);

	if (randomnum == 1.0)
	{
		generateHealthPowerUp();
		print("Toni");
	}else {
		generateSpeedPowerUp();
		print("Jeanette");
	} 
}

function generateHealthPowerUp()
{

//	this.renderer.material = powerupMaterial[0];

}

function generateSpeedPowerUp()
{
//	this.renderer.material = powerupMaterial[1];
}