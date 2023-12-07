
//declare photo variables
let img1, img2, img3, img4, img5, wesley1, wesley2, wesley3, wesley4, wesley5, hattie1, hattie2, hattie3, hattie4, hattie5, sage1, sage2, sage3, sage4, sage5, thorn1, thorn2, thorn3, thorn4, thorn5, louise1, louise2, louise3, louise4, louise5, benjamin1, benjamin2, benjamin3, benjamin4, benjamin5, benjaminHouse, louiseHouse, sageHouse, thornHouse, wesleyHouse, hattieHouse, playerHouse, doorImg, wallImg, windowImg, signImg, foilageImg, roofImg, imgName, magicImg, buildingSpace;

//preload images
function preload() {
  img1 = loadImage('assets/1.png')
  img2 = loadImage('assets/2.png')
  img3 = loadImage('assets/3.png')
  img4 = loadImage('assets/4.png')
  img5 = loadImage('assets/5.png')
  wesley1 = loadImage('assets/wesley1.png')
  wesley2 = loadImage('assets/wesley2.png')
  wesley3 = loadImage('assets/wesley3.png')
  wesley4 = loadImage('assets/wesley4.png')
  wesley5 = loadImage('assets/wesley5.png')
  hattie1 = loadImage('assets/hattie1.png')
  hattie2 = loadImage('assets/hattie2.png')
  hattie3 = loadImage('assets/hattie3.png')
  hattie4 = loadImage('assets/hattie4.png')
  hattie5 = loadImage('assets/hattie5.png')
  sage1 = loadImage('assets/sage1.png')
  sage2 = loadImage('assets/sage2.png')
  sage3 = loadImage('assets/sage3.png')
  sage4 = loadImage('assets/sage4.png')
  sage5 = loadImage('assets/sage5.png')
  thorn1 = loadImage('assets/thorn1.png')
  thorn2 = loadImage('assets/thorn2.png')
  thorn3 = loadImage('assets/thorn3.png')
  thorn4 = loadImage('assets/thorn4.png')
  thorn5 = loadImage('assets/thorn5.png')
  louise1 = loadImage('assets/louise1.png')
  louise2 = loadImage('assets/louise2.png')
  louise3 = loadImage('assets/louise3.png')
  louise4 = loadImage('assets/louise4.png')
  louise5 = loadImage('assets/louise5.png')
  benjamin1 = loadImage('assets/benjamin1.png')
  benjamin2 = loadImage('assets/benjamin2.png')
  benjamin3 = loadImage('assets/benjamin3.png')
  benjamin4 = loadImage('assets/benjamin4.png')
  benjamin5 = loadImage('assets/benjamin5.png')
  benjaminHouse = loadImage('assets/benjaminHouse.png')
  sageHouse = loadImage('assets/sageHouse.png')
  hattieHouse = loadImage('assets/hattieHouse.png')
  wesleyHouse = loadImage('assets/wesleyHouse.png')
  louiseHouse = loadImage('assets/louiseHouse.png')
  thornHouse = loadImage('assets/thornHouse.png')
  playerHouse = loadImage('assets/playerHouse.png')
  magicImg1 = loadImage('assets/magic.png')
  magicImg2 = loadImage('assets/magic.png')
  magicImg3 = loadImage('assets/magic.png')
  magicImg4 = loadImage('assets/magic.png')
  magicImg5 = loadImage('assets/magic.png')
  magicImg6 = loadImage('assets/magic.png')
  windowImg = loadImage('assets/windows.png')
  doorImg = loadImage('assets/door.png')
  wallImg = loadImage('assets/wall.png')
  foilageImg = loadImage('assets/foilage.png')
  signImg = loadImage('assets/sign.png')
  roofImg = loadImage('assets/roof.png')
  buildingSpace = loadImage('assets/buildingSpace.png')
  
  
}

