https://teachablemachine.withgoogle.com/models/4Ut1QBK-d/
Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img src = "'+data_uri+'" id = "result_image">';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4Ut1QBK-d/model.json',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded');
}




