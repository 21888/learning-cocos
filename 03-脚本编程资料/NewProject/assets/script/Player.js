// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        cc.log("start by player.js")

        // this.node.active = false
        let canvasNode = cc.find("Canvas")

        // this.node.parent = canvasNode;
        // 改变父节点
        // this.node.removeFromParent(false);
        // canvasNode.addChild(this.node);

        // this.node.x = 100;
        // this.node.y = 100;

        // this.node.setPosition(100, 100);

        // this.node.setRotation(45);

        // this.node.scaleX = 2

        // this.node.setContentSize(200, 100)

        // this.node.anchorX = 1

        // this.node.color = cc.Color.RED;

        // this.node.opacity = 100

        setTimeout(function () {
            this.node.destroy()
        }.bind(this),5000)

    },

    fire() {
        cc.log("开炮!Q")
    }

    // update (dt) {},
});