//declare other variables
let player, wesley, hattie, benjamin, louise, thorn, sage, playerHouseV, wesleyHouseV, hattieHouseV, benjaminHouseV, louiseHouseV, thornHouseV, sageHouseV, glue1, glue2, glue3, glue4, glue5, glue6, walls, roof, windows, door, sign, foilage, magic1, magic2, magic3, magic4, magic5, magic6;

let talking = false
let dialogue = []
let currentDialogue =  []
let dialogueIndex = 0
let wallsPresent = false
let windowsPresent = false
let signPresent = false
let doorPresent = false
let roofPresent = false
let foilagePresent = false



function setup() {
  createCanvas(1500, 900);
  //set no gravity
  world.gravity.y = 0;
  world.gravity.x = 0;

  //resize all images
  img1.resize(0,85)
  img2.resize(0,85)
  img3.resize(0,85)
  img4.resize(0,85)
  img5.resize(0,85)
  wesley1.resize(0,100)
  wesley2.resize(0,100)
  wesley3.resize(0,100)
  wesley4.resize(0,100)
  wesley5.resize(0,100)
  hattie1.resize(0,100)
  hattie2.resize(0,100)
  hattie3.resize(0,100)
  hattie4.resize(0,100)
  hattie5.resize(0,100)
  sage1.resize(0,100)
  sage2.resize(0,100)
  sage3.resize(0,100)
  sage4.resize(0,100)
  sage5.resize(0,100)
  thorn1.resize(0,95)
  thorn2.resize(0,95)
  thorn3.resize(0,95)
  thorn4.resize(0,95)
  thorn5.resize(0,95)
  louise1.resize(0,100)
  louise2.resize(0,100)
  louise3.resize(0,100)
  louise4.resize(0,100)
  louise5.resize(0,100)
  benjamin1.resize(0,80)
  benjamin2.resize(0,80)
  benjamin3.resize(0,80)
  benjamin4.resize(0,80)
  benjamin5.resize(0,80)
  benjaminHouse.resize(0,220)
  louiseHouse.resize(0,220)
  thornHouse.resize(0,220)
  sageHouse.resize(0,220)
  wesleyHouse.resize(0,220)
  hattieHouse.resize(0,220)
  playerHouse.resize(0,220)
  buildingSpace.resize(0,150)
  doorImg.resize(0,325)
  wallImg.resize(0,325)
  foilageImg.resize(0,325)
  signImg.resize(0,325)
  windowImg.resize(0,325)
  roofImg.resize(0,325)
  magicImg1.resize(0,50)
  magicImg2.resize(0,50)
  magicImg3.resize(0,50)
  magicImg4.resize(0,50)
  magicImg5.resize(0,50)
  magicImg6.resize(0,50)
  
  
  
  //player sprite
  player = new Sprite();
  player.rotationLock = true
  player.x = 750
  player.y = 450
  player.addAni('player', img1, img2, img3, img4, img5)


  //set up NPCs
    wesley = new Ghost(770, 440, wesley1, wesley2, wesley3, wesley4, wesley5, ["You: ...","You: ...What?", "You: Where… Where am I?", "???: Howdy partner! How wonderful it is to see a new ghost around!", "You: Ghost?", "???: Oh sorry partner, I should've probably eased that information to you a bit slower.", "Wesley: My name is Wesley, Sheriff of Shadowrest, this here town that you see in front of you.", "Wesley: And yes… sorry to break the bad news to you partner… You’ve kicked it.", "You: Kicked it?", "Wesley: You’re deceased. Passed away. Departed. Dead as a doornail.", "You: I...", "You: ...", "You: ...I’m dead?", "Wesley: Yes partner, and I’m sorry for your… um… loss. But everyone in this here town is dead. We’re ghosts. We all died around the same spot up in the Living World. We all just got transferred down here. ", "Wesley: Think of this place as a reflection of the land above us. Except here, we make our own homes and towns, and devote our time to our own things.", "Wesley: We’ve got quite a few characters around that you might want to meet to get you situated. Oh, and we have to build you a house. You live here now, friend. Ain't no where else you can go.", "Wesley: You can only float so far away from this town before you fade away and appear right back here. I promise we’re good company though.", "You: ...I’m dead.", "Wesley: Uh... Yes partner. We should get you set up with a house. I’m thinking right north of us we have an empty plot that we can get you set up in.", "Wesley: Around these parts we have something we’ve come to call Astral Magic. The longer you’re here, the more you have of it. Everyone around town has enough of it to spare to help you build this house of yours.", "Wesley: In fact, I’ll get you started. Take this magic, it will build some walls on the empty plot I mentioned.", "Wesley: Then go check out the neighbors! Everyone manifests their Astral Magic in a different way to help the town. I’m sure they would all love to meet you!"])
    
   hattie = new Ghost(1200, 500, hattie1, hattie2, hattie3, hattie4, hattie5, ["Hattie: Oh! Hello darlin'! I'm Hattie, but everyone just calls me Aunt Hattie. Are you settling in okay honey?", "You: Um... Kind of?", "Hattie: Oh goodness me! Your house isn't quite done yet is it? Here, take this hon.", "Hattie: Hopefully this helps you get on your feet, sugar."])
  
  
       benjamin = new Ghost(1100, 725, benjamin1, benjamin2, benjamin3, benjamin4, benjamin5, ["Benjamin: Who are YOU. My names Benjamin. This is my toy car. I make toys and give them away to all my friends here. Especially Aunt Hattie. She’s not really my aunt.", "Benjamin: Is that your house over there? It looks boring. Did you know every day is my birthday here? That's what Aunt Hattie says because I died on my birthday.", "Benjamin: If you dont want your house can I have it? If not, use my magic powers to put a sign up! Or else it's mine for the taking!", "You: ...Okay, it was nice meeting you kid."])
  
  
     louise = new Ghost(400, 725, louise1, louise2, louise3, louise4, louise5, ["Louise: Ah, mon ami. My name iz Louise. I cook and make drinks for ze people of zis town here in my cafe. But first I will help you. Take my magic.", "You: Oh, thank you!", "Louise: C’est la vie."])

  
     thorn = new Ghost(300, 500, thorn1, thorn2, thorn3, thorn4, thorn5, ["Thorn: Oh great, another one. Welcome to Hell. I'm Thorn by the way.", "You: Nice to meet you.", "Thorn: Yeah, yeah. I'll help you out with your house, but just this one time. Take this magic next to me."])
  

  
     sage = new Ghost(400, 275, sage1, sage2, sage3, sage4, sage5, ["Sage: Oh... hi there. I'm Sage. I don't really come out of my library very often, but I'm glad I did today to meet you!", "You: Nice to meet you too!", "Sage: Oh... uh... cool house you got there. It looks like it needs something though, here. Take this to make some windows.", "Sage: See you later!"])

    
    
  
  //set up houses
  wesleyHouseV = new House(1250, 250, wesleyHouse)
  hattieHouseV = new House(1350, 500, hattieHouse)
  benjaminHouseV = new House(1250, 750, benjaminHouse)
  louiseHouseV = new House(220, 750, louiseHouse)
  thornHouseV = new House(120, 500, thornHouse)
  sageHouseV = new House(220, 250, sageHouse)
    
   

 //building space sprite 
  buildingSpaceV = new Sprite();
  buildingSpaceV.x = 750
  buildingSpaceV.y = 200
  buildingSpaceV.collider = "static"
  buildingSpaceV.addAni('house', buildingSpace)
  
//animate the ghosts
  wesley.animate()
  hattie.animate()
  benjamin.animate()
  sage.animate()
  thorn.animate()
  louise.animate()
  
  //call magic class for 6 instances
  magic1 = new AstralMagic(750, 530, magicImg1)
  magic2 = new AstralMagic(1200, 425, magicImg2)
  magic3 = new AstralMagic(1100, 670, magicImg3)
  magic4 = new AstralMagic(280, 430, magicImg4)
  magic5 = new AstralMagic(380, 210, magicImg5)
  magic6 = new AstralMagic(380, 650, magicImg6)

  
  
    
  
    
}

