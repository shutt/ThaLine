#pragma strict
var origem : Transform;
var destino : Transform;

private var linha : LineRenderer;

function Start () {
	linha = GetComponent(LineRenderer);
	linha.SetPosition(0,origem.position);
	linha.SetPosition(1,destino.position);
}

function Update () {
	if (origem.rigidbody2D.velocity != 0 || destino.rigidbody2D.velocity != 0){
		linha.SetPosition(0,origem.position);
		linha.SetPosition(1,destino.position);
	}
	
	if (Physics2D.Linecast(origem.position,destino.position)){
		Debug.Log("hit");
	}
}