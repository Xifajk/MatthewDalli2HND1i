#pragma strict

var customSkin : GUISkin;

function Start () {

}

function Update () {

}

function OnGUI()
{
	GUI.skin = customSkin;
	
	GUILayout.BeginArea (Rect (Screen.width/2-250,Screen.height/2-50,500,500));  
	GUILayout.Label("HELP AND INSTRUCTIONS");
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("LEFT KEY");
	GUILayout.FlexibleSpace();
	GUILayout.Label("Spaceship Goes Left");
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("RIGHT KEY");
	GUILayout.FlexibleSpace();
	GUILayout.Label("Spaceship Goes Right");
	GUILayout.EndHorizontal();
	
	GUILayout.BeginHorizontal();
	GUILayout.Label("SPACE KEY");
	GUILayout.FlexibleSpace();
	GUILayout.Label("Shoots Laser");
	GUILayout.EndHorizontal();
	
	GUILayout.EndHorizontal();
	if(GUILayout.Button("MAIN MENU"))
	{
		Application.LoadLevel(0);
	}   
	
	GUILayout.EndArea();
	
}