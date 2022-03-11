import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/servicess/data.service';

@Component({
  selector: 'app-childs',
  templateUrl: './childs.component.html',
  styleUrls: ['./childs.component.css']
})
export class ChildsComponent implements OnInit {

  massage: string = "Hello Victori !"

  @Output() messageEvent = new EventEmitter<string>();

  constructor(private data: DataService) { }
 

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.massage)
  }

  sendMessage(){
    this.messageEvent.emit(this.massage);
  }

}
