const link=document.querySelector('a');
link.textContent="Why it is so hard?";
link.href="https://www.youtube.com/watch?v=6wIXBBCvr9w&feature=youtu.be&fbclid=IwAR3VcEQ4ayAKPv7hWTtJHLGOtFARiorckjYH0BfQlz6MWv8dS0orCDXLiqU";
const sect=document.querySelector('section');
const para=document.createElement('p');
para.textContent="I'm in darestraights";
sect.appendChild(para);

/*[...Array(1000)].forEach((_,i)=>{
    const p=document.createElement('p');
    p.textContent=i;
    sect.appendChild(p);
});*/

const clock=document.querySelector('.clock');
const showClock = ()=>clock.innerText=(new Date()).toLocaleTimeString();
setInterval(showClock);