goog.provide('cjs1.main');
var module$node_modules$three$three=shadow.js.require("module$node_modules$three$three", {});
cjs1.main.cube = (function cjs1$main$cube(){
var geom = (new module$node_modules$three$three.BoxGeometry());
var matr = (new module$node_modules$three$three.MeshBasicMaterial(({"color":(65280)})));
var cube = (new module$node_modules$three$three.Mesh(geom,matr));
return cube;
});
cjs1.main.log = (function cjs1$main$log(wtf){
return console.log(wtf);
});
cjs1.main.main = (function cjs1$main$main(){
var body = document.body;
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var scene = (new module$node_modules$three$three.Scene());
var camera = (new module$node_modules$three$three.PerspectiveCamera((75),(WIDTH / HEIGHT),0.1,(1000)));
var renderer = (new module$node_modules$three$three.WebGLRenderer());
var cube_ = cjs1.main.cube();
var animator = (function cjs1$main$main_$_animator(){
window.requestAnimationFrame(cjs1$main$main_$_animator);

return renderer.render(scene,camera);
});
renderer.setSize(WIDTH,HEIGHT);

body.appendChild(renderer.domElement);

cjs1.main.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cube_));

scene.add(cube_);

(camera.position.z = (5));

return animator();
});

//# sourceMappingURL=cjs1.main.js.map
