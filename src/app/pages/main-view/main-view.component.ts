import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Board} from 'src/app/models/board.model'
import {Column} from 'src/app/models/column.model'
import { from } from 'rxjs';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  constructor() { }

  board : Board = new Board('Test', [
    new Column('Ideas', [
      "First idea",
      "Second idea",
      "Third idea"
    ]),
    new Column('Todo', [
      "todo 1",
      "todo 2"
    ]),
    new Column('In progress', [
      "In progress 1",
      "In progress 2",
      "In progress 3"
    ]),
    new Column('To review', [
      "to review 1",
      "to review 2"
    ]),
    new Column('Done', [
      "Finished 1",
      "Other one finished"
    ])
  ])

  ngOnInit(): void {
  }

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