function draw() {
  clear();
  background("#373030")
  
  //move
  if(!talking) {
    if (keyIsDown(LEFT_ARROW)) {
      player.position.x -= 3;
      player.changeAni('player');
    } else if (keyIsDown(RIGHT_ARROW)) {
      player.position.x += 3;
      player.changeAni('player');
    } else if (keyIsDown(UP_ARROW)) {
      player.position.y -= 3;
      player.changeAni('player');
    } else if (keyIsDown(DOWN_ARROW)) {
      player.position.y += 3;
      player.changeAni('player');
    }
  }

  //collisions between player and magic
	if (player.collides(magic1.sprite)) {
	// glue1 = new GlueJoint(player, magic1.sprite);
	// glue1.visible = false
      magic1.sprite.remove();
      houseWalls();
    wallsPresent = true
	}
  
    if (player.collides(magic2.sprite)) {
	// glue2 = new GlueJoint(player, magic2.sprite);
	// glue2.visible = false
      magic2.sprite.remove();
       houseRoof();
    roofPresent = true
	}
  
    if (player.collides(magic3.sprite)) {
	// glue3 = new GlueJoint(player, magic3.sprite);
	// glue3.visible = false
    magic3.sprite.remove();
    houseSign();
    signPresent = true
	}

    if (player.collides(magic4.sprite)) {
	// glue4 = new GlueJoint(player, magic4.sprite);
	// glue4.visible = false
    magic4.sprite.remove();
    houseDoor();
    doorPresent = true
	}

    if (player.collides(magic5.sprite)) {
          magic5.sprite.remove();
    houseWindow();
    windowsPresent = true
	// glue5 = new GlueJoint(player, magic5.sprite);
	// glue5.visible = false
	}
  
    if (player.collides(magic6.sprite)) {
          magic6.sprite.remove();
    houseFoilage();
    foilagePresent = true
	// glue6 = new GlueJoint(player, magic6.sprite);
	// glue6.visible = false
	}
  
  
  
    
//   //wall magic collides with building space
//   if (magic1.sprite.collides(buildingSpaceV)) {
//     magic1.sprite.remove();
//     houseWalls();
//     wallsPresent = true
    
//   }
  
//     //roof magic collides with building space
//   if (magic2.sprite.collides(buildingSpaceV)) {
//     magic2.sprite.remove();
//     houseRoof();
//     roofPresent = true
//   }
  
//     //sign magic collides with building space
//   if (magic3.sprite.collides(buildingSpaceV)) {
//     magic3.sprite.remove();
//     houseSign();
//     signPresent = true
//   }
  
//   //door magic collides with building space
//   if (magic4.sprite.collides(buildingSpaceV)) {
//     magic4.sprite.remove();
//     houseDoor();
//     doorPresent = true
//   }
  
//     //window magic collides with building space
//   if (magic5.sprite.collides(buildingSpaceV)) {
//     magic5.sprite.remove();
//     houseWindow();
//     windowsPresent = true
//   }
  
//     //foilage magic collides with building space
//   if (magic6.sprite.collides(buildingSpaceV)) {
//     magic6.sprite.remove();
//     houseFoilage();
//     foilagePresent = true
//   }
    
  
  //display the houses
  wesleyHouseV.display()
  hattieHouseV.display()
  benjaminHouseV.display()
  sageHouseV.display()
  thornHouseV.display()
  louiseHouseV.display()
  
  //display the magic
  magic1.display()
  magic2.display()
  magic3.display()
  magic4.display()
  magic5.display()
  magic6.display()


//collisions between player and npcs
 if (player.collides(wesley.sprite)) {

      currentDialogue = wesley.getDialogue();
      wesley.sprite.collider = "none"
 }

  
  if (player.collides(hattie.sprite)) {

    currentDialogue = hattie.getDialogue();
    hattie.sprite.collider = "none"
  }
  if (player.collides(benjamin.sprite)){

    currentDialogue = benjamin.getDialogue();
    benjamin.sprite.collider = "none"
  }
  
  if (player.collides(louise.sprite)) {

    currentDialogue = louise.getDialogue();
    louise.sprite.collider = "none"
  }
  if (player.collides(thorn.sprite)) {

   currentDialogue = thorn.getDialogue();
    thorn.sprite.collider = "none"
  }
  
  if (player.collides(sage.sprite)) {

   currentDialogue = sage.getDialogue();
    sage.sprite.collider = "none"
    
  }
  
  //condition for talking
  if(talking) {
    showDialogue()
  }
  
  
  //ending condition
  if (wallsPresent === true && windowsPresent === true && signPresent === true && doorPresent === true && roofPresent === true && foilagePresent === true) {
 
    
    currentDialogue = ["Wesley: Well you done it partner. You got yourself a nice place. You’ll start feeling that Astral Magic soon that you can use at your own will.", "Wesley: Until then, just enjoy yourself. It’s peaceful here. You can make your afterlife exactly how you want it to be. We’ll be here if you need us. We can talk, share stories, whatever you like.", "Wesley: Just rest for now though. I’ll see you later.", "You: ...","You: It’s nice here.", "THE END"]
    
    showDialogue()
    
  }

  
}



