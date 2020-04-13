let capture;
let step = 6;
let xt

  
  
  

  
function setup() {
  createCanvas(windowWidth, windowHeight);


  capture = createCapture(VIDEO);

  capture.elt.setAttribute('playsinline', ''); //phone compatible
  capture.hide();
  pixelDensity(1);

  
  noStroke();
}

function draw() {
 
  background(255, 10);

 
  capture.loadPixels();

  for (let y = 0; y < capture.height; y += step) {
      for (let x = int(capture.width / 4); x < int(capture.width / 4 * 3); x += step) {

      
      let i = (y * capture.width + x) * 4;
  

 
      let r = capture.pixels[i];
      let g = capture.pixels[i + 1];
      let b = capture.pixels[i + 2];
      let a = capture.pixels[i + 3]*10;

   
        let mappedX = map(x, capture.width / 4 * 3, capture.width / 4, 0, width);
      let mappedY = map(y, 0, capture.height, 0, height);
let cx = 15;
let cy= 50;
let speed =1;
let jitterx =  mappedX +random(-speed,speed);
let jittery =  mappedY +random(-speed,speed);

      stroke(r, g, b, a);
    
      //  line(mappedX-100, mappedY-10,mappedX,mappedY);
      //  fill(r,g,b,a-40);
      // ellipse(mappedX-100, mappedY-10,20,20);
      if(document.getElementById('sal1').checked) {
        noFill();
        r= capture.pixels[i];
        g = capture.pixels[i+1]-100;
        b =capture.pixels[i + 2]-150;
        a =capture.pixels[i + 3]-40;
        stroke(r, r, r, a);
      
        ellipse(mappedX-100, mappedY-10,cx,cy);
      }else if(document.getElementById('sal2').checked){
        r= capture.pixels[i];
        g = capture.pixels[i+1];
        b =capture.pixels[i + 2]-150;
        a =capture.pixels[i + 3]-200;
        stroke(r, g, r, a);
        cx = 20;
        ellipse(mappedX-100, mappedY-10,cx,cy);
        
     
    }else if(document.getElementById('sal3').checked){
      r= capture.pixels[i];
      g = capture.pixels[i+1];
      b =capture.pixels[i + 2];
      a =capture.pixels[i + 3];
      stroke(r, g, b, a-70);
      strokeWeight(5);
      cx = 30;
    
      ellipse(mappedX-100, mappedY-10,cx,cy);
// ellipse(mappedX-100, mappedY-10,20,20);
    }else if(document.getElementById('sal4').checked){
      r= capture.pixels[i]+10;
      g = capture.pixels[i+1];
      b =capture.pixels[i + 2]+10;
      a =capture.pixels[i + 3];
      
      cx = 20;
      cy = 20;
      fill(r, g, b, a-30);
      ellipse(mappedX-100, mappedY-10,cx,cy);

    }

    if(document.getElementById('tim1').checked){
      r= capture.pixels[i];
      g = capture.pixels[i+1];
      b =capture.pixels[i + 2]+10;
      a =capture.pixels[i + 3]=100;
      fill(r, g, b, a - 90);
      noStroke();
   
         ellipse(-mappedX+width, mappedY, 200, 10);
           ellipse(-mappedX+width, mappedY, 14, 100);
   
          ellipse(-mappedX+width, mappedY, 3, 2);
       ellipse(-mappedX, mappedY,20,20);
    }  else if(document.getElementById('tim2').checked){
speed =3;
jitterx =  mappedX +random(-speed,speed);
jittery =  mappedY +random(-speed,speed);
//  fill(r+20,g,b,a)
      line(jitterx,jittery,jitterx,jittery);

    } else if(document.getElementById('tim3').checked){
     
      speed =6;
      jitterx =  mappedX +random(-speed,speed);
      jittery =  mappedY +random(-speed,speed);
      
            ellipse(jitterx,jittery,cx,cy);
      
          }else if(document.getElementById('tim4').checked){
            speed =40;
            jitterx =  mappedX +random(-speed,speed);
            jittery =  mappedY +random(-speed,speed);
            
                  ellipse(jitterx,jittery,cx*30,cy);


                  
                }else if(document.getElementById('stress1').checked){
                
                 
                   r= capture.pixels[i];
                              g = capture.pixels[i+1];
                              b =capture.pixels[i + 2]+10;
                              a =capture.pixels[i + 3]=100;
                              fill(r, g, b, a - 90);
                              noStroke();
                           
                                 ellipse(-mappedX+width, mappedY, 200, 10);
                                   ellipse(-mappedX+width, mappedY, 14, 100);
                           
                                  ellipse(-mappedX+width, mappedY, 3, 2);
                               ellipse(-mappedX, mappedY,20,20);
                       
                        
                      }else if(document.getElementById('stress2').checked){
                        speed =10;

                        jitterx =  mappedX +random(-speed,speed);
                        jittery =  mappedY +random(-speed,speed);
                        fill(r, g, b, a);
                              ellipse(jitterx,jittery,200,cy);
                              ellipse(jitterx,jittery,cx,cy);
                              
                            }else if(document.getElementById('stress3').checked){

                              speed =50; fill(r, g, b, a);
                  jitterx =  mappedX +random(-speed,speed);
                  jittery =  mappedY +random(-speed,speed);
                  ellipse(jitterx,jittery,cx,cy);
                        line(jitterx,jittery,jitterx,jittery);
                        
                
                                  }else if(document.getElementById('stress4').checked){
                                  
                                                       
                              speed =75;
                              
                              jitterx =  mappedX +random(-speed,speed);
                              jittery =  mappedY +random(-speed,speed);
                              fill(r,g,b,a);
                                    ellipse(jitterx,jittery,random(0,30),random(10,60));
                                    
                                  
                                        }
                          
  }
  }
}

 
