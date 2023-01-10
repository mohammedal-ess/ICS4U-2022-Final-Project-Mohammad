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
}

create (data) {  
}

 update (time, delta) {  
 }
}

export default Splashscene