//functions for pieces of player's house
function houseWalls() {
    walls = new Sprite();
    walls.x = 750
    walls.y = 120
    walls.collider = "static"
    walls.addAni('house', wallImg)
}

function houseRoof() {
    roof = new Sprite();
    roof.x = 750
    roof.y = 120
    roof.collider = "static"
    roof.addAni('house', roofImg)
}

function houseSign() {
    sign = new Sprite();
    sign.x = 750
    sign.y = 120
    sign.collider = "static"
    sign.addAni('house', signImg)
}

function houseDoor() {
    door = new Sprite();
    door.x = 750
    door.y = 120
    door.collider = "static"
    door.addAni('house', doorImg)
}


function houseWindow() {
    windows = new Sprite();
    windows.x = 750
    windows.y = 120
    windows.collider = "static"
    windows.addAni('house', windowImg)
}

function houseFoilage() {
    foilage = new Sprite();
    foilage.x = 750
    foilage.y = 120
    foilage.collider = "static"
    foilage.addAni('house', foilageImg)
}


//mouseClicked function
function mouseClicked() {
  
if (dialogueIndex < currentDialogue.length - 1) {
      dialogueIndex++;
    } else {
      dialogueIndex = 0;
      currentDialogue = [];
      talking = false
    }

  
}
  
  
//showDialogue function
function showDialogue() {
  fill(255);
  rect(450, height - 150, width - 900, 150);
  fill(0);
  textSize(20);
  textAlign(CENTER)
  text(currentDialogue[dialogueIndex], 500, height - 120, 500);
  
}

