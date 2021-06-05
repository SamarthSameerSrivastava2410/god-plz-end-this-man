var gameState, timer, i, tomatoSel, cheeseSel, capsicumSel, sauceSel, mushSel, peproSel, olvSel, oniSel, show, tomato,
gratedCheese, capsicum, sauces, mushroom, peproni, olv, oni;


function preload(){

  backgroundIMG = loadImage("images/background.png");
  buttonIMG = loadImage("images/buttons.png");
  boardIMG = loadImage("images/board.jpg");
  baseAnimation = loadAnimation("images/pda/1.png", "images/pda/2.png", "images/pda/3.png", "images/pda/4.png", 
  "images/pda/5.png", "images/pda/6.png", "images/pda/7.png", "images/pda/8.png", "images/pda/9.png" ,
  "images/pda/10.png", "images/pda/11.png", "images/pda/12.png", "images/pda/13.png", "images/pda/14.png", "images/pda/15.png");
  baseStillAni = loadAnimation("images/pda/15.png")
  mushroomIMG = loadImage("images/mush.png");
  onionIMG = loadImage("images/oni.png");
  tomatoIMG = loadImage("images/toma.png");
  capsicumIMG = loadImage("images/cap.png");
  GtomatoIMG = loadImage("images/Gtomato.png");
  cheeseIMG = loadImage("images/cheeze.png");
  Gcapsicum = loadImage("images/Gcapsicum.png");
  sauceIMG = loadImage("images/sauce.png");
  Gmush = loadImage("images/Gmush.png");
  pepIMG = loadImage("images/pep.png")
  Golives = loadImage("images/Golives.png")
  olvIMG = loadImage("images/olives.png")
  OniIMG = loadImage("images/oni.png")
  Goni = loadImage("images/Gonion.png")
  doneIMG = loadImage("images/Done.png")
  pizzaBox = loadImage("images/pizzaInit.png")
  EPpizza = loadImage("images/pizzaWithPep.png")
  ETpizza = loadImage("images/pizzaWithET.png")
  cpizza = loadImage("images/cappizza.png");
  mpizza = loadImage("images/mushpizza.png");
  opizza = loadImage("images/onipizza.png");
  tpizza = loadImage("images/tompizza.png");
  ovpizza = loadImage("images/olvpizza.png");
  chpizza = loadImage("images/chpizza.png")
}



