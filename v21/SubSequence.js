phina.globalize();


phina.define('SubSequence', {
  superClass: 'ManagerScene',
  
  init: function(params) {
    this.superInit({
      scenes: [

        {
          className: "SceneB",
          arguments: { message: params.index + "-1" }
        },

        {
          className: "SceneA",
          arguments: { message: params.index + "-2" }
        }

      ]
    });
  },
  onfinish: function() {
    this.exit();
  }
});