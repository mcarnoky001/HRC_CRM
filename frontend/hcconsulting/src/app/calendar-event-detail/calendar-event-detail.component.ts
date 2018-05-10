import { Component, OnInit,ChangeDetectionStrategy,ViewChild,TemplateRef,Input,OnChanges,SimpleChanges} from '@angular/core';
import {startOfDay,endOfDay,subDays,addDays,endOfMonth,isSameDay,isSameMonth,addHours} from 'date-fns';
import { Subject } from 'rxjs/Subject';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {CalendarEvent,CalendarEventAction,CalendarEventTimesChangedEvent} from 'angular-calendar';

@Component({
  selector: 'app-calendar-event-detail',
  templateUrl: './calendar-event-detail.component.html',
  styleUrls: ['./calendar-event-detail.component.css']
})
export class CalendarEventDetailComponent implements OnInit,OnChanges {

  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  @Input() CalendarEvent: CalendarEvent;

  view: string = 'month';

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

   constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(){
  	this.modalData = {action:"Clicked",event: this.CalendarEvent};
  }

  ngOnChanges(changes: SimpleChanges) {
        if (changes['CalendarEvent']) {
            let variableChange = changes['CalendarEvent'];
            this.modalData = {action:"Clicked",event: variableChange.currentValue};
        }
    }

}
