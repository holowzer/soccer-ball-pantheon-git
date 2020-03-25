import * as THREE from 'three'


class StoneBuild{
    constructor(scene,xpos,ypos,zpos,stoneSize){
       
        const floatingSphere= new THREE.DodecahedronGeometry(4,1)
        const floatingStone= new THREE.DodecahedronGeometry(4,0)
        const stoneMaterial = new THREE.MeshLambertMaterial({color : 0x421407})
        this.scene=scene
        this.stone=new THREE.Mesh(floatingStone,stoneMaterial)
        this.sphere=new THREE.Mesh(floatingStone,stoneMaterial)
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
                this.stone.position.x=xpos
                this.stone.position.y=ypos
                this.stone.position.z=zpos
                this.stone.scale.set(stoneSize,stoneSize,stoneSize)
                this.scene.add(this.stone)
                console.log("stone created")
    
            }
    }
    }
    
    
export default StoneBuild

// sphere1.position.x=-16*spaceRatio
// sphere1.position.z=10
// sphere1.scale.set(0.6,0.6,0.6)
// scene.add(sphere4)