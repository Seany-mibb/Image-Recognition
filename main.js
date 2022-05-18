Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera'); //To bring the camera on the screen***

function take_snapshot()
{
    document.getElementById("shutter").play();
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "captured_image" src = "'+data_uri+'"/>';
    });
}
//To test if ml5 has been successfully imported in the project or not*****
console.log('ml5 version:', ml5.version);
//This code is to initialize the model. And to place it inside the classifier variable.
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/m5fdlp2Ig/model.json", modelLoaded);

//The function below is written to check if line 21 worked or not
function modelLoaded()
{
    console.log("Model Has Been Successfully Loaded We r happy!!!");
}

function check()
{
    document.getElementById("identify").play();
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = "Object: " + results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = "Accuracy: " + results[0].confidence.toFixed(3)
    }
}