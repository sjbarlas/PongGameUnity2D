/* THE POSITION OF THE PLAYERS AND THE 4 WALLS ARE STORED IN A Start function
HENCE THEY WILL ONLY BE CALLED ONCE

ALSO NEED TO DETECT CAMERA IN ORDER FOR THIS TO BE POSSIBLE

PLAYERS POSITION AT THE START IS DECLARED */

#pragma strict

var mainCam : Camera;

var topWall : BoxCollider2D;		// ADDING COLLIDERS MEANS
var bottomWall: BoxCollider2D;		// SPRITES WILL ALSO RESPOND
var leftWall : BoxCollider2D;		// TO COLLISIONS WITH
var rightWall : BoxCollider2D;		// OTHER SPRITES

var Player01 : Transform;
var Player02 : Transform;

function Start () // CODE WILL ONLY BE CALLED ONCE AND AT THE START BEFORE THE UPDATE
{
	// MOVE EACH WALL TO ITS EDGE LOCATION
	// Vector2 IS A VARIABLE THAT STORES 2 COORDINATES: X AND Y | Vector3 STORES X, Y AND Z
	// (Screen.Width * 2f, 0f, 0f) = THE X, Y, Z VALUES
	// ScreenToWorldPoint > TRANSFORMS position FROM SCREEN SPACE INTO WORLD SPACE
	
	topWall.size = new Vector2 (mainCam.ScreenToWorldPoint (new Vector3 (Screen.width * 2f, 0f, 0f)).x, 1f);
	
	
	// 0f BEFORE mainCam = CENTERED IN WIDTH
	// mainCam.ScreenToWorldPoint = ACCESSING HEIGHT
	/* SETTING THE CENTER TO BE 0 ON THE X AXIS AND Y AXIS, WE ARE SETTING IT TO BE JUST BY THE EDGE
	0.5f > IT WILL BE AT THE EDGE FROM THE CENTER OF THE COLLIDER/BOUNDARY
	+ 0.5f > HALF THE WIDTH OF THE COLLIDER/BOUNDARY OF THE HEIGHT
	
	IT WILL ONLY BE JUST OUTSIDE OF THE SCREEN */
	
	topWall.center = new Vector2 (0f, mainCam.ScreenToWorldPoint (new Vector3 (0f, Screen.height, 0f)).y + 0.5f);
	
	bottomWall.size = new Vector2 (mainCam.ScreenToWorldPoint (new Vector3 (Screen.width * 2f, 0f, 0f)).x, 1f);
	bottomWall.center = new Vector2 (0f, mainCam.ScreenToWorldPoint (new Vector3 (0f, 0f, 0f)).y - 0.5f);
	
	leftWall.size = new Vector2 (1f, mainCam.ScreenToWorldPoint (new Vector3 (0f, Screen.height * 2f, 0f)).y);
	leftWall.center = new Vector2 (mainCam.ScreenToWorldPoint (new Vector3 (0f, 0f, 0f)).x - 0.5f, 0f);
	
	rightWall.size = new Vector2 (1f, mainCam.ScreenToWorldPoint (new Vector3 (0f, Screen.height * 2f, 0f)).y);
	rightWall.center = new Vector2 (mainCam.ScreenToWorldPoint (new Vector3 (Screen.width, 0f, 0f)).x + 0.5f, 0f);

	
	// POSITION WE WANT TO CHANGE OF PLAYERS
	
	Player01.position.x = mainCam.ScreenToWorldPoint (new Vector3 (75f, 0f, 0f)).x;
	Player02.position.x = mainCam.ScreenToWorldPoint (new Vector3 (Screen.width - 75f, 0f, 0f)).x;
}