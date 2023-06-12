const motorbase = Matter.Engine
const mundo = Matter.World
const elementos = Matter.Bodies
const cuerpos = Matter.Body

let motorfisico
let mundolet

var sueloton
var derechotron
var izquierdon
var OptimusTecho

var Peloton
//var Peloton2

var olap
var palo

function setup(){
    createCanvas(600,400)
    motorfisico = motorbase.create()
    mundolet = motorfisico.world
    sueloton = new FreeLife(300,395,600,10)
    derechotron = new FreeLife(595,200,10,400)    
    izquierdon = new FreeLife(5,200,10,400)
    OptimusTecho = new FreeLife(300,5,600,10)

     palo = new FreeLife(540,350,10,560)    
     olap = new FreeLife(470,350,10,400)

    var peloton = {restitution: 0, frictionAir: 0.015}
    Peloton = elementos.circle(200,100,20,peloton)
    mundo.add(mundolet,Peloton)

//    var peloton2 = {restitution: 0.80, frictionAir: 0.010}
//    Peloton2 = elementos.circle(100,100,20,peloton2)
//    mundo.add(mundolet,Peloton2)

    rectMode(CENTER)
    ellipseMode(RADIUS)
  
}

function draw(){
    background("cyan")
    motorbase.update(motorfisico)
    sueloton.m_mayuscula()
    izquierdon.m_mayuscula()
    derechotron.m_mayuscula()
    OptimusTecho.m_mayuscula()

     palo.m_mayuscula()
     olap.m_mayuscula()
    
    stroke("purple")
        fill('red')
    ellipse(Peloton.position.x,Peloton.position.y,20)

//    stroke("purple")
//        fill('yellow')
//    ellipse(Peloton2.position.x,Peloton2.position.y,20)

}
 function keyPressed(){
    if (keyCode == UP_ARROW){
        Matter.Body.applyForce(Peloton,{x:0,y:0},{x:0,y:-0.015})
    }

    if (keyCode == RIGHT_ARROW){
        Matter.Body.applyForce(Peloton,{x:0,y:0},{x:0.02,y:0})
    }

    if (keyCode == LEFT_ARROW){
        Matter.Body.applyForce(Peloton,{x:0,y:0},{x:-0.02,y:0})
    }
    
    if (keyCode == DOWN_ARROW){
        Matter.Body.applyForce(Peloton,{x:0,y:0},{x:0,y:0.02})
    }

    
}

//function keyPressed(){
//    if (keyCode == 119){
//        Matter.Body.applyForce(Peloton2,{x:0,y:0},{x:0,y:-0.02})
//    }
//
//    if (keyCode == 100){
//        Matter.Body.applyForce(Peloton2,{x:0,y:0},{x:0.02,y:0})
//    }
//
//    if (keyCode == 97){
//        Matter.Body.applyForce(Peloton2,{x:0,y:0},{x:-0.02,y:0})
//    }
//    
//    if (keyCode == 115){
//        Matter.Body.applyForce(Peloton2,{x:0,y:0},{x:0,y:0.02})
//    }
//
//    
//}



