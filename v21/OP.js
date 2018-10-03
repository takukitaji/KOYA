phina.globalize();

phina.define('Title', {
	//クラス継承
  superClass: 'DisplayScene',
  
  
  //コンストラクタ
  init: function(option) {
    this.superInit(option);
    
    countTap = 0;
    
    var imgBackColor = RectangleShape({
    				width: SCREEN_WIDTH,
   					height:  SCREEN_HEIGHT,
                    fillStyle: "#ffffff",
                    strokeStyle: "#000000",
                    lineWidth: 0
            }).addChildTo(this);
            imgBackColor.setPosition(SCREEN_WIDTH/2, SCREEN_HEIGHT/2);
            
    //this.backgroundColor = "Black";
	
	// 背景
    var imgBackGround = Sprite('Title_bg' ,SCREEN_WIDTH, SCREEN_HEIGHT).addChildTo(imgBackColor);
	
     var title_label = Label( "スタートするためのクリックなさい!!" ); 
	 title_label.align = "center";
     title_label.baseline = "top";
     title_label.fill="yellow";
     title_label.fontSize = MESSAGE_FONT_SIZE;
	 
	 
	 
	 this.addChild(title_label).setPosition((SCREEN_WIDTH)/2+VIEW_MARGIN, SCREEN_HEIGHT-5*VIEW_MARGIN);
     title_label.update = function(app) {
      // cos波で透明度を変化させてみる
      title_label.alpha = (Math.cos(app.frame*8*Math.PI/180)+1)*0.5;
    }; 
	  
	  },
  
  update: function(app) {
    if (app.pointer.getPointingEnd()) {       
      this.exit();
    }
  }
});
