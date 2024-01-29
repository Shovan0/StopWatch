const hourelement = document.querySelector(".hour");
const minuteelement = document.querySelector(".minute");
const secondelement = document.querySelector(".second");
const startelement = document.querySelector(".start");
const stopelement = document.querySelector(".stop");
const resetelement = document.querySelector(".reset");

let mili=0,s=0, m=0, h=0,setinterval;

function startwatch()  {
    setinterval = setInterval(() => {
        if(s<59) {
            s++;
        }
        
        else  {
            s=0;
            m++;
        }

        if(m>=59)  {
           m=0;
           h++;
        }

        secondelement.innerText = String(s).padStart(2, "0");
        minuteelement.innerText = String(m).padStart(2, "0");
        hourelement.innerText = String(h).padStart(2, "0");
    }, 1000);
}
startelement.addEventListener("click", startwatch);
stopelement.addEventListener("click", (()=>{
    clearInterval(setinterval);
}))
resetelement.addEventListener("click", (()=>{
    s=0,m=0,h=0;
    secondelement.innerText = String(s).padStart(2, "0");
    minuteelement.innerText = String(m).padStart(2, "0");
    hourelement.innerText = String(h).padStart(2, "0");
}))

