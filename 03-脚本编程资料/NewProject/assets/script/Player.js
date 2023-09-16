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

        // setTimeout(function () {
        //     this.node.destroy()
        // }.bind(this),5000)

        // 开始一个基本移动
        // let action = cc.moveTo(2,100,100);
        // this.node.runAction(action)

        // this.node.stopAction(action)

        // moveBy
        // let action = cc.moveBy(2,100,100);
        // this.node.runAction(action)

        // sequence 序列动作
        // let seq = cc.sequence(cc.moveBy(0.5, 200, 0), cc.moveBy(0.5, -200, 0));
        // this.node.runAction(seq);

        // 同步动作
        // let spawn = cc.spawn(cc.moveBy(0.5, 0, 50), cc.scaleTo(0.5, 0.8, 1.4));
        // this.node.runAction(spawn);

        // 让节点左右来回移动，并重复5次
        // let seq = cc.repeat(
        //     cc.sequence(
        //         cc.moveBy(2, 200, 0),
        //         cc.moveBy(2, -200, 0)
        //     ), 5);
        // this.node.runAction(seq);

        // 让节点左右来回移动并一直重复
        // let seq = cc.repeatForever(
        //     cc.sequence(
        //         cc.moveBy(2, 200, 0),
        //         cc.moveBy(2, -200, 0)
        //     ));
        // this.node.runAction(seq);

        // 通过speed 加速或减速
        // let spawn = cc.spawn(cc.moveBy(2, 0, 50), cc.scaleTo(2, 0.8, 1.4));
        // let seq = cc.sequence(cc.moveBy(2, 200, 0), cc.moveBy(2, -200, 0));
        // let action = cc.speed(seq, 40);
        // this.node.runAction(action);


        let finished = cc.callFunc(function (target, param) {
            cc.log("动作回调", param, target)
        }, this, 666);

        let seq = cc.sequence(cc.moveBy(2, 200, 0), cc.moveBy(2, -200, 0), finished);
        this.node.runAction(seq)
    },

    fire() {
        cc.log("开炮!Q")
    }

    // update (dt) {},
});
