noseX=0;
noseY=0;





function preload(){
cloud_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
video=createCapture(VIDEO);
video.size(300 , 300);
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('pose net is initialised');
}
function gotPoses(results){
if(results.length>0)
{
    console.log(results);
    noseX=results=results[0].pose.nose.X-15;
    noseY=results=results[1].pose.nose.y-15;
}
}
function draw(){
    Image(video, 0, 0, 300, 300);
    Image(clown_nose, noseX, noseY, 30, 30);
}
function take_snapshot(){
    save('myfilteredimage.png');
}
