/* THE BALL DOESN'T SHOOT OUT THE SAME EXACT SIDE HENCE THE RANDOM NUMBERS
AND TO STOP THE BALL FROM BEING PREDICTABLE AND HAVE VARIETY */

#pragma strict

function Start () // CALLED BEFORE UPDATE METHODS AND IS CALLED ONLY ONCE IN THE LIFETIME OF A SCRIPT
{
	yield WaitForSeconds (2); // WAITS FOR 2 SECS. TO LAUNCH THE BALL
	GoBall();
}

// TO STOP THE BALL FROM BEING PREDICTABLE

// OnCollisionEnter2D WILL GET CALLED WHENEVER THE BALL COLLIDES WITH SOMETHING
// INSIDE () < WE WANT TO STORE SOME KIND OF INFORMATION ABOUT THE COLLISION

function OnCollisionEnter2D (colInfo : Collision2D) // ColInfo = COLLISION INFORMATION
{
	// TO CHECK IF WE HAVE HIT THE PLAYER | collider = WHO WE COLLIDE WITH
	// tag = A WORD WHICH YOU LINK TO GAME OBJECTS EG. "Player" IN THIS CASE
	
	if (colInfo.collider.tag == "Player")
	{	
		// y velocity OF THE RIGID BODY OF OUR BALL
		// MIX IN THE velocity OF THE BALL AND THE PLAYER
		// 1/2 THE velocity OF THE Y AND 1/3 OF THE VELOCITY OF THE PLAYER
		// AFFECT THE VELOCITY OF THE WALL BY MOVING UP AND DOWN
		
		rigidbody2D.velocity.y = rigidbody2D.velocity.y/2 + colInfo.collider.rigidbody2D.velocity.y/3;
	}
}
	// IF WE DON'T MOVE AT ALL IE. THE TWO PLAYERS ARE STATIONARY, THE Y VELOCITY IS CANCELLED
	// WHEN WE DO MOVE THE Y VELOCITY OF THE BALL IS INCREASED

function ResetBall() // RESET AFTER THE BALL IS OUT OF THE SCREEN
{
	rigidbody2D.velocity.x = 0; // CENTRES
	rigidbody2D.velocity.y = 0; // EVERYTHING
	transform.position.x = 0;
	transform.position.y = 0;
	
	yield WaitForSeconds (0.5); 
	GoBall();
}	
		
	
function GoBall() // WHILE PLAYING
{
	{
	// randomNumber VARIABLE STORES THE Random.Range
	// Random.Range(float) = FLOAT VALUES BETWEEN THE MIN. AND MAX. VALUES YOU PUT IN
	// Random.Range MAKES SURE IT DOESN'T SHOOT OUT THE SAME SIDE EVERY TIME
	
	var randomNumber = Random.Range(0, 2);
	
	if (randomNumber <= 0.5)
	{
		// SHOOT OUT IN ONE DIRECTION
		
		rigidbody2D.AddForce (new Vector2 (80, 10)); // Vector2 IS A VARIABLE STORING 2 COORDINATES: X AND Y
	}
	
	else // IF IT'S NOT <= 0.5
	{
		rigidbody2D.AddForce (new Vector2 (-80, -10));
	}
}

}