var player, runner
var image1, image2

function preload () {

//image1 = loadImage (images/punis)
image2 = loadImage ("images/Aladdinsheet1.jgp,Aladdinsheet2.jpg,Aladdinsheet3.jpg")

  
}






function setup () {

createCanvas (1200,600)

player = createSprite (400,400)
runner = createSprite (800,400)

runner.addAnimation ("robot",image2)






}



function draw () {
















drawSprites()
}