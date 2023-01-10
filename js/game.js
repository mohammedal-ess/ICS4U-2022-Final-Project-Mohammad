/* global Phaser */

// Copyright (c) 2022 mohammed al-essawi All rights reserved
//
// Created by: mohammed al-essawi
// Created on: Dec 2022
// This is the phaser3 configuration file

import splashScene from './splashScene.js'

// Our game scene 
const splashScene = new SplashScene()
//* Game scene */
const config = {
  type: Phaser.Auto,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  //set backgroundColor
  backgroundColor: 0x5f6e7a,
  scale:{
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)


// load scenes 
// NOTE: remember any "key" is global and CAN NOT be reused!
game.scene.add('splashScene', splashScene)

// start title
game.scene.start('splashScene')

