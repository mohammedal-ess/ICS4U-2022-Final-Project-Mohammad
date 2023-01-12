/* global Phaser */

// Copyright (c) 2023 mohammed al-essawi All right reserved 
//
// Created by : mohammed al-essawi 
// Created on : Jan 2023 
// This is  title scene 

class Titlescene extends Phaser.Scene {
  constructor () {
    super({key: 'titleScene'})

  this.titleSceneBackgroundImage = null
  this.titleSceneText = null 
  this.titleSceneTextStyle = { font: '200px Times', fill: '#fde4b9', align: 'center' }
  }
  
init (data) {
  this.cameras.main.setBackgroundColor('#ffffff')
}

preload () {
  console.log('Title Scene')
  this.load.image('titleSceneBackground', 'asset/aliens_screen_image.jpg')
}

create (data) {  
    this.titleSceneBackgroundImage = this.add.sprite(0, 0, 'titleSceneBackground')
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

  this/titleSceneText = this.add.text(1920 / 2, (1080/ 2) + 350, 'Space Aliens', 
  this.titleSceneTextStyle).setOrigin(0.5)
}

 update (time, delta) {  
 }
}

export default Titlescene