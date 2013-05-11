#pragma strict

function Start () {

	transform.position.x = Random.Range(BorderController.rightmost, BorderController.leftmost);
	transform.position.y = -9;
}

function Update () {

	BorderController.EnableBorders(this.transform);

}