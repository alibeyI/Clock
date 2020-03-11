const deg = 6
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();

    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();
   
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    // console.log(h+":"+m+":"+s)

    document.getElementById('clock').innerHTML = h+":"+m+":"+s;
    
    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})

