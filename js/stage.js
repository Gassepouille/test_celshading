app.scene.stage={
	init:function(){
		this.setSkyBox();
		this.addWater();
	},
	setSkyBox:function(){
		var imagePrefix = "assets/background/";
		var directions  = ["test1", "test1", "test2", "test2", "test1", "test1"];
		var imageSuffix = ".png";
		var skyGeometry = new THREE.CubeGeometry( 8000, 8000, 8000 );	
		
		var materialArray = [];
		for (var i = 0; i < 6; i++)
			materialArray.push( new THREE.MeshBasicMaterial({
				map: THREE.ImageUtils.loadTexture( imagePrefix + directions[i] + imageSuffix ),
				side: THREE.BackSide
			}));
		var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
		var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
		skyBox.position.set(0,3500,0)
		app.settings.scene.add( skyBox );
	},
	addWater:function(){
		// https://github.com/jbouny/ocean
		var waterNormals = new THREE.ImageUtils.loadTexture( 'assets/img/waternormals.jpg' );
		waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

		app.settings.ms_Water = new THREE.Water( app.settings.renderer, app.settings.camera, app.settings.scene, {
			textureWidth: 512, 
			textureHeight: 512,
			waterNormals: waterNormals,
			alpha: 	1.0,
			sunDirection: app.settings.pointLight.position.normalize(),
			sunColor: 0x0000ff,
			waterColor: 0x001e0f,
			betaVersion: 1
		} );
		var aMeshMirror = new THREE.Mesh(
			new THREE.PlaneGeometry( 8000, 8000, 100, 100 ), 
			app.settings.ms_Water.material
		);
		aMeshMirror.add( app.settings.ms_Water );
		aMeshMirror.rotation.x = - Math.PI * 0.5;
		
		app.settings.scene.add( aMeshMirror );
	}

}