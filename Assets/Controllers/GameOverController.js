#pragma strict

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
	
	GUILayout.BeginArea (Rect (Screen.width/2-100,Screen.height/2-50,200,200));  
	GUILayout.Label("GAME OVER");   
	GUILayout.FlexibleSpace();		
	if(GUILayout.Button("MAIN MENU"))
	{
		Application.LoadLevel(0);
	}
	GUILayout.EndArea();
}

