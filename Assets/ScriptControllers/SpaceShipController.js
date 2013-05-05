#pragma strict
/**Static Variables to be used in other scripts*/
static var score:int;
static var health:int=100;
static var shotsfired:int=100;
static var shotshit:int=100;

/**Global Variables to be used in this script**/
var laserSlot:Rigidbody;
var speed:int=15;
var level:int;
var Spaceshipcolours:Material[];

function Start () {

}

function Update () {

	//Creating the Borders and Making the Spaceship move with a particular speed 
	BorderController.CreateBorders(this.transform);
	transform.Translate(Vector3.right * speed * Input.GetAxis("Horizontal") * Time.deltaTime);
	
	//When the user presses the Spacebar, a laser will shoot
	if(Input.GetKeyDown(KeyCode.Space))
	{
		Instantiate(laserSlot,transform.position,transform.rotation);
		shotsfired++;
	}
}

function OnGUI()
{
	var shotsmissed:int;
	shotsmissed = shotsfired - shotshit;
	
	GUI.color = Color.green;
	
	GUI.Label(Rect((Screen.width/2)-50,0,200,25),"Player Name: "+NameController.userName);
	GUI.Label(Rect(100,0,50,25),"Score: "+score);
	GUI.Label(Rect(200,0,80,25),"Health: "+health);
	GUI.Label(Rect(900,0,100,25),"Shots Fired: "+shotsfired);
	GUI.Label(Rect(1050,0,100,25),"Shots Hit: "+shotshit);
	GUI.Label(Rect(1920,0,100,25),"Shots Missed: "+shotsmissed);
}