function setup(){
  //Sframe = frameCount
  createCanvas(1200,900);
  timer = 0;    
  gameState = "shop"
  i = 0;
  tomatoSel = 0;
  cheeseSel = 0;
  capsicumSel = 0;
  sauceSel = 0;
  mushSel = 0;
  peproSel = 0;
  olvSel = 0;
  oniSel = 0;
  show = 0;
  p = 0;
  c = 0;
  t = 0;
  o = 0;
  ov = 0;
  m = 0;
  ch = 0;

  playButton = createSprite(600, 550, 20, 20);
  playButton.addImage("button", buttonIMG);

  dough = createSprite(515, 525, 200, 200);
  dough.addAnimation("base", baseAnimation);
  dough.addAnimation("still", baseStillAni);
  dough.scale = 0.5
  dough.visible = false;
  timer = 0;

  tom1 = createSprite(1130, 115, 300, 500)
  tom1.addImage("tomatoKaGroup", GtomatoIMG)
  tom1.scale = 0.6
  
  tom2 = createSprite(1130, 155, 100, 100)
  tom2.addImage("tomatoKaGroup", GtomatoIMG)
  tom2.scale = 0.6
  
  tom3 = createSprite(1130, 185, 100, 100)  
  tom3.addImage("tomatoKaGroup", GtomatoIMG)
  tom3.scale = 0.6
  
  tom4 = createSprite(1130, 215, 100, 100)
  tom4.addImage("tomatoKaGroup", GtomatoIMG)
  tom4.scale = 0.6

  cap1 = createSprite(1130, 355, 300, 500)
  cap1.addImage("capsicumkagroup", Gcapsicum)
  cap1.scale = 0.6
  
  cap2 = createSprite(1130, 385, 100, 100)
  cap2.addImage("capsicumkagroup", Gcapsicum)
  cap2.scale = 0.6
  
  cap3 = createSprite(1130, 415, 100, 100)  
  cap3.addImage("capsicumkagroup", Gcapsicum)
  cap3.scale = 0.6
  
  cap4 = createSprite(1130, 455, 100, 100)
  cap4.addImage("capsicumkagroup", Gcapsicum)
  cap4.scale = 0.6

  mush1 = createSprite(1130, 615, 300, 500)
  mush1.addImage("mushroomkagroup", Gmush)
  mush1.scale = 0.6
  
  mush2 = createSprite(1130, 655, 100, 100)
  mush2.addImage("mushroomkagroup", Gmush)
  mush2.scale = 0.6
  
  mush3 = createSprite(1130, 685, 100, 100)  
  mush3.addImage("mushroomkagroup", Gmush)
  mush3.scale = 0.6
  
  mush4 = createSprite(1130, 715, 100, 100)
  mush4.addImage("mushroomkagroup", Gmush)
  mush4.scale = 0.6

  olv1 = createSprite(920, 115, 300, 500)
  olv1.addImage("OliveKaGroup", Golives)
  olv1.scale = 0.6
  
  olv2 = createSprite(920, 155, 100, 100)
  olv2.addImage("OliveKaGroup", Golives)
  olv2.scale = 0.6
  
  olv3 = createSprite(920, 185, 100, 100)  
  olv3.addImage("OliveKaGroup", Golives)
  olv3.scale = 0.6
  
  olv4 = createSprite(920, 215, 100, 100)
  olv4.addImage("OliveKaGroup", Golives)
  olv4.scale = 0.6

  olv6 = createSprite(970, 115, 100, 100)
  olv6.addImage("OliveKaGroup", Golives)
  olv6.scale = 0.6
  
  olv7 = createSprite(970, 155, 100, 100)
  olv7.addImage("OliveKaGroup", Golives)
  olv7.scale = 0.6
  
  olv8 = createSprite(970, 185, 100, 100)  
  olv8.addImage("OliveKaGroup", Golives)
  olv8.scale = 0.6
  
  olv9 = createSprite(970, 215, 100, 100)
  olv9.addImage("OliveKaGroup", Golives)
  olv9.scale = 0.6

  oni1 = createSprite(740, 115, 300, 500)
  oni1.addImage("OnionKaGroup", Goni)
  oni1.scale = 0.6

  oni2 = createSprite(740, 155, 100, 100)
  oni2.addImage("OnionKaGroup", Goni)
  oni2.scale = 0.6
  
  oni3 = createSprite(740, 185, 100, 100)  
  oni3.addImage("OnionKaGroup", Goni)
  oni3.scale = 0.6
  
  oni4 = createSprite(740, 215, 100, 100)
  oni4.addImage("OnionKaGroup", Goni)
  oni4.scale = 0.6

  oni5 = createSprite(790, 115, 100, 100)
  oni5.addImage("OnionKaGroup", Goni)
  oni5.scale = 0.6
  
  oni6 = createSprite(790, 155, 100, 100)
  oni6.addImage("OnionKaGroup", Goni)
  oni6.scale = 0.6
  
  oni7 = createSprite(790, 185, 100, 100)  
  oni7.addImage("OnionKaGroup", Goni)
  oni7.scale = 0.6
  
  oni8 = createSprite(790, 215, 100, 100)
  oni8.addImage("OnionKaGroup", Goni)
  oni8.scale = 0.6

  cheese = createSprite(394, 160, 140, 160)
  cheese.visible = false;

  sauce = createSprite(175, 165, 200, 160)
  sauce.visible = false;

  pepro = createSprite(578, 160, 140, 160)
  pepro.visible = false;

  done = createSprite(870, 525, 200, 200);
  done.addImage(doneIMG)

  
  //capsicum.visible = false;

  tom1.visible = false;
  tom2.visible = false;
  tom3.visible = false;
  tom4.visible = false;

  cap1.visible = false;
  cap2.visible = false;
  cap3.visible = false;
  cap4.visible = false;

  mush1.visible = false;
  mush2.visible = false;
  mush3.visible = false;
  mush4.visible = false;

  olv1.visible = false;
  olv2.visible = false;
  olv3.visible = false;
  olv4.visible = false;
  olv6.visible = false;
  olv7.visible = false;
  olv8.visible = false;
  olv9.visible = false;

  oni1.visible = false;
  oni2.visible = false;
  oni3.visible = false;
  oni4.visible = false;
  oni5.visible = false;
  oni6.visible = false;
  oni7.visible = false;
  oni8.visible = false;

  done.visible = false;

  dough.setCollider("circle",-70,15,250);
  dough.debug = true

  rand = Math.round(random(1,2))
}

