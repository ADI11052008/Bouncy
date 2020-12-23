var ball;
var database ,position

function setup(){
    createCanvas(500,500);
    database= firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
  var ball_position= database.ref('ball/position')
  ball_position.on("value",read_position,show_error)  
}
function read_position(data) {
    position=data.val()
    ball.x=position.x
    ball.y=position.y
}
function show_error() {
    console.log ("the code is invalid")
}
function write_position(x,y) {
    database.ref('ball/position').set ({
        'x':x+position.x,
        'y':y+position.y
    })
}
function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        write_position(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        write_position(1,0);
    }
    else if(keyDown(UP_ARROW)){
        write_position(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        write_position(0,+1);
    }
    drawSprites();
}

