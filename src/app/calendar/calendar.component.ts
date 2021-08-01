import { Component, OnInit } from '@angular/core';
import { Day } from '../model/day';
import { Task } from '../model/task';
import { CalendarCreator } from '../service/calendarCreator.service';
import { Month } from '../model/month';
import { DatePipe } from '@angular/common';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [DatePipe]
})
export class CalendarComponent implements OnInit {

  constructor(private calendarCreator: CalendarCreator, private datepipe: DatePipe) { }

  
  ngOnInit() {
    this.month = this.calendarCreator.getCurrentMonth();
    this.currentMonth = this.month.monthNumber;
    this.currentYear = this.month.year;
  }

  public currentYear: number;
  public currentMonth: number;
  public myDate = new Date();
  

  public month: Month;
  public selectedDay: Day;
  public newTask: Task;
  public datePipe:DatePipe;

  public weekDays = [ 
    { title: 'Sunday', style: 'red'},
    { title: 'Monday', style: ''},
    { title: 'Tuesday', style: ''},
    { title: 'Wednesday', style: ''},
    { title: 'Thursday', style: ''},
    { title: 'Friday', style: ''},
    { title: 'Saturday', style: 'red'},
  ];


  public onSelectDay(day: Day) {
    this.newTask = new Task();

    this.selectedDay = day;  
  }

  public onNextMonth() {
    this.currentMonth++;

    if(this.currentMonth == 13){
      this.currentMonth = 1;
      this.currentYear++;
    }

    this.month = this.calendarCreator.getMonth(this.currentMonth, this.currentYear);
  }

  public onPrevMonth() {
    this.currentMonth--;

    if(this.currentMonth < 1){
      this.currentMonth = 12;
      this.currentYear--;
    }

    this.month = this.calendarCreator.getMonth(this.currentMonth, this.currentYear);
  }

  myFunction(){
    this.myDate=new Date();
    let latest_date =this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
   }
  
}








































































