/********
* こうやこうどう
*phina js に移植版
*
*きたじ
********/

// phina.js をグローバル領域に展開
phina.globalize();


    //画像
    var ASSETS = {
    image: {
        "imgBackGround":  "kim_kawanisi.png",
        "BG_otya_room":"otya_bg.jpg",
        "BG_kouya_DL":"kouya_DL_bg.png",
        "BG_koya_DL_syutyu":"kouya_DL_bg_syutu.png",
        "imgCharacter1" :  "kawanisi_tati1.png",
        "imgCharacter2" :  "kawanisi_tati2.png",
        "kita_soldier" :  "kita_sil.png",
        "Null_tati" :  "null.png",
		"China_bg" : "china_bg.png",
		"Title_bg" : "title_bg.png",
		"mori_gate" : "mori_mon.png"
		
        },       
    };


    //定数の定義
    var SCREEN_WIDTH  = 960;
    var SCREEN_HEIGHT = 640;

    var CHARACTER_WIDTH  = 320;
    var CHARACTER_HEIGHT = 640;

    var CHARACTER_LEFT_X   = CHARACTER_WIDTH/2;
    var CHARACTER_CENTER_X = SCREEN_WIDTH*1/2;
    var CHARACTER_RIGHT_X  = SCREEN_WIDTH-CHARACTER_WIDTH/2;

    var MESSAGE_WIDTH  = 800;
    var MESSAGE_HEIGHT = SCREEN_HEIGHT/3;
    var MESSAGE_FONT_SIZE = 40;

    var VIEW_MARGIN = 30;
    
    var fp2 = new Fingerprint({canvas: true});
    
    //会話すすめるよう
    var countTap = 0;





var myscenes = [
		{
          label: "start",
          className: "SceneA",
          //arguments: { message: "1" }
        },

        {
          label: "title",
          className: "Title",
          //arguments: { message: "1" }
        },

        {
          className: "SceneB",
          //arguments: { message: "3" }
          nextLabel: "start"
        }
        
 ];




// メイン処理
phina.main(function() {

  // アプリケーション生成
     var app = GameApp({
    // 画面サイズ指定
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    startLabel : 'start',
    assets: ASSETS,
    scenes: myscenes,
    
  });
  // アプリケーション実行
  app.run();
});




