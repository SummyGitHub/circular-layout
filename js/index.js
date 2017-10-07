window.onload = function () {
  //通用获取dom节点函数
  var $ = function(selector) {
    var _type = selector.substr(0,1);
    if(/./.test(_type)) {
      return document.getElementsByClassName(selector.slice(1,selector.length));
    }else if(/#/.test(_type)) {
      return document.getElementById(selector.slice(1,selector.length));
    }
  }

  var Dot = function (obj) {
    this.setDot(obj);
    this.computBox();
  }
  Dot.prototype.getDot = function() {
    return {x:this.x,y:this.y,r:this.r}
  }
  Dot.prototype.setDot = function(obj) {
    this.x = obj.x;
    this.y = obj.y;
    this.r = obj.r;
  }
  Dot.prototype.computBox = function() {
    var boxs = $('.box');
    //box的left和width
    var deg = 360 / boxs.length;
    var _dot = this.getDot();
    var _x = _dot.x;
    var _y = _dot.y;
    var r = _dot.r;
    var rad = 2 * Math.PI / 360;
    [].forEach.call(boxs,function(box,index){
      box.style.position = 'absolute';
      box.style.left = Math.sin(rad * deg * index) * r + _x + 'px';
      box.style.top = Math.cos(rad * deg * index) * r + _y + 'px';
    })
  }

  //测试
  new Dot({x:200,y:100,r:100});

}