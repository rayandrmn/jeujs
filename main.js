 







 
 




 

document.addEventListener('DOMContentLoaded', () =>{

   let ensaut = false;
   let gravité = 0.9;
   const contener = document.querySelector(".contener");
   let gameover = false;
   const alert = document.getElementById("alert");
    
    document.addEventListener('keyup', touche);

    function touche(e){
         if(  e.keyCode === 90) {
             if(ensaut == false){
                 ensaut = true;
                 console.log("cc");
                 saut()
             }
        }
    }
    let position = 0;

    function saut(){
         let count = 0;
        let temps = setInterval(function(){
            if(count == 15){
                clearInterval(temps)
                console.log("descend");
                let downtimer = setInterval(function(){
                    if(count == 0){
                        clearInterval(downtimer);
                        ensaut = false;    
                    }
                    position -= 5;
                    count --;
                    position = position * gravité;
                    document.querySelector(".perso").style.bottom = `${position}px`;
                })
 

                 
            }

            console.log("saut");
             
            position +=30;
            count ++
            position = position * gravité
            document.querySelector(".perso").style.bottom = `${position}px`;
            console.log(document.querySelector(".perso").style.bottom)

            
    
        },15)
    }


    function generateurObstacle(){
        let randomtime = Math.random()* 5000;
        let obstaclePosition = 100;
        const obstacle = document.createElement("div");
        console.log(obstaclePosition);
        console.log(obstacle.style.left)
        if(!gameover)obstacle.classList.add("obstacle");
        contener.appendChild(obstacle);
        obstacle.style.left = `${obstaclePosition}%`;

        let timerid = setInterval(function(){
            if(obstaclePosition > 1 && obstaclePosition <3 && position < 50 ){
                 clearInterval(timerid);
                alert.innerHTML = 'game over';
                gameover = true;
                while(contener.firstChild){
                    contener.removeChild(contener.lastChild);
                }
            }


            obstaclePosition -=1;
            obstacle.style.left = `${obstaclePosition}%`;
             
        },20)
       if(!gameover){

       } setTimeout(generateurObstacle, randomtime);
        
    }
    generateurObstacle();

let scoore = 0;

    function generateurpiece(){
        let randomtime = Math.random()* 3000;
        let piecePosition = 100;
        const piece = document.createElement("div");
        const lescore = document.querySelector(".score")
        if(!gameover)piece.classList.add("piece");
        contener.appendChild(piece);
        piece.style.left = `${piecePosition}%`;

        let timerid = setInterval(function(){
            if(piecePosition > 1 && piecePosition <3 && position < 50 ){
                  
                 
                 scoore += 2;
                 lescore.innerHTML = scoore;
                 console.log(scoore);        
            }


            piecePosition -=1;
            piece.style.left = `${piecePosition}%`;
             
        },20)
       if(!gameover){

       } setTimeout(generateurpiece, randomtime);
        
    }

     generateurpiece();



      let droite = 0 ;


      function enzo(){
        const character = document.querySelector(".frame");
        let positionsprite = character.style.right;
        console.log(positionsprite);
        droite += 32;
       let cacadroite = -353;
       let distanceframe = droite + cacadroite
       character.style.right = `${distanceframe}px`;

       if(positionsprite == "-33px"){
           console.log("camarche")
          //caca.style.right = `${cacadroite}%`;
           droite =  0 ;
       }

      }setInterval( enzo, 33);

       enzo();

      

        
  
     

})


 
    


 









//function ennemie(){
//    setInterval(function Apparition(){ 
//        //this code runs every second 
//        const contener = document.//getElementsByClassName("contener");
//    
 //   let random = Math.floor(Math.random() * (50 - 10)//) + 10;
//    const lol = document.querySelector(".contener").innerHTML = ` <div class="animation-obstacle" //style="height: ${random}px;"</div>`;
//    lol;
//    
//    }, 3500);
//}
 //
// ennemie();

 

//let perso = new Object();
//perso.position = "Ford";
 