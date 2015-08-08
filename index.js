var canvas, engine, scene, houses;
window.alert = function() {
    var list = [];
    for (var i = 0; i < arguments.length; i++) {
        list.push(arguments[i].toString());
    }
    console.log(list.join(''));
};
var loadHouses = function() {
    var house, point;
    houses = new Houses();
    houses.push(new House(
        [221874.45,152550.66],
        [221874.01,152548.54],
        [221872.65,152548.82],
        [221872.10,152546.80],
        [221871.29,152547.10],
        [221859.99,152551.17],
        [221862.28,152560.24],
        [221873.69,152555.50],
        [221874.32,152555.22],
        [221873.25,152551.07]
    ));
    var min = new Point([Infinity, Infinity]);
    var max = new Point([-Infinity, -Infinity]);
    house = houses[0];
    for (var i = 0; i < house.length; i++) {
        point = new Point(house[i]);
        min.x = Math.min(min.x, point.x);
        min.y = Math.min(min.y, point.y);
        max.x = Math.max(max.x, point.x);
        max.y = Math.max(max.y, point.y);
        house[i] = point;
    };
    var center = new Point([(max.x + min.x) / 2, (max.y + min.y) / 2]);
    for (var i = 0; i < house.length; i++) {
        point = house[i];
        point.x -= center.x;
        //point.x = -point.x;
        point.y -= center.y;
        //point.y = -point.y;
    }
    alert('min = ', min);
    alert('max = ', max);
    alert('center = ', center);
    alert('house = ', house);
};
var init = function() {
    loadHouses();
    canvas = document.getElementById('renderCanvas');
    engine = new BABYLON.Engine(canvas, true);
    scene = new BABYLON.Scene(engine);
    var camera = createCamera(scene);
    var light = createLight(scene);
    showAxis(10);
    var sphere = createSphere(scene);
    var ground = createGround(scene);
    var house = houses[0];
    var foundation = createFoundation(house, scene);
    var floor = createFloor(house, scene);
    var walls = createWalls(foundation, scene);
    //mesh.receiveShadows = true;
    //extruded.material = customMaterialmacadam;
    engine.runRenderLoop(function () {
        scene.render();
    });
    window.addEventListener('resize', function () {
        engine.resize();
    });
};
var createFoundation = function(house, scene) {
    var foundation = [];
    for (var i = 0; i < house.length; i++) {
        var point = house[i];
        foundation.push(new BABYLON.Vector3(point.x, point.y, 0));
    }
    foundation.push(foundation[0]);
    return foundation;
};
var createWalls = function(foundation, scene) {
    /*var path = [];
    for (var i = 0; i < 1; i++) {
        var point = new BABYLON.Vector3(0, 0, i);
        path.push(point); 
    }*/
    var path = [
      BABYLON.Vector3.Zero(),
      new BABYLON.Vector3(-3, 0, 0)
    ];
    var extruded = BABYLON.Mesh.ExtrudeShape('extruded', foundation, path, 1, 0, 0, scene, true, 2);
    extruded.material = awesomeMaterial(scene);
    //extruded.material = standardMaterial(scene, 0xFF0000);
    //extruded.rotation.x = Math.PI;
    extruded.rotation.z = -Math.PI / 2;
    return extruded;
};
var createFloor = function(house, scene) {
    var contours = [];
    for (var i = 0; i < house.length; i++) {
        var point = house[i];
        contours.push(new BABYLON.Vector2(point.y, point.x));
    }
    var polygonMeshBuilder = new BABYLON.PolygonMeshBuilder('polygonMesh', contours, scene);
    var mesh = polygonMeshBuilder.build(true);
    mesh.material = standardMaterial(scene, 0x0000FF);
    return mesh;
};
var macadamMaterial = function(scene) {
    var customMaterialmacadam = new BABYLON.StandardMaterial('macadam', scene);
    var customProcTextmacadam = new BABYLON.RoadProceduralTexture('customtext', 512, scene);
    customMaterialmacadam.diffuseTexture = customProcTextmacadam;
    return customMaterialmacadam;
};
var brickMaterial = function(scene) {
    var material = new BABYLON.StandardMaterial('brickMaterial', scene);
    var texture = new BABYLON.BrickProceduralTexture('brickTtexture', 512, scene);
    texture.numberOfBricksHeight = 2;
    texture.numberOfBricksWidth = 3;
    material.diffuseTexture = texture;
    return material;
};
var createCamera = function(scene) {
    var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 10, -20), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);
    return camera;
};
var createLight = function(scene) {
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;
    return light;
};
var createSphere = function(scene) {
    var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);
    sphere.position.y = 1;
    return sphere;
};
var standardMaterial = function(scene, color) {
    var material = new BABYLON.StandardMaterial('standardMaterial', scene);
    material.diffuseColor = Color(color);
    return material;
};
var createGround = function(scene) {
    var ground = BABYLON.Mesh.CreateGround('ground1', 16, 16, 2, scene);
    ground.material = standardMaterial(scene, 0xFFFF00);
    ground.position.y = -0.1;
    //ground.material = macadamMaterial(scene);
    return ground;
};
var Color = function() {
    var value, color;
    if (arguments.length == 1 && typeof arguments[0] == 'number') {
        value = arguments[0];
        var r = ((value & 0xFF0000) >> 16) / 0xFF;
        var g = ((value & 0xFF00) >> 8) / 0xFF;
        var b = (value & 0xFF) / 0xFF;
        color = new BABYLON.Color3(r, g, b);
    }
    return color;
};
var awesomeMaterial = function(scene) {
    var myAwsomeMaterial = new BABYLON.StandardMaterial('my awsome material', scene);
    myAwsomeMaterial.alpha = 1;
    myAwsomeMaterial.backFaceCulling = true;
    myAwsomeMaterial.specularPower = 0.5;
    myAwsomeMaterial.useSpecularOverAlpha = true;
    myAwsomeMaterial.useAlphaFromDiffuseTexture = false;
    myAwsomeMaterial.diffuseColor = new BABYLON.Color3(0.90, 0.11, 0.11);
    myAwsomeMaterial.emissiveColor = new BABYLON.Color3(0.13, 0.30, 0.04);
    myAwsomeMaterial.ambientColor = new BABYLON.Color3(0.98, 1.00, 0.00);
    myAwsomeMaterial.specularColor = new BABYLON.Color3(0.11, 0.19, 0.97);
    return myAwsomeMaterial;
}
var showAxis = function(size) {
    var makeTextPlane = function(text, color, size) {
        var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 50, scene, true);
        dynamicTexture.hasAlpha = true;
        dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color , "transparent", true);
        var plane = new BABYLON.Mesh.CreatePlane("TextPlane", size, scene, true);
        plane.material = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
        plane.material.backFaceCulling = false;
        plane.material.specularColor = new BABYLON.Color3(0, 0, 0);
        plane.material.diffuseTexture = dynamicTexture;
        return plane;
    };
    var axisX = BABYLON.Mesh.CreateLines("axisX", [ 
      new BABYLON.Vector3.Zero(), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, 0.05 * size, 0), 
      new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
    ], scene);
    axisX.color = new BABYLON.Color3(1, 0, 0);
    var xChar = makeTextPlane("X", "red", size / 10);
    xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);
    var axisY = BABYLON.Mesh.CreateLines("axisY", [
        new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3( -0.05 * size, size * 0.95, 0), 
        new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3( 0.05 * size, size * 0.95, 0)
    ], scene);
    axisY.color = new BABYLON.Color3(0, 1, 0);
    var yChar = makeTextPlane("Y", "green", size / 10);
    yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);
    var axisZ = BABYLON.Mesh.CreateLines("axisZ", [
        new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3( 0 , -0.05 * size, size * 0.95),
        new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3( 0, 0.05 * size, size * 0.95)
    ], scene);
    axisZ.color = new BABYLON.Color3(0, 0, 1);
    var zChar = makeTextPlane("Z", "blue", size / 10);
    zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
};
window.addEventListener('DOMContentLoaded', init);