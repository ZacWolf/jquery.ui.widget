/*! jquery.ui.widget - v0.1.0 - 2016-07-20
 *
 * Adds draggable, resizable, maximizable, and minimizable windows to your site
 *
 * https://github.com/ZacWolf/jquery.ui.widget
 * Copyright (c) 2014 Zac Morris <zac@zacwolf.com> [http://www.zacwolf.com]
 * Licensed under GPL-3.0
 */

jQuery.widget( "widgets.window", {
	mydiv: null
	,id:null
	,options:{	'style':{'width':'640px'
					 	 ,'height':'480px'
						 ,'min-width':'350px'
						 ,'min-height':'200px'
					}
	}
	,_create: 
		function() {
		}
});