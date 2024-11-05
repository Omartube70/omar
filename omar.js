

let starts = document.getElementById('starts');
let moon = document.getElementById('moon');
let mountion3 = document.getElementById('mountion3');
let mountion4 = document.getElementById('mountion4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let novil = document.querySelector('.novil')

onscroll = function() {
 let value = scrollY;
  starts.style.left = value + 'px'
 moon.style.top = value *4 + 'px'
 mountion3.style.top = value * 2 + 'px'
  mountion4.style.top = value * 1.5 + 'px'
  river.style.top = value  + 'px'
  boat.style.top = value  + 'px'
    boat.style.left = value * 3  + 'px'

    novil.style.fontSize = value  + 'px'
    if(scrollY >= 67 ){
          novil.style.fontSize = 67  + 'px'
            novil.style.position =  'fixed'
              if( scrollY >= 400){
                novil.style.display = 'none'
            }
              }
              else{
                novil.style.display = 'block'
              }
                  if( scrollY >= 127) { 

                   document.querySelector('.main').style.background =' linear-gradient(#376281,#10001f)'
                }
              
                  
                  else{
                       document.querySelector('.main').style.background =' linear-gradient(#200016,#10001f)'
                  }
                      
              
              
            }




