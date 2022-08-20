let capture;
let posenet;
let noseX, noseY;
let reyeX, reyeY;
let leyeX, leyeY;
let singlePose, skeleton;

let specs, cigar;

function setup() {
    createCanvas(1200,800);
    capture = createCapture(VIDEO);
    capture.hide();

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose', receivedPoses);

    cigar_img = loadImage('images/cigar.png');
    specs_img = loadImage('images/specs.png');
}

function receivedPoses(poses) {
    console.log(poses);

    if(poses.length > 0) {
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
    console.log(noseX + ' ' + noseY);
}

function modelLoaded() {
    console.log('Model Loaded!');
  }

function draw() {

   // to capture images/videos
    image(capture, 0, 0, 700, 600);
    fill(255, 0, 0);

    if(singlePose){
        for(let i = 0; i<singlePose.keypoints.length; i++) {
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y, 20);
        }

        stroke(255, 255, 255);
        strokeWeight(2);
        for(let j = 0; j<skeleton.length; j++){
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y);
        }

        // image(cigar_img, singlePose.nose.x-80, singlePose.nose.y+110, 100, 100);
        // image(specs_img, singlePose.nose.x-70, singlePose.nose.y-70, 200, 200);

    }

        
        
    
}