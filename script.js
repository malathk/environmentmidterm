var video = document.querySelector("#videoElement");
  var vidWidth, vidHeight;
 var canvas= document.querySelector("#canvas1");
  var ctx= canvas.getContext("2d");

video.addEventListener('playing', paintToCanvas, false);
if (navigator.mediaDevices.getUserMedia) {
navigator.mediaDevices.getUserMedia({ video: true })
.then(function (stream) {
 video.srcObject = stream;
})
.catch(function (err0r) {
 console.log("Something went wrong!");
});
}
// var getVideoSize = function() {
// vidWidth = video.videoWidth;
// vidHeight = video.videoHeight;
// video.removeEventListener('playing', getVideoSize, false);
// };


function paintToCanvas(){
canvas.width= vidWidth;
canvas.height= vidHeight;
vidWidth = video.videoWidth;
vidHeight = video.videoHeight;
return setInterval(()=>{
ctx.drawImage(video,0,0,vidWidth,vidHeight);
let pixels= ctx.getImageData(0,0,vidWidth,vidHeight).data;
ctx.globalAlpha=0.8;
pixels= little(pixels);
ctx.putImageData(pixels,0,0);

},23);
// video.removeEventListener('playing', paintToCanvas, false);
}

// function rgbSplit(pixels) {
//   for (let i = 0; i < pixels.data.length; i += 4) {
//     pixels.data[i - 150] = pixels.data[i + 0]; // red
//     pixels.data[i + 100] = pixels.data[i + 1]; // green
//     pixels.data[i - 150] = pixels.data[i + 2]; // blue
//     // pixels[i+3] // alpha
//   }
//   return pixels;
// }



function display() {  
  var checkRadio = document.querySelector( 
      'input[name="sal"]:checked'); 
  if(checkRadio != null) { 
    document.getElementById("disp").innerHTML 
        = checkRadio.value 
        + " radio button checked"; 
} 
else { 
    document.getElementById("disp").innerHTML 
        = "No one selected"; 
} 
}
function display2() { 
var checkRadio2 = document.querySelector( 
  'input[name="tim"]:checked');
if(checkRadio2 != null) { 
  document.getElementById("disp2").innerHTML 
      = checkRadio2.value 
      + " radio button checked"; 
} 
else { 
  document.getElementById("disp2").innerHTML 
      = "No one selected"; 
} 
}
function display3() { 
var checkRadio3 = document.querySelector( 
  'input[name="anx"]:checked'); 

  if(checkRadio3 != null) { 
      document.getElementById("disp3").innerHTML 
          = checkRadio3.value 
          + " radio button checked"; 
  } 
  else { 
      document.getElementById("disp3").innerHTML 
          = "No one selected"; 
  } 
} 
function minimumwage(){
  
  document.querySelector('video').style.filter = " contrast(130%) hue-rotate(50deg)";

}
function above(){
 

  document.querySelector('video').style.filter = "hue-rotate(330deg)";

}
function ok(){
  
  document.querySelector('video').style.filter = "blur(2px)";

}
function good(){
  
  document.querySelector('video').style.filter = "blur(0.5px) brightness(150%) contrast(90%)";

}
function draw(){
  document.querySelector('video').paintToCanvas();
  document.querySelector('video').little();
  
}


function little(pixels){

  for (i = 0; i < pixels.data.length; i = i + 4) {
    var red = pixels.data[i + 0];
     var green = pixels.data[i + 1]+100 ;
     var blue = pixels.data[i + 2];
     var alpha = pixels.data[i + 3];
   }
  
  return pixels;

}
