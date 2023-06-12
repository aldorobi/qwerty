class FreeLife{
    constructor(x,y,w,h){
        let Atr = {isStatic : true}


    

    this.body = elementos.rectangle(x,y,w,h,Atr)
    this.w = w
    this.h = h
    mundo.add(mundolet, this.body)
    
    }

    m_mayuscula(){
        var bar = this.body.position
        push()
        stroke("lightpink")
        fill('violet')
        rect(bar.x,bar.y,this.w,this.h)
        pop()
        

    }

}
