window.addEventListener("DOMContentLoaded", function(){

    'use strict';

    // tab

    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

        
        function hideTabContent (a) {
            for (let i = a;i < tabContent.length;i++){
                tabContent[i].classList.remove("show");
                tabContent[i].classList.add("hide");
            }
        }
        hideTabContent(1);

        function showTabContent (b){
            if(tabContent[b].classList.contains("hide")){
                tabContent[b].classList.remove("hide");
                tabContent[b].classList.add("show");
            }
        }
        info.addEventListener("click", function(event) {
            let target = event.target;

         if(target && target.classList.contains("info-header-tab")){
             for (let i = 0;i < tab.length;i++){
                 if(target == tab[i]){
                     hideTabContent(0);
                     showTabContent(i);
                     break;
                 }
             }
         }

            // timer\

         let deadLine = '2020-08-13';
        
         function getTimeRemaining (endtime){
             let t = Date.parse(endtime) - Date.parse(new Date()),// метод parse () превращает любую дату в кол-во миллисекунд начиная с 1 января 1970г;
                 seconds = Math.floor((t/1000) % 60),
                 minutes = Math.floor((t/1000/60) % 60),
                 hours = Math.floor((t/(1000*60*60)));
                //  hours = Math.floor((t /1000*60*60) % 24),// если хотим найти дни
                //  days = Math.floor((t / (1000*60*60*24)));// если хотим найти дни 

                return {
                    'total':t,
                    'hours': hours,
                    'minutes': minutes,
                    'seconds': seconds,
                    'zero': "00"
                };
            }

            function setClock (id, endtime){
                let timer = document.getElementById(id),
                    hours = timer.querySelector(".hours"),
                    minutes = timer.querySelector(".minutes"),
                    seconds = timer.querySelector(".seconds"),
                    timeInterval = setInterval(updateClock,1000);
            

            function updateClock(){
                let t = getTimeRemaining(endtime);

                function beforeZerro (num){
                    if (num <= 9) {
                     return '0' + num;
                    } else {
                        return num;
                    }
                };
                hours.textContent = beforeZerro(t.hours);
                minutes.textContent = beforeZerro(t.minutes);
                seconds.textContent = beforeZerro(t.seconds);

                if (t.total <= 0){
                 hours.textContent = t.zero;
                 minutes.textContent = t.zero;
                 seconds.textContent = t.zero;
                 clearInterval(timeInterval);
                }
        
            }
        }
        
            setClock("timer", deadLine);
        });


    // modal 

    let more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close");

        more.addEventListener("click", function(){
            overlay.style.display ="block";
            this.classList.add("more-splash");
            document.body.style.overflow = 'hidden';//запретили прокрутку страницы как только открывается модальное окно
        });
         close.addEventListener("click", function(){
             overlay.style.display = "none";
             more.classList.remove("more-splash");
             document.body.style.overflow = '';// сняли запрет на прокрутку окна
         });
             
        const descriptBtn = document.querySelectorAll(".description-btn");//привязали модальное окно к кнопкам - "Узнать подробнее "

          descriptBtn.forEach(function (btn){
              btn.addEventListener("click", function(){
                  overlay.style.display = "block";
              })
          
        });

        
            


















    });

