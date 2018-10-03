phina.globalize();



phina.define('SceneB', {
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
    var imgBackGround = Sprite('China_bg' ,SCREEN_WIDTH, SCREEN_HEIGHT).addChildTo(imgBackColor);
               
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
     var lblMessage = Label( "はぁ？なにこれ??\n こんなファミコンの出来損ないみたいな\nFPSゲームなの?" );
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
                    lblMessage.text = ("いま最も人気のFPSゲームへ歓迎する！\n開始するチュートリアルは今からです．");
                    lblMessageShadow.text = (lblMessage.text); 
                    imgCharaCenter.image = ("kita_soldier");
                }
                
                if( countTap==2 ) {
                    lblMessage.text = ("あぁ，中華ゲームだしなぁ．．．\nおれはもっと刺激的なFPSがしたいぜ．");
                    lblMessageShadow.text = (lblMessage.text); 
                    imgCharaCenter.image = ("imgCharacter1");
                }
                
                if( countTap==3 ) {
					imgBackGround = Sprite("China_bg", SCREEN_WIDTH, SCREEN_HEIGHT).addChildTo(imgBackColor);
                    lblMessage.text = ("この研究室は森沢東主席による\n独裁政治となった．\n平和な情報処理ラボをとりもどせ");
                    lblMessageShadow.text = (lblMessage.text); 
                    imgCharaCenter.image = ("kita_soldier");
                }
				
				if( countTap==4 ) {
                	imgBackGround = Sprite("mori_gate", SCREEN_WIDTH, SCREEN_HEIGHT).addChildTo(imgBackColor);
                    lblMessage.text = ("これをみろ");
                    lblMessageShadow.text = (lblMessage.text); 
                    imgCharaCenter.image = ("Null_tati");
                }
				
				if( countTap==5 ) {
					imgBackGround = Sprite("China_bg", SCREEN_WIDTH, SCREEN_HEIGHT).addChildTo(imgBackColor);
                    lblMessage.text = ("李さん，\n貴方が抹殺するべきです");
                    lblMessageShadow.text = (lblMessage.text); 
                    imgCharaCenter.image = ("kita_soldier");
                }
				
				if( countTap==6 ) {
                	imgBackGround = Sprite("BG_koya_DL_syutyu", SCREEN_WIDTH, SCREEN_HEIGHT).addChildTo(imgBackColor);
                    lblMessage.text = ("ふーん．で，操作どうすんの？");
                    lblMessageShadow.text = (lblMessage.text); 
                    imgCharaCenter.image = ("imgCharacter2");
                }
				
				 if( countTap==7 ) {
					imgBackGround = Sprite("BG_koya_DL_syutyu", SCREEN_WIDTH, SCREEN_HEIGHT).addChildTo(imgBackColor);
                    lblMessage.text = ("最初にアイテムで強化を推奨します．\nこの魔剤を飲用しなさい．");
                    lblMessageShadow.text = (lblMessage.text); 
                    imgCharaCenter.image = ("kita_soldier");
                }
                if( countTap==8 ) {
                	
                 	imgBackGround = Sprite("BG_kouya_DL", SCREEN_WIDTH, SCREEN_HEIGHT).addChildTo(imgBackColor);
                    lblMessage.text = ("ぜってぇパチもんじゃん(ごくごく)");
                    lblMessageShadow.text = (lblMessage.text); 
                    imgCharaCenter.image = ("imgCharacter2");
                }
				
				if( countTap==9 ) {
                	
                 	imgBackGround = Sprite("BG_kouya_DL", SCREEN_WIDTH, SCREEN_HEIGHT).addChildTo(imgBackColor);
                    lblMessage.text = ("ぜってぇパチもんじゃん(ごくごく)");
                    lblMessageShadow.text = (lblMessage.text); 
                    imgCharaCenter.image = ("imgCharacter2");
                }
                
                
        
        
      };
      
      
      },
  

  
  
  
  update: function(app) {
    if (app.pointer.getPointingEnd()) {
    	if( countTap==10 ) {
                	this.exit();
        }
      //this.exit();
    }
  }
});
