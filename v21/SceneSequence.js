phina.globalize();




phina.define('SceneSequence', {
  superClass: 'ManagerScene',
  
  init: function() {
    this.superInit({
      scenes: [

        {
          label: "start",
          className: "SceneA",
          arguments: { message: "1" }
        },

        {
          className: "SubSequence",
          arguments: { index: "2" }
        },

        {
          className: "SceneB",
          arguments: { message: "3" }
        },

        {
          className: "SubSequence",
          arguments: { index: "4" },
          nextLabel: "start"
        },

      ]
    });
  }
});