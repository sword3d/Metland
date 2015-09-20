;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.scrollContent.init();

		},

		windowLoad: function(){

			var self = this;

			// self.NameFunction();
			self.scrollContent.init();

		},

		windowScroll: function(){

			var self = this;
			
			// self.NameFunction();
		},

		/**
		**	Scroll Contant
		**/

		scrollContent :{

		    init : function(){

		    	var self = this;

				self.w = $(window);
				self.d = $(document);
				self.scrolUp;

				self.heightSlid();
				self.sticky();
				self.activeSlide();
				self.nextButton();
				self.navigation();

				self.w.on('resize', function(){

					self.heightSlid();

				});

				self.d.on('scroll',function(){

					self.sticky();
					self.activeSlide();

				});

		    },

		    heightSlid : function(){

				var self = this;

				$('.section_content').height(self.w.height());		    	

		    },

		    sticky :function(){

		    	var self = this;

		    	$(".section_content").each(function(){

		    		var $this = $(this),
		    			text = $(this).next().attr("data-text"),
		    			windowScroll = self.d.scrollTop(),
		    			offset = $this.offset().top;

		    		if(windowScroll >= offset){
		    			
		    			$this.find(".section_content_inner").addClass("sticky_fixed");
		    		}
		    		else{
		    			
		    			$this.find(".section_content_inner").removeClass("sticky_fixed");
		    		
		    		}
		    	
		    	});
		    
		    },

		    nextButton : function(){

		    	var self = this;

		    	$("#next_slide").on("click",function(){

		    		var activSlide = $(".section_content.active"),
		    			scrollTop = activSlide.next().offset().top;

		    		$('html,body').stop().animate( { scrollTop: scrollTop }, 1000 );

		    	});

		    },

		    activeSlide : function(){

		    	var self = this;

		    	$(".section_content").each(function(){

		    		var $this = $(this),
		    			text = $this.next().attr("data-text"),
		    			windowScroll = self.d.scrollTop(),
		    			windowHeight = self.w.height(),
		    			offset = $this.offset().top;

		    		if(windowScroll + windowHeight / 2>= offset){

		    			$this.addClass("active").siblings().removeClass("active");

		    			$("#next_slide").find("p").text(text);
		    		}
		    		else{

		    			$this.removeClass("active");
		    			
		    		}

		    	});

		    	setTimeout(function(){

			    	var id = $(".section_content.active").attr("id");

			    	$("#navigation>li[data-id='"+id+"']").addClass("current").siblings().removeClass("current");
/* ------------------------------------------------
				ADD LOGO BOX
		------------------------------------------------ */
			    	var id = $(".section_content.active").attr("id");

			    	$("#logo>div[data-id2='"+id+"']").addClass("current2").siblings().removeClass("current2");
/* ------------------------------------------------
				ADD LOGO BOX
		------------------------------------------------ */		    	
		    	},1000);

		    


		    },

		    navigation : function(){

		    	var self = this;

		    	$("#navigation>li").on("click",function(){

		    		var id = $(this).attr("data-id"),
		    			offset = $("#"+id).offset().top;

		    		$('html,body').stop().animate( { scrollTop: offset }, 1000 );

		    	});
		    },

		}

		


	}


	$(function(){

		Core.DOMReady();

	});

	$(window).load(function(){

		Core.windowLoad();

	});

	$(window).scroll(function(){

		Core.windowScroll();
		
	});


})(jQuery);