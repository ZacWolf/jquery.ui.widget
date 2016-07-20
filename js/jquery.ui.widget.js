/*! jquery.ui.widget - v0.1.0 - 2016-07-20
 *
 * Adds draggable, resizable, maximizable, and minimizable windows to your site
 *
 * https://github.com/ZacWolf/jquery.ui.widget
 * Copyright (c) 2014 Zac Morris <zac@zacwolf.com> [http://www.zacwolf.com]
 * Licensed under GPL-3.0
 */

jQuery.widget( "mywidgets.box", {
	mydiv: null
	,id:null
	,options:{	'style':{'width':'640px'
					 	 ,'height':'480px'
						 ,'min-width':'350px'
						 ,'min-height':'200px'
						 ,'padding':'20px'
						 ,'border':'2px solid blue'
						 ,'position':'fixed'
						 ,'top':'50px'
						 ,'left':'50px'
					}
	}
	,_create: 
		function() {
			this.windiv		=	this.element;
			this.windiv.uniqueId();
			this.id			=	this.windiv.attr('id');
var			self			=	this;
			this.windiv.addClass('win');
			jQuery.each(this.options,function(attr,val){
				if (attr.toLowerCase()==="style" && jQuery.type(val)==="object"){
					self.windiv.css(self.options.style);
					self.options.style	=	undefined;
				}
			})
			return this;
		}
	,color:
		function(c){
			this.windiv.css({'background-color':c});
			return this;
		}
});