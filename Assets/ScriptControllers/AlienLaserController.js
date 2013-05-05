#pragma strict

function Start () {

}

function Update () {
	transform.Translate(Vector3.down * 15 * Time.deltaTime);
}

function OnBecameInvisible()
{
	Destroy(this.gameObject);
}