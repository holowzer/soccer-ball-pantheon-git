import * as THREE from 'three'


class StoneBuild{
    constructor(scene,xpos,ypos,zpos,stoneSize,color){
       
        const floatingSphere= new THREE.DodecahedronGeometry(4,2)
        const floatingStone= new THREE.DodecahedronGeometry(4,0)
        this.color=color
        const customMaterial = new THREE.MeshLambertMaterial({color : color})
        this.scene=scene
        this.stone=new THREE.Mesh(floatingStone,customMaterial)
        this.sphere=new THREE.Mesh(floatingSphere,customMaterial)
        this.xpos=xpos
        
        this.ypos=ypos
        this.zpos=zpos
        this.stoneSize=stoneSize
    
            this.createStone=()=>{
                this.stone.position.x=xpos
                this.stone.position.y=ypos
                this.stone.position.z=zpos
                this.stone.scale.set(stoneSize,stoneSize,stoneSize)
                this.scene.add(this.stone)
                console.log("stone created")
    
            }
            this.createSphere=()=>{
                this.sphere.position.x=xpos
                this.sphere.position.y=ypos
                this.sphere.position.z=zpos
                this.sphere.scale.set(stoneSize,stoneSize,stoneSize)
                this.scene.add(this.sphere)
                console.log("sphere created")
    
            }
    }
    }
    
    
export default StoneBuild

// sphere1.position.x=-16*spaceRatio
// sphere1.position.z=10
// sphere1.scale.set(0.6,0.6,0.6)
// scene.add(sphere4)