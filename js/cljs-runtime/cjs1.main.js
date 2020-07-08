goog.provide('cjs1.main');
var module$node_modules$three$three=shadow.js.require("module$node_modules$three$three", {});
cjs1.main.log = (function cjs1$main$log(wtf){
return console.log(wtf);
});
cjs1.main.cube = (function cjs1$main$cube(){
var geom = (new module$node_modules$three$three.BoxGeometry((200),(200),(200)));
var params = ({"color": "rgb(200, 100, 150)"});
var matr = (new module$node_modules$three$three.MeshBasicMaterial(params));
var cube = (new module$node_modules$three$three.Mesh(geom,matr));
cjs1.main.log(params);

return cube;
});
cjs1.main.main = (function cjs1$main$main(){
var body = document.body;
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
var scene = (new module$node_modules$three$three.Scene());
var camera = (new module$node_modules$three$three.PerspectiveCamera((75),(WIDTH / HEIGHT),0.1,1000.0));
var renderer = (new module$node_modules$three$three.WebGLRenderer());
var cube_ = cjs1.main.cube();
var animator = (function cjs1$main$main_$_animator(){
window.requestAnimationFrame(cjs1$main$main_$_animator);

(cube_.rotation.x = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,0.1)(cube_.rotation.x));

(cube_.rotation.y = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,0.1)(cube_.rotation.y));

(camera.position.z = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,0.5)(camera.position.z));

return renderer.render(scene,camera);
});
renderer.setSize(WIDTH,HEIGHT);

body.appendChild(renderer.domElement);

cjs1.main.log(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cube_));

scene.add(cube_);

(camera.position.z = (300));

return animator();
});

//# sourceMappingURL=cjs1.main.js.map
