var audio = {    
  init: function() {        
  var $that = this;        
      $(function() {            
          $that.components.media();        
      });    
  },
  components: {        
      media: function(target) {            
          var media = $('audio.fc-media', (target !== undefined) ? target : 'body');            
          if (media.length) {                
              media.mediaelementplayer({                    
                  audioHeight: 60,
                  features : ['playpause', 'current', 'duration', 'progress', 'volume', 'tracks', 'fullscreen'],
                  alwaysShowControls: true,
                  timeAndDurationSeparator: '<span></span>',
                  loop: true,
                  //iPadUseNativeControls: true, Was in original code, made it look bad on mobile
                  //iPhoneUseNativeControls: true,
                  //AndroidUseNativeControls: true             
              });            
          }        
      },   
   },
};

audio.init();