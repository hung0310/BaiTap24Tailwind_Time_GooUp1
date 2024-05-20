let clear_timeout;
let clear_interval;
let timeouts = [];
let interval = [];

function btn_start() {
    var second_txt = document.getElementById('input-second').value;
    if(second_txt) {
        let setSecond = parseInt(second_txt);
        for(let i = setSecond; i >= 0; i--) {
            clear_timeout = setTimeout(function() {
                document.getElementById('second').innerHTML = i;
                if(i == 0) {
                    document.getElementById('second').innerHTML = 'Second...';
                }
            }, (setSecond - i) * 1000);
            timeouts.push(clear_timeout);

            clear_interval = setInterval(function() {
                if(setSecond % 2 == 0) {
                    if( i >= 0 ) {
                        if (i % 2 === 0) {
                            document.getElementById('animation').style.visibility = 'visible';
                        } else {
                            document.getElementById('animation').style.visibility = 'hidden';
                        }
                    }
                    i--;
                } else {
                    --i;
                    if( i >= 0 ) {
                        if (i % 2 === 0) {
                            document.getElementById('animation').style.visibility = 'visible';
                        } else {
                            document.getElementById('animation').style.visibility = 'hidden';
                        }
                    }
                }

            }, (setSecond - i) * 1000);
            interval.push(clear_interval);
        }

        document.getElementById('input-second').value = '';
    } else {
        alert('Enter your second');
    }
}

function btn_clear_timeout() {
    clearTimeout(clear_timeout);
    alert('Finish');
    document.getElementById('input-second').value = '';
    document.getElementById('second').innerHTML = 'Second...';

    for (let i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
    }
    timeouts = [];
}

function btn_clear_animation() {
    clearInterval(clear_interval);
    alert('Finish');
    document.getElementById('animation').style.visibility = 'visible';
    for (let i = 0; i < interval.length; i++) {
        clearTimeout(interval[i]);
    }
    interval = [];
}