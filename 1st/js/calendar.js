
  class current_date{
    constructor(yy,mm,dd,DD){
    this.year=yy,
    this.month=mm,
    this.date=dd,
    this.day=DD
    }
    getYear(){
      return this.year;
    }
    getMonth(){
      return this.month;
    }
    getDate(){
      return this.date;
    }
    getDay(){
      return this.day;
    }
  }
  var calendarContent;
  document.addEventListener('DOMContentLoaded', function() {
    var current = new Date();
    current_date.year=current.getFullYear();
    current_date.month=Number(current.getMonth())+1;
    current_date.date=current.getDate();
    current_date.day=current.getDay();
    calendarContent='<span class="day">일</span><span class="day">월</span><span class="day">화</span><span class="day">수</span><span class="day">목</span><span class="day">금</span><span class="day">토</span>';
    for(var i=Number(0); i<new Date(current_date.year,current_date.month-1,1).getDay();i++){
        calendarContent+='<button class="date faded"></button>';
    }
    for(var i=Number(1);i<32;i++){
        if(i==current_date.date){
          calendarContent+='<button class="date current-day">'+i+'</button>';
        }else{
          calendarContent+='<button class="date">'+i+'</button>';
        }
    }
    document.getElementById('datepicker-calendar').innerHTML=calendarContent
  });

function prevMonth(){
  current_date.month=current_date.month-1;
  calendarContent='<span class="day">일</span><span class="day">월</span><span class="day">화</span><span class="day">수</span><span class="day">목</span><span class="day">금</span><span class="day">토</span>';
  for(var i=Number(0); i<new Date(current_date.year,current_date.month,1).getDay();i++){
    calendarContent+='<button class="date faded"></button>';
}
for(var i=Number(1);i<32;i++){
  if(new Date(current_date.year,current_date.month-1,i).getMonth()+1>current_date.month){
    break;
  }
    if(i==current_date.date){
      calendarContent+='<button class="date current-day">'+i+'</button>';
    }else{
      calendarContent+='<button class="date">'+i+'</button>';
    }
}
document.getElementById('datepicker-calendar').innerHTML=calendarContent;
document.getElementById('month-name').innerText=current_date.year+'년 '+current_date.month+'월';
}
function prefMonth(){
  current_date.month=current_date.month+1;
  calendarContent='<span class="day">일</span><span class="day">월</span><span class="day">화</span><span class="day">수</span><span class="day">목</span><span class="day">금</span><span class="day">토</span>';
  for(var i=Number(0); i<new Date(current_date.year,current_date.month-1,1).getDay();i++){
    calendarContent+='<button class="date faded"></button>';
}
for(var i=Number(1);i<32;i++){
  if(new Date(current_date.year,current_date.month-1,i).getMonth()+1>current_date.month){
    console.log(new Date(current_date.year,current_date.month,i).getMonth());
    console.log(current_date.month);
    break;
  }
    if(i==current_date.date){
      calendarContent+='<button class="date current-day">'+i+'</button>';
    }else{
      calendarContent+='<button class="date">'+i+'</button>';
    }
}
document.getElementById('datepicker-calendar').innerHTML=calendarContent;
document.getElementById('month-name').innerText=current_date.year+'년 '+current_date.month+'월';
}
  
function writeCalendar(year,month){

}