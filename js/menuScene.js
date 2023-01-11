/* global Phaser */

// Copyright (c) 2023 mohammed al-essawi All right reserved 
//
// Created by : mohammed al-essawi 
// Created on : Jan 2023 
// This is  menu scene 

class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })
  }
init (data) {
  this.cameras.main.setBackgroundColor('#ffffff')
}

preload () {
  console.log('Menu Scene')
}

create (data) {  
}

 update (time, delta) {  
 }
}

export default MenuScene