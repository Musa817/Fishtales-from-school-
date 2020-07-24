//Musa Jallow
//This is my pellet object.

//Using the createPellet as a template/mother tree, I made these differents variants/branches which depend on the original createPellet function.

function createPoisonPellet() {
  return createPellet("Poison", 10, 255, 0, 0);

}//This is my function which is basically a variant of my CreatePellet function specified for food pellets.

function createFoodPellet() {
  return createPellet("Food", 5, 190, 190, 190);

}//This is my function which is basically a variant of my CreatePellet function specified for poison pellets.

//The values of the createPellet parameters change based on the pellet type, but not because of the type property.

function createPellet(t, w, r, g, b) {

  var pellet = {
    // These are the properties of my Pellet object, all within the pellet variable.
    type: t,
    velocity: createVector(0, 1),
    loc: createVector(random(width), 0),
    skin: color(r, r, r),
    outline: color(r, r, r),
    weight: w,
    //Using the show method,I display my pellet on the screen, which I made with ellipses.
    show: function() {
      fill(this.skin);
      stroke(this.outline);
      ellipse(this.loc.x, this.loc.y, this.weight / 2, this.weight / 2);

    },//closes show method.
    //Using the move method, I specify the pellet's trajectory only if its on the screen.
    move: function() {
      this.loc.add(this.velocity)
      if (this.loc.y >= height){
        this.velocity = createVector(0, 0);
      }
    },
 //closes move method.


//This method makes sure that the my pellet properly moves and exists, being redrawn and updated each frame.
    update: function() {
      this.move();
      this.show();





    }//closes update method.
  }//closes var pellet
  return pellet;
}//closes CreatePellet()
