var counter = 1;
setInterval(() => {
    document.getElementById('radio'+ counter).checked = true;
    counter++;
    if(counter >12){
        counter = 1;
    }  
}, 5000);
