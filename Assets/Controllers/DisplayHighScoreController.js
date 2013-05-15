#pragma strict
import System.IO;

var customSkin : GUISkin;

var fileName = "Highscores.txt";

function Start () {

	
}


function Update () {

}

function OnGUI()
{
	GUI.skin = customSkin;
	
	GUILayout.BeginArea (Rect (Screen.width/2-100,Screen.height/2-50,200,200));  
	GUILayout.Label("HIGH SCORE");
	
	var sr = new StreamReader(Application.dataPath + "/" + fileName);
	var fileContents = sr.ReadToEnd();
	sr.Close();
	 
	var lines = fileContents.Split("\n"[0]);
	for (line in lines)
	{
		GUILayout.Label(line);
	}
	
	if(GUILayout.Button("MAIN MENU"))
	{
		Application.LoadLevel(0);
	}   
	
	GUILayout.EndArea();
}