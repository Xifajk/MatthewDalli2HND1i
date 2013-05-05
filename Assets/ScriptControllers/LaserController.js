#pragma strict

var speed:int=15;

function Start () {

}

function Update () {
	transform.Translate(Vector3.up * speed * Time.deltaTime);

}

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag=="alien")
	{
		SpaceShipController.score++;
		Destroy(other.gameObject);
		Destroy(this.gameObject);
		SpaceShipController.shotshit++;
	}
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}