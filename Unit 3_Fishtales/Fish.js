//Musa Jallow
//This is my fish object.


//Using the createFish as a template/mother tree, I made these differents variants/branches which depend on the original createFish function.


function createWhale() {
  var Moby = createFish("Whale", 1, 30000, 100, 192, 192, 192);
  fishies.push(Moby);
} //This is my function which is basically a variant of my CreateFish function specified for whales.

function createPiranha() {
  var Pira = createFish("Piranha", 2, 10000, 50, 0, 0, 255);
  fishies.push(Pira);
} //This is my function which is basically a variant of my CreateFish function specified for piranhas.



function createGoldfish() {
  var Goldie = createFish("Goldfish", 3, 20000, 30, 255, 0, 0);
  fishies.push(Goldie);
} //This is my function which is basically a variant of my CreateFish function specified for whales.



//The values of the createFish parameters change based on the fish type, but not because of the type property.
function createFish(t, ms, ma, mw, sc1, sc2, sc3) {


  var fish = {
      // These are the properties of my Fish object, all within the fish variable.
      type: t,
      Alive: true,
      velocity: createVector(random(-1, 1), random(-1, 1)),
      loc: createVector(random(height), random(width)),
      skin: color(sc1, sc2, sc3),
      outline: color(0),
      weight: mw / 2,
      maxspeed: ms,
      maxage: ma,
      maxweight: mw,
      minweight: mw/10,
      age: 0,
      //Using the show method,I display my fish on the screen, which I made with ellipses and triangles.
      show: function() {
        fill(this.skin);
        stroke(this.outline);
        ellipse(this.loc.x, this.loc.y, this.weight, this.weight);
        ellipse(this.loc.x - 10, this.loc.y, this.weight / 5, this.weight / 5)
        ellipse(this.loc.x - 10, this.loc.y, this.weight / 10, this.weight / 10)
        ellipse(this.loc.x + 10, this.loc.y, this.weight / 5, this.weight / 5)
        ellipse(this.loc.x + 10, this.loc.y, this.weight / 10, this.weight / 10)

      } /*Closes show method*/ ,
      //Using the move method and a few properties I defined within my fish variable, I make my fish move and I make it bounce (or float up to the top of my screen and disappear) depending on the boolean value of my Alive variable.
      move: function() {
        this.loc.add(this.velocity)
        if (this.Alive) {
          if (this.loc.x > width || this.loc.x < 0)
            this.velocity.x *= -1;
          if (this.loc.y > height || this.loc.y < 0)
            this.velocity.y *= -1;
        } /*Closes nested if statement.*/
        else {

          this.velocity = createVector(0, -1);
          if (this.loc.y < 10)
            this.velocity = createVector(0, 0);
        } //Closes else statement.

      } /*Closes move method*/ ,

      //This method makes sure that the my fish properly moves and exists, being redrawn and updated each frame.
      update: function() {
        this.move();
        this.show();
        //This is an if statement that uses some of my properties. Depending on the fufillment of a certain condition, which itself depends on  the value of the age property, my fish grows bigger until the value of the age property is bigger than the value of my maxage property. If this is true, my Alive variable is false, which calls back to my move method and changes the behavior of my fish.
        this.age++;
        if (this.age % 100 == 0)
          this.weight += 0.5;
        if (this.age > this.maxage)
          this.Alive = false;
        if (this.weight >= this.maxweight)
          this.Alive = false;
        if (this.weight <= this.minweight)
          this.Alive = false;
        //console.log(this.Alive)
      }, //Closes update method.
      //Below is a series of my hasCollision methods which i tailor based on the object that the fish is colliding with.
      //Every time a collision occurs between a fish and a food pellet, the fish gets bigger.
      hasCollision1: function(obj) {
        if (this.loc.dist(obj.loc) <=
          this.weight / 2 + obj.weight / 2) {
          this.weight += 1
          return this.loc.dist(obj.loc)
        } //Ends if-statement.
      },
    //Every time a collision occurs between a fish and another fish, this happens. There's nothing that happens beside the collision being registered, because I specify what happens based on the fish types of the fish that collide in my sketch.js.
    hasCollision2: function(obj) {
      if (this.loc.dist(obj.loc) <=
        this.weight / 2 + obj.weight / 2) {
        //do smthg!
        return true;
      }
    },
    //Every time a collision occurs between a fish and a poison pellet, the fish gets smaller.
    hasCollision3: function(obj) {
      if (this.loc.dist(obj.loc) <=
        this.weight / 2 + obj.weight / 2) {
        this.weight -= 1
        return this.loc.dist(obj.loc)
      }
    }, //Ends hasCollision  method.

} //Closes var fish.
return fish;
} //Closes createFish().
