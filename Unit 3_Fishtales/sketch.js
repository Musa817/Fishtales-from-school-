//My Fish tank.
var fishies = []
var pellets = []

function Food() {
  for (var i = 0; i < 8; i++)
    pellets.push(createFoodPellet("Food."))

} //Ends food function
function Poison() {
  for (var i = 0; i < 8; i++)
    pellets.push(createPoisonPellet("Poison."))
} //Ends poison function.

//Tap the tank does not work. EDIT: It works on my PC. I think it works.
function TapTank() {
  for (var m = 0; m < fishies.length; m++) {
    var tappies = fishies[m]
    tappies.velocity.mult(-1)
  }//Ends m for loop.
}//Ends TapTank function.
//I added the Spongebob theme song. A little fitting. It worked earlier, but I'm not sure if it works now.
function preload(){
  Spongebob = loadSound("SSTS.mp3");
}
function setup() {
  createCanvas(400, 300);
  Spongebob.setVolume(1);
  Spongebob.play();
  Foodie = createButton("Food.").mousePressed(Food);
  Poisonous = createButton("Poison.").mousePressed(Poison);
  Goldfish = createButton("Goldfish.").mousePressed(createGoldfish);
  Bitey = createButton("Piranha.").mousePressed(createPiranha);
  Whaley = createButton("Whale.").mousePressed(createWhale);
  Tapp = createButton("Tap the Tank.").mousePressed(TapTank);
  for (var i = 0; i < 8; i++) {
    pellets.push(createFoodPellet())
  } //For loop that manipulates array so it updates the pellet array.


} //Ends setup.

function draw() {
  background(113, 244, 255);
  /* Series of nested for loops.*/
  //For loop that puts fish into an array and links to update.
  for (var i = 0; i < fishies.length; i++) {
    var fish1 = fishies[i];
    fish1.update();
    //For loop that puts pellets into an array and links to update. It also registers collisions with the fish using an array.
    for (var j = 0; j < pellets.length; j++) {
      var pellet = pellets[j]
      pellets[j].update();
      if (pellet.type === "Food") {
        if (fish1.hasCollision1(pellet))
          pellets.splice(j, 1)
      }
      if (pellet.type === "Poison") {
        if (fish1.hasCollision3(pellet))
          pellets.splice(j, 1)
      }

    } //Ends j for loop.
    for (var k = i+1; k < fishies.length; k++) {
      var fishtwo = fishies[k];
      //Nested if-statement.
      //When fish of the same species collide, they bounce off in different directions.
      if (fish1.hasCollision2(fishtwo)) {
        console.log(i+")"+fish1.type + " vs " + k + ")" + fishtwo.type )
        if (fish1.type === fishtwo.type) {
          fish1.velocity.mult(-1);
          fishtwo.velocity.mult(-1);
        } //Ends second if-statement.
        //Dealing with when fishes of different types collide.
        else {
          if (fish1.type === "Piranha" && fishtwo.type === "Goldfish") {
            fish1.weight+= 0.25*fishtwo.weight;
            fishies.splice(k, 1);
          } //Ends fourth if=statement.
          else if (fish1.type === "Goldfish" && fishtwo.type === "Piranha") {
            //fish1.weight+= 0.25(fishtwo[k].weight);
            fishtwo.weight+=0.25*fish1.weight
            fishies.splice(i, 1);
          } //Ends fifth if-statement.
          else if (fish1.type === "Whale" && fishtwo.type === "Goldfish") {
            fish1.weight+=0.25*fishtwo.weight
            fishies.splice(k, 1);

          } //Ends sixth if-statement.
          else if (fish1.type === "Goldfish" && fishtwo.type === "Whale") {
            fishtwo.weight+=0.25*fish1.weight
            fishies.splice(i, 1);
          } //Ends seventh if-statement.
          else if (fish1.type === "Whale" && fishtwo.type === "Piranha") {
            fish1.weight+=0.25*fishtwo.weight
            fishies.splice(k, 1);
          } //Ends eighth if-statement.
          else {//if (fish1.type === "Piranha" && fishtwo.type === "Whale") {
            fishtwo.weight+=0.25*fish1.weight
            fishies.splice(i, 1);
          } //Ends ninth if-statement.
        } //Ends third if-statement.
      } //Ends first if-statement.
    } //Ends k for loop.
  } //Ends i for loop.

  //For loop that makes pellets drop at the start of the program.
  for (var x = 0; x < pellets.length; x++)
    pellets[x].update();


} //Ends x for loop.
