phina.globalize();

  

phina.define('SceneA', {
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
            
    //this.backgroundColor = "skyblue";
     // 背景
    var imgBackGround = Sprite('imgBackGround' ,SCREEN_WIDTH, SCREEN_HEIGHT).addChildTo(imgBackColor);
               
    //立ち絵
    var imgCharaCenter = Sprite("imgCharacter1", CHARACTER_WIDTH, CHARACTER_HEIGHT).addChildTo(this)
            .setPosition(CHARACTER_CENTER_X, SCREEN_HEIGHT/2+VIEW_MARGIN);               
 
 //メッセージウィンドウ
   var imgMessageWindow = RectangleShape({
   					width: MESSAGE_WIDTH,
   					height:  MESSAGE_HEIGHT,
   					cornerRadius:10,
                    fill: "#337733",
                    //stroke: "#003300",
                    shadow:"black",
                    lineWidth: 3                                       
      }).addChildTo(this);
    imgMessageWindow.setPosition(SCREEN_WIDTH/2, SCREEN_HEIGHT-imgMessageWindow.height/2-VIEW_MARGIN);
    imgMessageWindow.alpha= 0.5;
    

            
            
    //メッセージ
     var lblMessage = Label( "あ゛～あ…\nイカ臭いFPSも正直飽きたわ\nもう俺ランクS+だしなぁ…" );
     //lblMessage.setPosition((SCREEN_WIDTH-MESSAGE_WIDTH)/2+VIEW_MARGIN, SCREEN_HEIGHT-imgMessageWindow.height+VIEW_MARGIN);
     lblMessage.align = "left";
     lblMessage.baseline = "top";
     lblMessage.fill="#ffffff";
     lblMessage.fontSize = MESSAGE_FONT_SIZE;  
            
     //メッセージ用の影
      var lblMessageShadow = Label( lblMessage.text );
      ///lblMessageShadow.setPosition((SCREEN_WIDTH-MESSAGE_WIDTH)/2+VIEW_MARGIN+2, SCREEN_HEIGHT-imgMessageWindow.height+VIEW_MARGIN+2);
       lblMessageShadow.align = "left";
       lblMessageShadow.baseline = "top";
       lblMessageShadow.fill="#111111";
       lblMessageShadow.fontSize = MESSAGE_FONT_SIZE;               
       
       this.addChild(lblMessageShadow).setPosition((SCREEN_WIDTH-MESSAGE_WIDTH)/2+VIEW_MARGIN, SCREEN_HEIGHT-imgMessageWindow.height+VIEW_MARGIN);
       this.addChild(lblMessage).setPosition((SCREEN_WIDTH-MESSAGE_WIDTH)/2+VIEW_MARGIN+2, SCREEN_HEIGHT-imgMessageWindow.height+VIEW_MARGIN+2);
    
    	
    
    //Label("This is SceneA")
      //.setPosition(this.gridX.center(), this.gridY.center())
      //.addChildTo(this);
      
      //タッチイベントゆうこう
      imgMessageWindow.setInteractive(true);
      //タッチイベントとうろく	
      imgMessageWindow.onpointstart = function() {
        
        countTap++;
                
                if( countTap==1 ) {
                    lblMessage.text = ("なんか刺激的なFPSでもやってみっかぁ～");
                    lblMessageShadow.text = (lblMessage.text); 
                    imgCharaCenter.image = ("imgCharacter1");
                }
                
                if( countTap==2 ) {
                    lblMessage.text = ("ん？\nこ○や行動？？");
                    lblMessageShadow.text = (lblMessage.text); 
                    imgCharaCenter.image = ("imgCharacter1");
                }
                
                if( countTap==3 ) {
                    lblMessage.text = ("なにこれ，チョ～面白そ～じゃん！");
                    lblMessageShadow.text = (lblMessage.text); 
                    imgCharaCenter.image = ("imgCharacter1");
                }
                if( countTap==4 ) {
                	
                 	imgBackGround = Sprite("BG_kouya_DL", SCREEN_WIDTH, SCREEN_HEIGHT).addChildTo(imgBackColor);
                    lblMessage.text = ("早速DLっと♡");
                    lblMessageShadow.text = (lblMessage.text); 
                    imgCharaCenter.image = ("imgCharacter2");
                }
                
                if( countTap==5 ) {
                    lblMessage.text = ("さぁプレイだ！\n課金勢の頭をブっ飛ばしてやるぜ！！\n……ん？");
                    lblMessageShadow.text = (lblMessage.text); 
                    imgCharaCenter.image = ("imgCharacter1");
                }
                if( countTap==6 ) {
                	imgBackGround = Sprite("BG_koya_DL_syutyu", SCREEN_WIDTH, SCREEN_HEIGHT).addChildTo(imgBackColor);
                    lblMessage.text = ("えぇッ！が画面がッ！！？\nうゎああああああ"+fp2.get());
                    lblMessageShadow.text = (lblMessage.text); 
                    imgCharaCenter.image = ("imgCharacter2");
                }
                

      };
      
      
      },
  

  
  
  
  update: function(app) {
    if (app.pointer.getPointingEnd()) {
    	if( countTap==7 ) {
                	this.exit();
        }
      //this.exit();
    }
  }
});
