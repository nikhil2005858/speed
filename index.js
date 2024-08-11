function contacts(){
    document.getElementById('work1').innerHTML=`   <center><img src="IM1.png" alt="" width="600px" height="300px" usemap="#break" id="c1"></center>
            <map name="break">
                <area shape="rect" title="Dhanush" coords="0,0,150,400" onclick="myfun(1)" alt="">
                <area shape="rect" title="Vignesh" coords="152,0,300,400" onclick="myfun(2)"  alt="">
                <area shape="rect" title="Nikhil" coords="302,0,450,400"  onclick="myfun(3)"  alt="">
                <area shape="rect" title="Pranav" coords="402,0,600,400" onclick="myfun(4)"  alt="">
            </map>
    </center>
       `;}
       function myhome(){
    document.getElementById('work1').innerHTML=` <center><h1 style="text-transform: uppercase; "><b>if you don't believe you are the best,then you will never achive all that you are capable of.</b></h1>`
    

}
function myproject(){
    document.getElementById('work1').innerHTML=`     <div class="cd1">
        <a href="https://microintel.github.io/cie/" >
            <img id="img" class="pimg" src="h2.jpg" width="200px" height="150px" >
            <div class="link">Diploma CIE Book Evaluator</div>
        </a>
    </div>
    <div class="cd1">
        <a href="https://microintel.github.io/cie/" >
            <img id="img" class="pimg" src="h2.jpg" width="200px" height="150px" >
            <div class="link">Diploma CIE Book Evaluator</div>
        </a>
    </div>
    <div class="cd1">
        <a href="https://microintel.github.io/cie/" >
            <img id="img" class="pimg" src="h2.jpg" width="200px" height="150px" >
            <div class="link">Diploma CIE Book Evaluator</div>
        </a>
    </div>
    <div class="cd1">
        <a href="https://microintel.github.io/cie/" >
            <img id="img" class="pimg" src="h2.jpg" width="200px" height="150px" >
            <div class="link">Diploma CIE Book Evaluator</div>
        </a>
    </div>`
    

}
function news(){
    document.getElementById('work1').innerHTML=` <center><h1 style="text-transform: uppercase; "><b>loading.........</b></h1></center>`
}
function about(){
    document.getElementById('work1').innerHTML=`
        <div >
          <center><h2 ><u>About MicroIntel</u></h2></center>
          <br>
          <center>
          <video style="border-radius:20px;" width="190vw" height="200vh" controlsList="nodownload" poster="poster.jpg" preload="none" controls disablePictureInPicture>
          <source src="https://microintel.github.io/Resources/videos/about_mi_by_CR.mp4" type="video/mp4">
          </video>
          </center>
          <center>
          <p>Microintel.Inc is an Multinational computer software company headquartered in , Pandora.</p>
          <p>The term "microintel" is combination of "micro" and "intel", which refers to intelligence.In this sense, "microintel" could be used to describe a small amount of intelligence or knowledge.</p>
          It develops software for web development and more.
          Some of its most popular products include Micro Browser, Micrography, Microdisk, XOX Game, Result portal, Cie Calculator... </p>
          <p>Microintel was founded in 2023 by Microintel team. </p>
          <p>Microintel's products are used by number of people around the world, from creative professionals to students to everyday users. The company's software has been used to create some of the most iconic documents in history, including the Micro Browser, MicroDisk & MicroGraphy and more.</p>
          </center>
          </div>
          <div >
            <center><h2><u>Asset Of Microintel</u></h2></center>
            <center><img src="ce.jpg" style="width:140px;height:200px;border-radius:10px;"/><br><font style="font-size:12px;">CEO OF MICROINTEL.INC</font><br></center>
            
             <center><p> Ms, Darling, CEO of the Microintel</p>
               <p> Mr, Nikil, BM-Founder-Coder-Shareholder of Microintel</p>
               <p> Mr, Vignesh, Founder-Coder-Shareholder of Microintel</p>
               <p> Mr, Raghavendra, QA Manager & Distributor of Microintel</p>
               <p> Mr, Vinay, QA Tester & Distributor of Microintel</p>
               <p> Mr, Amith, Ideator, Designer of Microintel</p>
       <p>Mr, Dhanush, tester of Microintel</p>
                <p>Mr, Pranav, primary investor of Microintel</p>
              </center>
            </div>`
}

function myfun(a){
   if (a==1){
    document.getElementById('work1').innerHTML="gus";
   }
else if(a==2){
    document.getElementById('work1').innerHTML="jessi";
}
else if(a==3){
    document.getElementById('work1').innerHTML="walter.white";
}
else if(a==4){
    document.getElementById('work1').innerHTML="mike";
}
}