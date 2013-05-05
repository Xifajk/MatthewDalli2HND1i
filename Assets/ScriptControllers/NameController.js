#pragma strict

static var userName= "";
var checkName: boolean = false;

function Start () {

}

function Update () {

}

function OnGUI()
{
	GUI.color = Color.green;	
	
	//Display Enter Name and TextField
	GUI.Label(Rect((Screen.width/2)-100,Screen.height/2,100,30),"Enter Name:");
	userName = GUI.TextField(Rect(Screen.width/2,Screen.height/2,200,25),userName,40);
	
	//If user input a name, start the game
	if(checkName == true)
	{
		Application.LoadLevel(2);
		
	} else {
		//If user presses on the button but the name is empty, it will remain on the same screen
		if(GUI.Button(Rect(Screen.width/2,(Screen.height/2)+40,150,40),"Start Mission"))
		{
			if(userName == ""){
				checkName = false;				
			} else {
				checkName = true;
			}
		}
	}
}