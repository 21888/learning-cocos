// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var Player = require("Player")

cc.Class({
    extends: cc.Component,

    properties: {
        player: {
            default: null,
            type: Player
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        let player = this.player;
        cc.log(player)

        player.fire()

    },

    // update (dt) {},
});
