app.scene.camera={
	init:function(){
		 app.settings.camera = new THREE.PerspectiveCamera(
            35,             // Field of view
            window.innerWidth/window.innerHeight ,      // Aspect ratio
            0.1,            // Near plane
            20000           // Far plane
        );
        app.settings.camera.position.set(1500, 1500, 1500 );
        

        // Orbit control
        app.settings.controls = new THREE.OrbitControls( app.settings.camera, app.settings.renderer.domElement );
	}
}