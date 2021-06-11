import {Component, OnInit} from '@angular/core';
import {NgbCalendar, NgbDate, NgbDateStruct, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'Ng-bootstrap sample app';

    date: NgbDateStruct;

    time: NgbTimeStruct;

    // Variables for the range
    hoveredDate: NgbDate;
    fromDate: NgbDate;
    toDate: NgbDate | null = null;

    constructor(private calendar: NgbCalendar) {
    }

    ngOnInit(): void {
        const now = new Date();

        /* this.date = {year: now.getFullYear(), month: (now.getMonth() + 1), day: now.getDate()};*/
        this.date = this.calendar.getToday();

        this.time = {hour: now.getHours(), minute: now.getMinutes(), second: now.getSeconds()};
    }

    // Methods for the range handling
    onDateSelection(date: NgbDate): void {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
        } else {
            this.toDate = null;
            this.fromDate = date;
        }
    }

    isHovered(date: NgbDate): boolean {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    }

    isInside(date: NgbDate): boolean {
        return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
    }

    isRange(date: NgbDate): boolean {
        return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
    }
}
