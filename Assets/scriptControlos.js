#pragma strict

var velocidadeVertical : float;
var velocidadeHorizontal : float;

var ctrHoriz : String;
var ctrVerti : String;

private var v : float;
private var h : float;

function Start () {
	

}

function Update () {
	v = Input.GetAxis(ctrVerti);
	h = Input.GetAxis(ctrHoriz);
	
	if(v){
		rigidbody2D.velocity.y = v * velocidadeVertical;
		if (Input.GetKey(KeyCode.LeftShift)){
			rigidbody2D.velocity.y = v * (velocidadeVertical*2);
		}
	} else {
		rigidbody2D.velocity.y = 0;
	}
	
	if (h){
		rigidbody2D.velocity.x = h * velocidadeHorizontal;
		if (Input.GetKey(KeyCode.LeftShift)){
			rigidbody2D.velocity.x = h * (velocidadeHorizontal*2);
		}
	} else {
		rigidbody2D.velocity.x = 0;
	}
	
	
}