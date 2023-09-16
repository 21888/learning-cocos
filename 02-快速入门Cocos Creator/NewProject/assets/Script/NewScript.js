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

  onLoad () {
    // this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
    //   console.log('Touch start1112');
    //   cc.log("Touch start 111");
    // }, this);
    /*cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, (event) => {
      cc.log("键盘按下: " + event.keyCode);
      switch (event.keyCode){
        case cc.macro.KEY.space:{
          cc.log("按下空格键")
        }
      }
    },this)*/
    // 接受emit触发
    // this.node.on("fire",function (msg) {
    //   cc.log("监听自定义事件!","fire",msg)
    // },this)

    // 接受dispatchEvent
    this.node.on("remoteFire",function (msg) {
      cc.log("监听自定义事件!","remoteFire",msg)
    })
  },


  start () {
  },

  update (dt) {
    // this.node.emit("fire","开火!")
    let msgForDipatchEvent = new cc.Event.EventCustom("remoteFire",true);
    msgForDipatchEvent.detail="远程开火!"
    this.node.dispatchEvent(msgForDipatchEvent);

  },
});