function draw() {
  background(backgroundIMG); 
  

  if(mousePressedOver(playButton)){
    gameState = "play";
  }

  if(gameState === "shop"){

    push();
      textSize(70);
      fill("black");
      textFont("Lucida Handwriting")
      text("PIZZA MAKING", 400, 350)
    pop();

  }

  if (gameState === "play"){
    
    timer += 0.1;
    //frame = frameCount;
    //console.log(frame)
    background(boardIMG);
    //dough.frameDelay = 25;
    playButton.destroy();
    tom1.visible = true;
    tom2.visible = true;
    tom3.visible = true;
    tom4.visible = true;
    
    cap1.visible = true;
    cap2.visible = true;
    cap3.visible = true;
    cap4.visible = true;

    mush1.visible = true;
    mush2.visible = true;
    mush3.visible = true;
    mush4.visible = true;

    olv1.visible = true;
    olv2.visible = true;
    olv3.visible = true;
    olv4.visible = true;
    olv6.visible = true;
    olv7.visible = true;
    olv8.visible = true;
    olv9.visible = true;

    oni1.visible = true;
    oni2.visible = true;
    oni3.visible = true;
    oni4.visible = true;
    oni5.visible = true;
    oni6.visible = true;
    oni7.visible = true;
    oni8.visible = true;
    
    dough.visible = true;
    
    if(show === 1){
      done.visible = true;
    }
    

    if(timer > 3){
      dough.changeAnimation("still", baseStillAni);
      

    }

    if(mousePressedOver(tom1)){
      tomatoSel = 1
      cheeseSel = 0
      mushSel = 0
      sauceSel = 0
      capsicumSel = 0
      peproSel = 0
      olvSel = 0
      //console.log(tomatoSel)
    }
    if(tomatoSel === 1 && mousePressedOver(dough)){
      //console.log("working")
      //pos1 = mouseX;
      //pos2 = mouseY;
      
      /*tomato[i] = createSprite(pos1, pos2, 20, 20)
      tomato[i].addImage(tomatoIMG);
      tomato[i].depth = 10;
      i = i + 1;*/
        
      //image(tomatoIMG, pos1, pos2);

      tomato = createSprite(515, 525, 10, 20);
      tomato.addImage(tomatoIMG);
      tomato.scale = 0.4
      tomato.x = mouseX
      tomato.y = mouseY
      t = 1;

    } 

    if(mousePressedOver(cheese)){
      cheeseSel = 1
      tomatoSel = 0
      sauceSel = 0
      mushSel = 0
      capsicumSel = 0
      peproSel = 0
      olvSel = 0
      oniSel = 0
      
    }
    if(cheeseSel === 1 && mousePressedOver(dough)){
      gratedCheese = createSprite(515, 525, 10, 20);
      gratedCheese.addImage(cheeseIMG);
      gratedCheese.scale = 0.4
      gratedCheese.x = mouseX
      gratedCheese.y = mouseY
      show = 1;
      ch = 1;

    }

    if(mousePressedOver(cap1)){
      cheeseSel = 0
      tomatoSel = 0
      capsicumSel = 1
      sauceSel = 0
      mushSel = 0
      peproSel = 0
      olvSel = 0
      oniSel = 0
    }
    if(capsicumSel === 1 && mousePressedOver(dough)){
      capsicum = createSprite(515, 525, 10, 20);
      capsicum.addImage(capsicumIMG);
      capsicum.scale = 0.4
      capsicum.x = mouseX
      capsicum.y = mouseY
      c = 1;

    }

    if(mousePressedOver(sauce)){
      cheeseSel = 0
      tomatoSel = 0
      capsicumSel = 0
      sauceSel = 1
      mushSel = 0
      peproSel = 0
      olvSel = 0
      oniSel = 0
    }
    if(sauceSel === 1 && mousePressedOver(dough)){
      sauces = createSprite(515, 525, 10, 20);
      sauces.addImage(sauceIMG);
      sauces.scale = 0.4
      sauces.x = mouseX   
      sauces.y = mouseY
      
  

    }

    if(mousePressedOver(mush1)){
      cheeseSel = 0
      tomatoSel = 0
      capsicumSel = 0
      sauceSel = 0
      mushSel = 1
      peproSel = 0
      olvSel = 0
      oniSel = 0


    }
    if(mushSel === 1 && mousePressedOver(dough)){
      mushroom = createSprite(515, 525, 10, 20);
      mushroom.addImage(mushroomIMG);
      mushroom.scale = 0.3
      mushroom.x = mouseX
      mushroom.y = mouseY
      m = 1;

    }

    if(mousePressedOver(pepro)){
      cheeseSel = 0
      tomatoSel = 0
      sauceSel = 0
      mushSel = 0
      capsicumSel = 0
      peproSel = 1
      olvSel = 0
      oniSel = 0
      
    }
    if(peproSel === 1 && mousePressedOver(dough)){
      peproni = createSprite(515, 525, 10, 20);
      peproni.addImage(pepIMG);
      peproni.scale = 0.2
      peproni.x = mouseX
      peproni.y = mouseY 
      p = 1;

    }

    if(mousePressedOver(olv1)){
      cheeseSel = 0
      tomatoSel = 0
      sauceSel = 0
      mushSel = 0
      capsicumSel = 0
      peproSel = 0
      olvSel = 1
      oniSel = 0
      
    }
    if(olvSel === 1 && mousePressedOver(dough)){
      olv = createSprite(515, 525, 10, 20);
      olv.addImage(olvIMG);
      olv.scale = 0.2
      olv.x = mouseX
      olv.y = mouseY 
      ov = 1;

    }

    if(mousePressedOver(oni1)){
      cheeseSel = 0
      tomatoSel = 0
      sauceSel = 0
      mushSel = 0
      capsicumSel = 0
      peproSel = 0
      olvSel = 0
      oniSel = 1
      
    }
    if(oniSel === 1 && mousePressedOver(dough)){
      oni = createSprite(515, 525, 10, 20);
      oni.addImage(OniIMG);
      oni.scale = 0.2
      oni.x = mouseX
      oni.y = mouseY 
      o = 1;

    }
    
  }

  if(mousePressedOver(done)){
    gameState = "Final";
  }

  if (gameState === "Final"){
    tom1.visible = false;
    tom2.visible = false;
    tom3.visible = false;
    tom4.visible = false;

    cap1.visible = false;
    cap2.visible = false;
    cap3.visible = false;
    cap4.visible = false;

    mush1.visible = false;
    mush2.visible = false;
    mush3.visible = false;
    mush4.visible = false;

    olv1.visible = false;
    olv2.visible = false;
    olv3.visible = false;
    olv4.visible = false;
    olv6.visible = false;
    olv7.visible = false;
    olv8.visible = false;
    olv9.visible = false;

    oni1.visible = false;
    oni2.visible = false;
    oni3.visible = false;
    oni4.visible = false;
    oni5.visible = false;
    oni6.visible = false;
    oni7.visible = false;
    oni8.visible = false;

    done.visible = false;
    dough.visible = false;
    

    

    

    pizinit = createSprite(600, 450)
    pizinit.addImage(pizzaBox);
    pizinit.scale = 1.5;

    if(t === 1){
      tomato.visible = false;

    }



    if(t === 1 && o === 1
      
      ||

      t === 1 && ov === 1
      
      ||

      t === 1 && m === 1

      ||

      t === 1 && c === 1

      ||

      t === 1 && p === 1
      
      ||
      
      o === 1 && t === 1
      
      ||
      
      o === 1 && ov === 1
      
      ||
      
      o === 1 && m === 1
      
      ||
      
      o === 1 && c === 1
      
      ||
      
      o === 1 && p === 1
      
      ||
      
      ov === 1 && o === 1
      
      ||
      
      ov === 1 && t === 1
      
      ||
      
      ov === 1 && m === 1
      
      ||
      
      ov === 1 && c === 1
      
      ||
      
      ov === 1 && p === 1
      
      ||
      
      m === 1 && o === 1
      
      ||
      
      m === 1 && ov === 1
      
      ||
      
      m === 1 && t === 1
      
      ||
      
      m === 1 && c === 1
      
      ||
      
      m === 1 && p === 1
      
      ||
      
      c === 1 && o === 1
      
      ||
      
      c === 1 && ov === 1
      
      ||
      
      c === 1 && m === 1
      
      ||
      
      c === 1 && t === 1
      
      ||
      
      c === 1 && p === 1
      
      ||
      
      p === 1 && o === 1
      
      ||
      
      p === 1 && ov === 1
      
      ||
      
      p === 1 && m === 1
      
      ||
      
      p === 1 && c === 1
      
      ||
      
      p === 1 && t === 1)
    {
      etiza = createSprite(600,430);
      etiza.addImage(ETpizza)
      etiza.scale = 1.2;
    }

    else if(p === 1){
      pepiza = createSprite(600,450);
      pepiza.addImage(EPpizza)
      pepiza.scale = 0.3;
    }
    
    else if(t === 1){
      tpiza = createSprite(600,450);
      tpiza.addImage(tpizza)
      tpiza.scale = 1.5;
    }

    else if(o === 1){
      opiza = createSprite(600,450);
      opiza.addImage(opizza)
      opiza.scale = 1.8;
    }

    else if(ov === 1){
      ovpiza = createSprite(600,450);
      ovpiza.addImage(ovpizza)
      ovpiza.scale = 1.8;
      olv.destroy;
    }

    else if(m === 1){
      mpiza = createSprite(600,450);
      mpiza.addImage(mpizza)
      mpiza.scale = 1.5;
    }

    else if(c === 1){
      cpiza = createSprite(600,450);
      cpiza.addImage(cpizza)
      cpiza.scale = 1.3;
    }
    else if(ch === 1){
      chpiza = createSprite(600,450);
      chpiza.addImage(chpizza)
      chpiza.scale = 1.3;
    }
    

    

    push();
      textSize(70);
      fill("black");
      textFont("Lucida Handwriting")
      text("your pizza is ready", 250, 750)
    pop();
    

   }

  
  drawSprites();

  
  
}