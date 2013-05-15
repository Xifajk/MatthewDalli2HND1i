#pragma strict

var customSkin : GUISkin;
var GUI_Alien : Texture2D;
var GUI_Speedboost : Texture2D;
var GUI_Healthboost : Texture2D;
var GUI_Spaceship : Texture2D;


function Start () {

	
}

function Update () {

}

function OnGUI()
{          
	GUI.skin = customSkin;
	
	GUILayout.BeginArea (Rect (Screen.width/2-150,Screen.height/2-300,300,50));  
		GUILayout.Label("HELP AND INSTRUCTIONS");
	GUILayout.EndArea();
	
	GUILayout.BeginArea (Rect (Screen.width/2-250, Screen.height/2-200,500,500));
	
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
		
		GUILayout.BeginHorizontal();
			GUI.DrawTexture(new Rect(100,100,125,125), GUI_Spaceship);
			GUI.DrawTexture(new Rect(275,100,125,125), GUI_Alien);
			GUI.DrawTexture(new Rect(100,300,125,125), GUI_Healthboost);
			GUI.DrawTexture(new Rect(275,300,125,125), GUI_Speedboost);			
		GUILayout.EndHorizontal();			
	GUILayout.EndArea();
	
	GUILayout.BeginArea(Rect (Screen.width/2-100, Screen.height/2+250,150,50));
		if(GUILayout.Button("MAIN MENU"))
		{
			Application.LoadLevel(0);
		}   
	GUILayout.EndArea();
}