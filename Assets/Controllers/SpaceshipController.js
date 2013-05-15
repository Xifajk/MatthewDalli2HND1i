#pragma strict

static var score:int;
static var totalscore: int;
static var health:int; //static meaning the only one in the game
static var shotsfired:int;
static var shotshit:int;

var laserSlot:Rigidbody;
var level:int;
var levelcount: int;
var customSkin : GUISkin;
var checkpowerup: boolean;
var speed: int;

function Start ()
{
<<<<<<< HEAD
	health = 100;
=======
	health = 1000;
>>>>>>> 0d10278381d211078d99f403bbec94dcb0b12809
	shotsfired = 0;
	shotshit = 0;
	score = 0;
	totalscore = 0;
	checkpowerup = false;
	DontDestroyOnLoad(this.gameObject);
}

function Update ()
{
	BorderController.EnableBorders(this.transform);
	transform.Translate(Vector3.right * speed * Input.GetAxis("Horizontal") * Time.deltaTime);
	
	//shoot the laser
	if(Input.GetKeyDown(KeyCode.Space))
	{
		Instantiate(laserSlot,transform.position,transform.rotation);
		shotsfired++;
	}
	
	if (health <= 0)
	{
		Destroy(GameObject.FindGameObjectWithTag("spaceship"));
		Application.LoadLevel(8);		
	}
	else
	{
<<<<<<< HEAD
		if (health > 100)
		{
			health = 100;
=======
		if (health > 1000)
		{
			health = 1000;
>>>>>>> 0d10278381d211078d99f403bbec94dcb0b12809
		}
	}
		
	if (levelcount < 6){ //so it won't give an error when it'll go to the boss level
		var myAlienGenerator:AlienGenerator;
		myAlienGenerator=GameObject.FindGameObjectWithTag("swarm").GetComponent(AlienGenerator);
	
		if(myAlienGenerator.aliencount<=0)
		{
			level = Application.loadedLevel;
			levelcount = level+1;
			totalscore = totalscore + score;
			Application.LoadLevel(levelcount);
			score = 0;
			print(levelcount);
		}
	} else {
		if (LaserController.bossHealth == 0)
		{
			Destroy(GameObject.FindGameObjectWithTag("spaceship"));
			Application.LoadLevel(9);
		}
	}
}

function OnGUI()
{
	var shotsmissed:int;
	shotsmissed = 0;
	shotsmissed = shotsfired - shotshit;
	
	GUI.skin = customSkin;
	GUILayout.BeginArea(Rect(0,0,Screen.width,40));
	GUILayout.BeginHorizontal();
	GUILayout.Label("Name: "+NameController.username);
	GUILayout.FlexibleSpace();
	GUILayout.Label("Score: "+score);
	GUILayout.FlexibleSpace();
	GUILayout.Label("Health: "+health); 
	GUILayout.FlexibleSpace();
	GUILayout.Label("Shots Fired: "+shotsfired);
	GUILayout.FlexibleSpace();
	GUILayout.Label("Shots Hit: "+shotshit);
	GUILayout.FlexibleSpace();
	GUILayout.Label("Shots Missed: "+shotsmissed);
	GUILayout.FlexibleSpace();
	GUILayout.Label("Aliens: "+AlienGenerator.aliencount);
	GUILayout.FlexibleSpace();	
	GUILayout.EndHorizontal();
	GUILayout.EndArea();
}

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.tag=="enemylaser")
	{
		health--;
	}
	
	if(other.gameObject.tag=="healthboost")
	{
		if (health < 100)
		{
			health = health + 5;
		}
		score += 2;
		Destroy(GameObject.FindGameObjectWithTag("healthboost"));
	}
	
	if(other.gameObject.tag=="speedboost")
	{
		Destroy(GameObject.FindGameObjectWithTag("speedboost"));
		checkpowerup = true;
		speed = 100;
		yield WaitForSeconds(5);
		checkpowerup = false;
		speed = 15;
		score += 2;
	}
<<<<<<< HEAD
}
=======
}
>>>>>>> 0d10278381d211078d99f403bbec94dcb0b12809
