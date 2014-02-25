app.scene.engine={
	count:0,
	clock:{},
	init:function(){
		
		this.clock = new THREE.Clock();

		 window.requestAnimFrame = (function(){
	      return  window.requestAnimationFrame       || 
	              window.webkitRequestAnimationFrame || 
	              window.mozRequestAnimationFrame    || 
	              window.oRequestAnimationFrame      || 
	              window.msRequestAnimationFrame     || 
	              function( callback ){
	                window.setTimeout(callback, 1000 / 60);
	              };
	    })();
	    (function animLoop(){
	    	requestAnimFrame(animLoop);
	    	app.scene.engine.myRender();
	    })()
	},
	myRender:function(){
		app.settings.renderer.render( app.settings.scene, app.settings.camera );
		app.settings.controls.update();
		this.lightMove(app.settings.pointLight);
		this.animateElem(app.settings.player);

		// Wata
		app.settings.ms_Water.material.uniforms.time.value += 1.0 / 60.0;
		app.settings.ms_Water.render();
	},
	// Light animation (in circle around the scene)
	lightMove:function(light){
		this.count+=0.002;
		var posX=950*Math.cos(this.count);
		var posZ=950*Math.sin(this.count);
		light.position.x=posX;
		light.position.z=posZ;
		light.position.y=1000;
	},
	// Mesh Animation
	animateElem:function(playa){
		var delta = this.clock.getDelta();
		if (app.settings.kdown==true) {
			// playa.children[0].updateAnimation( 1000 * delta );
		}
	}
}