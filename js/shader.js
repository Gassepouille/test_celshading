app.scene.shader={
	cel_shader:{
		uniforms: {
			// Light Position
			"uDirLightPos":	{ type: "v3", value: new THREE.Vector3() },
			// Light Color
			"uDirLightColor": { type: "c", value: new THREE.Color( 0xffffff ) },
			// Material Color
			"uMaterialColor":  { type: "c", value: new THREE.Color( 0xffffff ) },
			// diffuse light
			uKd: {
				type: "f",
				value: 0.8
			},
			// Light threshold
			uBorder: {
				type: "f",
				value: 0.4
			}
		},
		vertexShader: [
			// Get Variables
			"varying vec3 vNormal;",
			"varying vec3 vViewPosition;",

			"void main() {",

				"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
				"vNormal = normalize( normalMatrix * normal );",
				"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
				"vViewPosition = -mvPosition.xyz;",

			"}"

		].join("\n"),

		fragmentShader: [
			//  Get variables
			"uniform vec3 uMaterialColor;",

			"uniform vec3 uDirLightPos;",
			"uniform vec3 uDirLightColor;",

			"uniform float uKd;",
			"uniform float uBorder;",

			"varying vec3 vNormal;",
			"varying vec3 vViewPosition;",

			"void main() {",

				// compute direction to light
				"vec4 lDirection = viewMatrix * vec4( uDirLightPos, 0.0 );",
				"vec3 lVector = normalize( lDirection.xyz );",

				// diffuse: N * L. Normal must be normalized, since it's interpolated.
				"vec3 normal = normalize( vNormal );",
				//was: "float diffuse = max( dot( normal, lVector ), 0.0);",
				// solution
				"float diffuse = dot( normal, lVector );",
				// If exceed threshold full light
				"if ( diffuse > uBorder ) { diffuse = 1.0; }",
				// If under threshold light divided by 2
				"else { diffuse = 0.5; }",

				"gl_FragColor = vec4( uKd * uMaterialColor * uDirLightColor * diffuse, 1.0 );",

			"}"

		].join("\n")
	},
	outline_shader:{
		uniforms: {

			"linewidth":  { type: "f", value: 0.5 },

		},

		vertexShader: [

			"uniform float linewidth;",

			"void main() {",

				"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
				"vec4 displacement = vec4( normalize( normalMatrix * normal ) * linewidth, 0.0 ) + mvPosition;",
				"gl_Position = projectionMatrix * displacement;",

			"}"

		].join("\n"),

		fragmentShader: [

			"void main() {",

				"gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );",

			"}"

		].join("\n")
	}
}