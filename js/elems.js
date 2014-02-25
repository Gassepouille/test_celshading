app.scene.elems={
	init:function(){
		// ------ axes
		app.settings.scene.add(app.scene.axes.init(1000));
		// ---- Cube
		this.addMerry();
		this.addChopper();
		this.addBonChan();
		this.addUsopp();
		this.addLuffy();
	},
	addMerry:function(){
		var yawObject = new THREE.Object3D();
		yawObject.position.y = 0;
		yawObject.position.x = 0;
		yawObject.position.z = 0;
		var loader = new THREE.JSONLoader();
		loader.load( 'assets/models/merry.js', function ( geometry, materials ) {

			// --------------------------Cel Shading on Model
			var celMaterials=app.scene.elems.getCelMaterial(materials);
			var faceMaterial = new THREE.MeshFaceMaterial( celMaterials );
			var mesh = new THREE.MorphAnimMesh( geometry, faceMaterial );
			mesh.position.set( 0, -100, 0 );

			// -----------------------------Outline the model

			// Replacing existing color by new color (black)
			var blackMaterials=app.scene.elems.getOulMaterial(materials);
			var faceBlackMaterial = new THREE.MeshFaceMaterial( blackMaterials );
			var meshOutline = new THREE.MorphAnimMesh( geometry, faceBlackMaterial );
			

			// assemble the models and add to the scene
			mesh.add(meshOutline); 
			yawObject.add(mesh);
			app.settings.ship=yawObject;
			app.settings.ship.name="Ship";
			app.settings.scene.add(app.settings.ship)

		} );
	},
// ----------------------------------------------------------------Chara
	addChopper:function(){
		var yawObject = new THREE.Object3D();
		yawObject.position.y = 0;
		yawObject.position.x = 0;
		yawObject.position.z = 0;
		var loader = new THREE.JSONLoader();
		loader.load( 'assets/models/chopper.js', function ( geometry, materials ) {
		// loader.load( 'assets/models/flamingo.js', function ( geometry, materials ) {

			// --------------------------Cel Shading on Model

			var celMaterials=app.scene.elems.getCelMaterial(materials);
			var faceMaterial = new THREE.MeshFaceMaterial( celMaterials );
			var mesh = new THREE.MorphAnimMesh( geometry, faceMaterial );
			mesh.scale.set( 10,10,10 );
			mesh.position.set( 300, 260, 750 );
			mesh.rotation.set( 0, Math.PI*0.25, 0 );
			// mesh.matrixAutoUpdate = false;
			// mesh.updateMatrix();
				

			// -----------------------------Outline the model

			var blackMaterials=app.scene.elems.getOulMaterial(materials);
			var faceBlackMaterial = new THREE.MeshFaceMaterial( blackMaterials );
			var meshOutline = new THREE.MorphAnimMesh( geometry, faceBlackMaterial );		

			// assemble the models and add to the scene
			mesh.add(meshOutline); 
			yawObject.add(mesh);
			app.settings.player=yawObject;
			app.settings.player.name="Chopper";
			app.settings.scene.add(app.settings.player)

		} );
	},
	addBonChan:function(){
		var yawObject = new THREE.Object3D();
		yawObject.position.y = 0;
		yawObject.position.x = 0;
		yawObject.position.z = 0;
		var loader = new THREE.JSONLoader();
		loader.load( 'assets/models/bonchan.js', function ( geometry, materials ) {

			// --------------------------Cel Shading on Model

			var celMaterials=app.scene.elems.getCelMaterial(materials);
			var faceMaterial = new THREE.MeshFaceMaterial( celMaterials );
			var mesh = new THREE.MorphAnimMesh( geometry, faceMaterial );
			mesh.scale.set( 0.4,0.4,0.4 );
			mesh.position.set( 500, 260, -500 );
			mesh.rotation.set( 0, Math.PI*0.5, 0 );				
			// -----------------------------Outline the model

			var blackMaterials=app.scene.elems.getOulMaterial(materials);
			var faceBlackMaterial = new THREE.MeshFaceMaterial( blackMaterials );
			var meshOutline = new THREE.MorphAnimMesh( geometry, faceBlackMaterial );		

			// assemble the models and add to the scene
			mesh.add(meshOutline); 
			yawObject.add(mesh);
			app.settings.Bon=yawObject;
			app.settings.Bon.name="BonChan";
			app.settings.scene.add(app.settings.Bon)

		} );
	},
	addUsopp:function(){
		var yawObject = new THREE.Object3D();
		yawObject.position.y = 0;
		yawObject.position.x = 0;
		yawObject.position.z = 0;
		var loader = new THREE.JSONLoader();
		loader.load( 'assets/models/usopp.js', function ( geometry, materials ) {

			// --------------------------Cel Shading on Model
			var celMaterials=app.scene.elems.getCelMaterial(materials);
			var faceMaterial = new THREE.MeshFaceMaterial( celMaterials );
			var mesh = new THREE.MorphAnimMesh( geometry, faceMaterial );
			mesh.scale.set( 0.5,0.5,0.5 );
			mesh.position.set( -300, 260, 750 );
			mesh.rotation.set( 0, -Math.PI*0.25, 0 );				
			// -----------------------------Outline the model
			var blackMaterials=app.scene.elems.getOulMaterial(materials);
			var faceBlackMaterial = new THREE.MeshFaceMaterial( blackMaterials );
			var meshOutline = new THREE.MorphAnimMesh( geometry, faceBlackMaterial );		

			// assemble the models and add to the scene
			mesh.add(meshOutline); 
			yawObject.add(mesh);
			app.settings.Bon=yawObject;
			app.settings.Bon.name="Ussop";
			app.settings.scene.add(app.settings.Bon)

		} );
	},
	addLuffy:function(){
		var yawObject = new THREE.Object3D();
		yawObject.position.y = 0;
		yawObject.position.x = 0;
		yawObject.position.z = 0;
		var loader = new THREE.JSONLoader();
		loader.load( 'assets/models/luffy.js', function ( geometry, materials ) {

			// --------------------------Cel Shading on Model
			var celMaterials=app.scene.elems.getCelMaterial(materials);
			var faceMaterial = new THREE.MeshFaceMaterial( celMaterials );
			var mesh = new THREE.MorphAnimMesh( geometry, faceMaterial );
			mesh.scale.set( 1.2,1.2,1.2 );
			mesh.position.set( -300, 450, 0 );
			mesh.rotation.set( Math.PI*0.5,-Math.PI*0.25 , -Math.PI*0.25 );				
			// -----------------------------Outline the model
			var blackMaterials=app.scene.elems.getOulMaterial(materials);
			var faceBlackMaterial = new THREE.MeshFaceMaterial( blackMaterials );
			var meshOutline = new THREE.MorphAnimMesh( geometry, faceBlackMaterial );		

			// assemble the models and add to the scene
			mesh.add(meshOutline); 
			yawObject.add(mesh);
			app.settings.Bon=yawObject;
			app.settings.Bon.name="Luffy";
			app.settings.scene.add(app.settings.Bon)

		} );
	},
	createShaderMaterial:function(shader,light){

		// Get uniforms
		var u = THREE.UniformsUtils.clone(shader.uniforms);

		// Get Vertex Shader
		var vs = shader.vertexShader;
		// Get Fragment Shader
		var fs = shader.fragmentShader;
		// create material from shader 
		var material = new THREE.ShaderMaterial({ uniforms: u, vertexShader: vs, fragmentShader: fs });

		// Get light's informations for shader
		material.uniforms.uDirLightPos.value = light.position;
		material.uniforms.uDirLightColor.value = light.color;

		return material;
	},
	getCelMaterial:function(materials){
		// Array to stock new colors
		var Materialarray=[];
		// Replacing existing color by new color (cel shading)
		for (var i = 0; i < materials.length; i++) {
			var material = app.scene.elems.createShaderMaterial(app.scene.shader.cel_shader, app.settings.pointLight);
			material.uniforms.uMaterialColor.value.copy(materials[i].color);
			// material.morphTargets = true;
			Materialarray.push(material);
		};

		return Materialarray;
	},
	getOulMaterial:function(materials){
		var outlineShader=app.scene.shader.outline_shader;
		var Materialarray=[];
		// Replacing existing color by new color (black)
		for (var i = 0; i < materials.length; i++) {
			var outlMaterial = new THREE.ShaderMaterial( {
				uniforms: THREE.UniformsUtils.clone( outlineShader.uniforms ),
				vertexShader:outlineShader.vertexShader ,
				fragmentShader:outlineShader.fragmentShader,
				side: THREE.BackSide
			} );
			Materialarray.push(outlMaterial);
		};

		return Materialarray;
	},
}