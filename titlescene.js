/* global Phaser */

// Copyright (c) 2023 mohammed al-essawi All right reserved 
//
// Created by : mohammed al-essawi 
// Created on : Jan 2023 
// This is  title scene 

class Titlescene extends Phaser.scene {
  constructor () {
    super({key: 'titleScene'})
  }
init (data) {
  this.cameras.main.setBackgroundColor('#ffffff')
}

preload () {
  console.log('Title Scene')
}

create (data) {  
}

 update (time, delta) {  
 }
}

export default Titlescene
