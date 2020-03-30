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

function setup(){
   


}



function draw(){




}

function display() {  
    var checkRadio = document.querySelector( 
        'input[name="sal"]:checked'); 
    if(checkRadio != null) { 
      document.getElementById("disp").innerHTML 
          = checkRadio.value 
          + " radio button checked"; 
          document.querySelector('video').style.filter = " contrast(130%) hue-rotate(50deg)";
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