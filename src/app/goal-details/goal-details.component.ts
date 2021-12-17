import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() goal: Goal | undefined;
  @Output() isComplete = new EventEmitter();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  GoalDetailsComponent.constructor();

  this.ngOnInit()}
}

