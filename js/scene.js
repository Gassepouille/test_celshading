app.scene={
	init:function(){
		this.setScene();
		this.setRenderer();
		// Resize de la scene
		$( window ).resize(function() {
		  app.scene.setSizeScene();
		});
	},
	setScene:function(){
		app.settings.scene = new THREE.Scene();
	},
	setRenderer:function(){
		app.settings.renderer = new THREE.WebGLRenderer({ antialias: true });
		app.settings.renderer.physicallyBasedShading = true;
		app.settings.renderer.setClearColor( 0xffffff, 1 );
        this.setSizeScene();
        document.body.appendChild(app.settings.renderer.domElement);
	},
	setSizeScene:function(){
		app.settings.renderer.setSize( window.innerWidth, window.innerHeight-10 );
	},
}