//ghost class
class Ghost {
  constructor(x, y, frame1, frame2, frame3, frame4, frame5, dialogue) {
    this.sprite = new Sprite() 
    this.sprite.x = x;
    this.sprite.y = y;
    this.sprite.collider = "static";
    this.dialogue = dialogue
    this.frame1 = frame1
    this.frame2 = frame2
    this.frame3 = frame3
    this.frame4 = frame4
    this.frame5 = frame5
    
    
  }
  animate() {
    this.sprite.addAni('player', this.frame1, this.frame2, this.frame3, this.frame4, this.frame5)
  }
  
  getDialogue() {
    talking = true
    return this.dialogue;
    
  }

}

//astral magic class
class AstralMagic {
  constructor(x, y, frame) {
    this.sprite = new Sprite() 
    this.sprite.x = x;
    this.sprite.y = y;
    this.sprite.collider = "dynamic"
    this.frame = frame
    
}
  
  display() {
    this.sprite.addAni('magic', this.frame)
  }
  

  
}

//house class
class House {
   constructor(x, y, frame) {
    this.sprite = new Sprite() 
    this.sprite.x = x;
    this.sprite.y = y;
    this.sprite.collider = "none"
    this.frame = frame
    
}
  
    display() {
    this.sprite.addAni('house', this.frame)
  }
}

  



