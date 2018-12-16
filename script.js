window.onload = function(){ 
   
    function randomInteger(min, max) {
        var rand = min + Math.random() * (max - min + 1);
        rand = rand.toFixed(1);
        return rand;
    }

    function countTotal(randomNum){
        totalNum = Number(totalNum)  + Number(randomNum);
        let tN =  totalNum.toFixed(1);
        total.innerHTML = tN;
    }

    function nightModeFunc(el){
        if(el.checked == true){
            // console.log('true');
            body.classList.add('night');
            localStorage.setItem('nightMode', 'true');
        }else{
            // console.log('false');
            body.classList.remove('night');
            localStorage.setItem('nightMode', 'false');
        }
    }

    function localStrg(){
        if(localStorage.getItem('nightMode') == 'false'){
            console.log('1111');
            body.classList.remove('night');
            nightMode.removeAttribute('checked');
        }else{
            console.log('22222');
            body.classList.add('night');
            nightMode.setAttribute('checked', 'checked');
        }
    }


    let btn = document.querySelector('.js-btn_generate');
    let attempt = document.querySelector('.attempt_num');
    let total = document.querySelector('.total_num');
    let error = document.querySelector('.js-error');
    let num = document.querySelector('.num');
    let addAttempt = document.querySelector('.addAttempt');
    let attemptNum = 5; // попытки
    let totalNum = 0; // общее числоaddAttempt
    let random = 0; // рандомное число

    let nightMode = document.querySelector('#nightMode');
    const body =  document.querySelector('body');

    if(localStorage.getItem('nightMode') == null){
        localStorage.setItem('nightMode', 'true'); 
        body.classList.add('night');
    }else{
        localStrg();
    }
    

    attempt.innerHTML = attemptNum;
    total.innerHTML = totalNum;
    

    btn.addEventListener('click', function(e){
        random = randomInteger(-9, 9);
        num.innerHTML = random;
        --attemptNum;
        attempt.innerHTML = attemptNum;
        if(attemptNum != 0){
            countTotal(random);
        }else{
            error.innerHTML = 'Попыток больше нету!';
            btn.setAttribute("disabled", "true");
        }
        
    });

    addAttempt.addEventListener('click', function(e){
        if(attemptNum == 0){
            btn.removeAttribute("disabled");
            error.innerHTML = '';
        }
        attemptNum++;
        attempt.innerHTML = attemptNum;
        console.log(attemptNum);
    });

    // nightModeFunc(nightMode);
    nightMode.addEventListener('change', function(e){
        nightModeFunc(nightMode);
    });
 };