noseX=0;
noseY=0;
Xmuñeca_mano_D=0;
Xmuñeca_mano_I=0;
Diferencia=0;
Ymuñeca_mano_Ar=0;
Ymuñeca_mano_Ab=0;
diferencia=0;

function setup() {
video=createCapture(VIDEO); 
video.size(599,499);
canvas=createCanvas(399,299);
canvas.position(649,250);
poseNet=ml5.poseNet(video,cobija);
poseNet.on("pose",Sabado);
}

function cobija() {
console.log ("poseNet");   
}

function Sabado(mi_parametro) {
 if (mi_parametro.length>0) {
console.log (mi_parametro);
noseX=mi_parametro[0].pose.nose.x;  
noseY=mi_parametro[0].pose.nose.y;  
Xmuñeca_mano_D=mi_parametro[0].pose.rightWrist.x;  
Xmuñeca_mano_I=mi_parametro[0].pose.leftWrist.x;
Diferencia=floor(Xmuñeca_mano_I-Xmuñeca_mano_D);
diferencia=floor(Ymuñeca_mano_Ar-Ymuñeca_mano_Ab);
}  
 
}

function draw() {
background("White");
fill("#4e1aad");
textSize(Diferencia)
stroke("4e1aad");
text("Hola",noseX-350,noseY-200);
}