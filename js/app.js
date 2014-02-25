app={
	init:function(){
		this.setListener();
		this.scene.init();
		this.scene.camera.init();
		this.scene.light.init();
		this.scene.elems.init();
		this.scene.stage.init();
		this.scene.engine.init();

	},
	onKeyDown:function(event){
		app.settings.kdown=true;
		switch ( event.keyCode ) {
			case 38: // haut
				app.settings.up=true;	
				break;
			case 39: // droite
				app.settings.droite=true;	
				break;
			case 40: // bas
				app.settings.down=true;	
				break;
			case 37: // gauche
				app.settings.gauche=true;	
				break;
		}
	},
	onKeyUp:function(event){
		switch ( event.keyCode ) {
			case 38: // haut
				app.settings.up=false;	
				break;
			case 39: // droite
				app.settings.droite=false;	
				break;
			case 40: // bas
				app.settings.down=false;	
				break;
			case 37: // gauche
				app.settings.gauche=false;	
				break;
		}
		if (!app.settings.up && !app.settings.droite && !app.settings.down && !app.settings.gauche) {
			app.settings.kdown=false;
		};
	},
	setListener:function(){
		document.addEventListener( 'keydown', app.onKeyDown, false );
		document.addEventListener( 'keyup', app.onKeyUp, false );
	},
}