app.scene.light={
	init:function(){
		
		app.settings.pointLight = new THREE.PointLight(0xffffff,1,1500);
		app.settings.pointLight.position.y=1000;
		app.settings.scene.add(app.settings.pointLight);

		var geometry = new THREE.SphereGeometry(5,32,32);
		var material = new THREE.MeshBasicMaterial( { color:0xffff00} );
		var sphere = new THREE.Mesh( geometry, material );
		app.settings.pointLight.add( sphere );

	}
}