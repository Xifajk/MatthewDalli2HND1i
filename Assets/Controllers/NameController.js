#pragma strict

static var username = "Enter Your Name Here";
var checkname: boolean = false;
var customSkin : GUISkin;

function Start ()
{

}

function Update ()
{

}

function OnGUI()
{
	GUI.skin = customSkin;
	
	//If user input a name, start the game
	if(checkname == true)
	{
		Application.LoadLevel(1);
		
	} else {
		//If user presses on the button but the name is empty, it will remain on the same screen
		GUILayout.BeginArea (Rect (Screen.width/2-100,Screen.height/2-50,200,200));
        username = GUILayout.TextField (username);
        		
		if(GUILayout.Button("Start"))
		{
			if(username == "Enter Your Name Here")
			{
				checkname = false;				
			} else {
			checkname = true;
			}
		}
		GUILayout.EndArea();
	}
}
