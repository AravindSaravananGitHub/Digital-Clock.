
const week=document.querySelectorAll(".week span");
const h=document.querySelectorAll(".h");
const m=document.querySelectorAll(".m");
const s=document.querySelectorAll(".s");
const meridean=document.querySelectorAll(".meridean span");
const date=document.querySelector('.date');
const month_span=document.querySelectorAll(".month span");

function aravind(){
    
    // Date
    var time=new Date();
    var day=time.getDate();
    day=day<10?"0"+day:day;
    var mon=time.getMonth()+1;
    mon=mon<10?"0"+mon:mon;
    var ye=time.getFullYear();

    console.log(day,mon,ye);

    date.innerHTML=`${day} - ${mon} - ${ye}`;

    // Day
    console.log(time.getDay());
    week[time.getDay()].classList.add('activeweek');

    // Month
    month_span[time.getMonth()].classList.add('activemonth');

    // Time
    var hr=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
    
    if(hr>12){
        hr-=12;
        meridean[1].classList.add('active');
    }
    else{
        if(hr==0){
            hr=12;
        }
        meridean[0].classList.add('active');
    }

    hr=hr<10?"0"+hr:hr;
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;

    hr=hr.toString();
    min=min.toString();
    sec=sec.toString();

    h[0].innerHTML=hr[0];
    h[1].innerHTML=hr[1];

    m[0].innerHTML=min[0];
    m[1].innerHTML=min[1];

    s[0].innerHTML=sec[0];
    s[1].innerHTML=sec[1];
    
}

setInterval(aravind,1000);