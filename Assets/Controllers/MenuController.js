#pragma strict

var logo:Texture2D;
var customSkin : GUISkin;

function Start ()
{

}

function Update ()
{

}

function OnGUI()
{

	//a label with an embedded image
	//GUI.Label(Rect(0,0,logo.width,logo.height),logo);
	
	GUI.skin = customSkin;
	
	GUILayout.BeginArea (Rect (Screen.width/2-100,Screen.height/2-50,200,200));  
	if(GUILayout.Button("START GAME"))
	{
		Application.LoadLevel(1);
	}   
	
	if(GUILayout.Button("HELP"))
	{
		Application.LoadLevel(8);
	}
	
	if(GUILayout.Button("EXIT"))
	{
		Application.Quit();
	}
	GUILayout.EndArea();
}
