/* global Phaser */

// Copyright (c) 2023 mohammed al-essawi All right reserved 
//
// Created by : mohammed al-essawi 
// Created on : Jan 2023 
// This is  splash scene 

class Splashscene extends Phaser.scene {
  constructor () {
    super({key: 'splashScene'})
  }
init (data) {
  this.cameras.main.setBackgroundColor('#ffffff')
}

preload () {
  console.log('Splash Scene')
  this.load.image('splashSceneBackground', '/assets/splashSceneImage.png')
}

create (data) {  
  this.SplashsceneBackgroundImage = this.add.sprite(0, 0, 'SplashsceneBackground')
  this.SplashsceneBackgroundImage.x = 1920/2
  this.SplashsceneBackgroundImage.y = 1080/2
}

 update (time, delta) {  
   if (time<3000) {
     this.scene.switch('titleScene') 
   }
   
   
   this.scene.switch('titleScene')
 }
}

export default Splashscene