(function($) {
var methods = {
        options:undefined,
        init : function(options) {
            methods.options = $.extend({inline_div:undefined,make_div: false,make_width: '100%'}, options);
            return this.each(function(){
                if(methods.options.make_div===true){
                    $(this).css({'width':methods.options.make_div_width});           
                    if($(this).attr('id')!==undefined){
                        methods.options.inline_div="inline_"+$(this).attr('id');
                    }else{methods.options.inline_div ="inline_"+new Date().getTime();}
                    if(methods.options.inline_div!==undefined && $('#'+methods.options.inline_div).length <= 0){ 
                            $(this).prepend("<div id='"+methods.options.inline_div+"' style='display:inline'></div>");
                    }
                }
                $(this).children("div.ui-radio").each(function(){
                    $(this).css({'float':'left','clear':'none'});
                    if(methods.options.make_div===true && $('#'+methods.options.inline_div).length > 0){$('div#'+methods.options.inline_div).append($(this));}
                    $(this).find(".ui-btn .ui-btn-inner").each(function(){
                        var padding_left=parseInt($(this).css('padding-left'),10);
                        var width_string=($(this).children(".ui-btn-text").width()+1);
                        $(this).children(".ui-btn-text").css({'color':'#222222','text-shadow':'0px 0px'});
                        
                        $(this).width(width_string);
                        $(this).parent(".ui-btn").css({'width':'0px','border-width':'0px'});
                        $(this).parent(".ui-btn").parent("div.ui-radio").width($(this).outerWidth(true));/*console.log("outerWidth:" + $(this).outerWidth()+ " , outerWidth(true):" + $(this).outerWidth(true));*/
                        $(this).parent(".ui-btn").prev().hide();/*$(this).parent(".ui-btn").parent("div.ui-radio").children("input[type='radio']")*/
                        
                    });
                });
            });
          },
        showvars : function( options ) {
         /*.make_browser_radio('showvars',{'qqqw':2,'xxx':6});*/    
          console.log(methods.options);
        }
      };

      $.fn.make_browser_radio = function( method ) {
            // Method calling logic
            if ( methods[method] ) {
              return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
            } else if ( typeof method === 'object' || ! method ) {
              return methods.init.apply( this, arguments );
            } else {
              $.error( 'Method ' +  method + ' does not exist on jQuery.make_browser_radio' );
            }    
          
          };
})(jQuery);
