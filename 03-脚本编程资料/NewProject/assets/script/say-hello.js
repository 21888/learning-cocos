// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

let Sprite = cc.Class({
    name: "sprite",
    print: function () {
        cc.log("print function")
    }
})
let SpriteSon = cc.Class({
    extends: Sprite
})
cc.Class({
    extends: cc.Component,

    properties: {
        // height: 20, // number
        // type: [cc.String], // string
        // loaded: [cc.Boolean], // boolean
        // target: [cc.Node], // object
        score: {
            default: null,
            type: cc.Node,
            displayName: "得分",
            tooltip: "描述得分数",
            visible: false
        },
        name: {
            default: [],
            type: [cc.String]
        },
        target: {
            default: null,
            type: cc.Prefab
        },
        sprite_frame: {
            default: null,
            type: cc.SpriteFrame
        }
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

    onLoad() {
        cc.log("onLoad ...")
        // let sprite = this.node.getComponent(cc.Sprite);
        // sprite.spriteFrame = this.sprite_frame

        let self = this;
        // cc.loader.loadRes("Player", cc.Prefab, function (err, prefab) {
        //     let newNode = cc.instantiate(prefab);
        //     newNode.setPosition(100, 100);
        //     self.node.addChild(newNode)
        // })

        // cc.loader.releaseRes("Player")


    },
    onEnable() {
        cc.log("onEnable ...")
    },
    start() {
        // cc.log("start ... ")
        cc.log("start by say-hello.js")

        // cc.log("hello world!")
        //
        // let sprite = new Sprite();
        // cc.log(sprite)
        // sprite.print()
        //
        //
        // let spriteSon = new SpriteSon();
        // spriteSon.print()

        // 关闭节点
        // this.node.active = false

        // 销毁节点
        // this.node.destroy()

        let children = this.node.children;
        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            cc.log("子节点: ", child.name)
        }

        // 查找单个子节点
        let childByName = this.node.getChildByName("Cannon");
        cc.log("单个子节点: ", childByName.name)

        // cc.find 可以按层级查找子节点
        let subNode = cc.find("Cannon/Sub", this.node);
        cc.log("cc.find 查找子节点", subNode.name)

        let cannonNode = cc.find("Canvas/Hello/Cannon");
        cc.log("绝对路径: ", cannonNode.name)

        // 关闭Player节点
        // let playerNode = this.node.getChildByName("Player");
        // playerNode.active = false

        // 返回当前节点的子节点数量
        let childrenCount = this.node.childrenCount;
        cc.log("当前的子节点数量: ", childrenCount)

        let self = this;
        // 通过代码的方式创建一个新节点
        // cc.loader.loadRes("sheep", cc.SpriteFrame, function (err, spriteFrame) {
        //     let node = new cc.Node("sprite");
        //     let sp = node.addComponent(cc.Sprite);
        //     sp.spriteFrame = spriteFrame
        //     node.parent = self.node
        //     node.setContentSize(100, 100)
        // })

        // 复制/克隆一个节点
        // let targetNode = cc.instantiate(this.target);
        // targetNode.parent = this.node
        // targetNode.setPosition(0,0)
        // targetNode.setScale(1.5)

        // setTimeout(function () {
        //     cc.director.loadScene("MyScene")
        // }.bind(this))


    },


    // update(dt) {
    //     // cc.log(dt)
    //     this.node.y += 1;
    // },
    // lateUpdate(dt){
    //     this.node.rotation+=20;
    // },
    onDisable() {
        cc.log("onDisable ...")
    },
    onDestroy() {
        cc.log("onDestroy ...")
    }

});
