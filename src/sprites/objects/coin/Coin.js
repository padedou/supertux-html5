import Phaser from 'phaser'
import setAnimations from '../../setAnimations'
import configCoin from '../../../config/config.coin.js'

export default class extends Phaser.Sprite {
  constructor (game, x = 0, y = 0, assetKey = 'coin') {
    super(game, x, y, assetKey)

    setAnimations(configCoin.animations, this)
  }
}
