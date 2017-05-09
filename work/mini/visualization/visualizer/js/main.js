var camera, scene, renderer, container;
var audioBuffer, audioContext, analyser;
var source;
var started = false;
var droppedFiles = [];

var change;
var m;
var p;
var v;
var o;
var mo;
var left = 0;
var cent = 0;
$(document).ready(function() {
	init();
});

function init() {
	container = $('#container');
	camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 1000000);
	camera.position.z = 500;
	scene = new THREE.Scene();
	scene.add(camera);


	renderer = new THREE.WebGLRenderer({
		antialias : false,
		sortObjects : false
	});
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.append(renderer.domElement);

	audioContext = new (window.AudioContext || window.webkitAudioContext)();
	analyser = audioContext.createAnalyser();
	analyser.smoothingTimeConstant = 0.1;
	analyser.fftSize = 1024;

	document.addEventListener('drop', onMP3Drop, false);
	document.addEventListener('dragover', onDocumentDragOver, false);
	document.addEventListener('drop', function(){
var current;
		for (var i = 0; i < droppedFiles.length; i++) {
			current = droppedFiles[i];
		}

	var title = document.getElementById('one');
	title.textContent = current.name;


})
	Shine.init();
}

function onDocumentDragOver(evt) {
	evt.stopPropagation();
	evt.preventDefault();
	return false;
}

function onMP3Drop(evt) {
	evt.stopPropagation();
	evt.preventDefault();

	droppedFiles = evt.dataTransfer.files;
	var reader = new FileReader();
	console.log(droppedFiles);
	reader.readAsArrayBuffer(droppedFiles[0]);




	reader.onload = function(fileEvent) {
		var data = fileEvent.target.result;
		audioContext.decodeAudioData(data, function(buffer) {
			audioBuffer = buffer;
			startSound();
		}, function(e) {
			//console.log(e);
		});
	};

}

function startSound() {
	if (source){
		source.stop(0.0);
		source.disconnect();
	}

	source = audioContext.createBufferSource();	
	source.connect(audioContext.destination);
	source.connect(analyser);

	source.buffer = audioBuffer;
	source.loop = true;
	source.start(0.0);

	if (!started){
		started = true;
		animate();
	}
}

function animate() {
	requestAnimationFrame(animate);

	console.log(change);
	render();
}

function render() {

	Shine.update();
	renderer.render(scene, camera);
}

