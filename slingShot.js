class SlingShot{
    constructor(bodyA, pB){
        var options = {
            bodyA: bodyA,
            pointB: pB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
            var posA = this.sling.bodyA.position;
            var posB = this.pointB;
            strokeWeight(4);
            line(posA.x, posA.y, posB.x, posB.y);
        }
        
    }

    fly(){
        this.sling.bodyA = null;
    }
    
}