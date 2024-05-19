let date= new Date();
//console.log(date);//indicates the timezone offset from UTC (in this case, Pacific Daylight Time, which is 7 hours behind UTC) 
//(Pacific Daylight Time) is the timezone name
//------------------------------
// setting time format:-

let hours=date.getHours();
//console.log(hours); for checking purpose,that this hour meet real time or not .
let minutes=date.getMinutes();
//console.log(minutes)//for checking purpose,that this minutes meet real time or not .
let seconds=date.getSeconds();
//console.log(seconds)//for checking purpose,that this seconds meet real time or not .
let milliseconds=date.getMilliseconds();
//console.log(milliseconds)////for checking purpose,that this milliseconds meet real time or not .
//------------------------------

//setting date format:-

let currentdate=date.getDate();
let year=date.getFullYear();

//As months and days are works on indexes therfore index in an array starts from 0 to the end a/c to month 11 and dys 6.
//let month=date.getMonth()+1; 
//console.log(month);//check months.
//or you can do as:
let months=["January","February","March","April","May","June","July","August","September","October","November","December"]
let currentMonth=months[date.getMonth()];
//console.log(currentMonth);

let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]//days start from sunday
let currentday=days[date.getDay()];
//-----------------------------------------

// To customize date format a/c to your choice As;-
//date format types:-
//1- ISO i.e year-month-date.
//2- ShortDate i.e 05/20/2034(month/date/year)
//3- LongDate  i.e May 20,2024 or 20 May,2024

let user_customize_date=new Date("May 20,2024")//on user choice format, use inverted commas inside bracket.
//console.log(user_customize_date); //this shows formatstill as:(year-month-date :hours:minutes:seconds:milliseconds) and still shows result in UTC format.

//so we do as:-
let  time=date.getTime();
console.log(time);//Now this shows a number which is a milliseconds time , you can copy it from here and paste on it on google and convert this numbers i.e ms to time. you got a time from any convertor website. convert ms to local time.
// It logs time finally in milliseconds.
//Auhtor-Huma Mohsin