var Shine = (function() {
	var segments = 600;
	var seg = 600;
	var s = 400;

	var loopHolder = new THREE.Object3D();
	var loopHold = new THREE.Object3D();
	var loopH = new THREE.Object3D();
	var loopOuter = new THREE.Object3D();
	var loopOuterMove = new THREE.Object3D();
	var loopGeom;
	var loopG;
	var loopGeo;
	var loopGeomOuter;
	var loopGeomOuterMove;
	var timeByteData;

	var loopShapeOuter;
	var loopShapeOuterMove;
	var loopShape;
	var loopS;
	var loopSh;

	var line;
	var li;
	var l;
	var louter;
	var loutermove;


	function init() {

		timeByteData = new Uint8Array(analyser.frequencyBinCount);


		
		loopShapeOuter = new THREE.Shape();
		loopShapeOuter.absarc(left, cent, 100, 0, Math.PI*55, false);
		loopGeomOuter = loopShapeOuter.createPointsGeometry(segments/2);
		loopGeomOuter.dynamic = true;

		loopShapeOuterMove = new THREE.Shape();
		loopShapeOuterMove.absarc(left, cent, 90, 0, Math.PI*50, false);
		loopGeomOuterMove = loopShapeOuterMove.createPointsGeometry(segments/2);
		loopGeomOuterMove.dynamic = true;

		loopShape = new THREE.Shape();
		loopShape.absarc(left, cent, 90, 1000, Math.PI*22, false);
		loopGeom = loopShape.createPointsGeometry(segments/2);
		loopGeom.dynamic = true;


		loopS = new THREE.Shape();
		loopS.absarc(left, cent, 50, 300, Math.PI*22, false);
		loopGeo = loopS.createPointsGeometry(s/2);
		loopGeo.dynamic = true;

		loopSh = new THREE.Shape();
		loopSh.absarc(left, cent, 100, 0, Math.PI*11, false);
		loopG = loopSh.createPointsGeometry(seg/2);
		loopG.dynamic = true;



scene.add(loopOuter);
		var scale = 1;
		o = new THREE.LineDashedMaterial({ 
			color: 0x47ff0f,
			linewidth: 100,
			opacity : 0.3,
			blending : THREE.AdditiveBlending,
			depthTest : false,
			transparent : true
		});

scene.add(loopOuterMove);
		var scale = 1;
		mo = new THREE.LineDashedMaterial({ 
			color: 0x44baff,
			linewidth: 1,
			opacity : 0.3,
			blending : THREE.AdditiveBlending,
			depthTest : false,
			transparent : true
		});

scene.add(loopH);
		var scale = 1;
		v = new THREE.LineDashedMaterial({ 
			color: 0xe30fff,
			linewidth: 5,
			opacity : 0.3,
			blending : THREE.AdditiveBlending,
			depthTest : false,
			transparent : true
		});

scene.add(loopHold);
		var scale = 1;
		m = new THREE.LineDashedMaterial({ 
			color: 0xed0013,
			linewidth: 1,
			opacity : 0.3,
			blending : THREE.AdditiveBlending,
			depthTest : false,
			transparent : true
		});

scene.add(loopHolder);
		var scale = 1;
		p = new THREE.LineDashedMaterial({ 
			color: 0xFBB917,
			linewidth: 3,
			opacity : 0.3,
			blending : THREE.AdditiveBlending,
			depthTest : false,
			transparent : true
		});



		line = new THREE.Line(loopGeom, m);
		loopHolder.add(line);
		li = new THREE.Line(loopG, p);
		loopHold.add(li);
		l = new THREE.Line(loopGeo, v);
		loopH.add(l);
		louter = new THREE.Line(loopGeomOuter, o);
		loopOuter.add(louter);
		loutermove = new THREE.Line(loopGeomOuterMove, mo);
		loopOuterMove.add(loutermove);

		
	}

	function update() {

left = parseFloat(document.getElementById('left').value);
analyser.getByteTimeDomainData(timeByteData);

		for(var o = 0; o < segments; o++) {
			change = parseFloat(document.getElementById('x').value);
			loopGeomOuter.vertices[o].z = timeByteData[o]*change;
			
		}

		loopGeomOuter.vertices[segments].z = loopGeomOuter.vertices[0].z;
		loopGeomOuter.verticesNeedUpdate = true;

		for(var a = 0; a < segments; a++) {
		change = parseFloat(document.getElementById('z').value);
			loopGeomOuterMove.vertices[a].z = timeByteData[a]*change;
		}
		loopGeomOuterMove.vertices[segments].z = loopGeomOuterMove.vertices[0].z;
		loopGeomOuterMove.verticesNeedUpdate = true;

		for(var j = 0; j < segments; j++) {
		change = parseFloat(document.getElementById('y').value);
			loopGeom.vertices[j].z = timeByteData[j]*change;
		}

		loopGeom.vertices[segments].z = loopGeom.vertices[0].z;
		loopGeom.verticesNeedUpdate = true;
	

	for(var n = 0; n < seg; n++) {
		change = parseFloat(document.getElementById('u').value);
			loopG.vertices[n].z = timeByteData[n]*change;
		}

		loopG.vertices[seg].z = loopG.vertices[0].z;
		loopG.verticesNeedUpdate = true;


	for(var k = 0; k < s; k++) {
		change = parseFloat(document.getElementById('w').value);
			loopGeo.vertices[k].z = timeByteData[k]*change;
		}

		loopGeo.vertices[s].z = loopGeo.vertices[0].z;
		loopGeo.verticesNeedUpdate = true;

// change = parseFloat(document.getElementById('z').value);
// loopSh.absarc(0, 0, change, 0, Math.PI*11, false);
// loopG = loopSh.createPointsGeometry(seg/2);
// loopG.dynamic = true;
// li = new THREE.Line(loopG, p);
// loopHold.add(li);


	}




	return {
		init:init,
		update:update,
		loopHolder:loopHolder,
		loopHold:loopHold,
		loopH:loopH,
		loopOuter:loopOuter,
		loopOuterMove:loopOuterMove,
	
	};
}());