import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicess/data.service';

@Component({
  selector: 'app-parentss',
  templateUrl: './parentss.component.html',
  styleUrls: ['./parentss.component.css']
})
export class ParentssComponent implements OnInit {

  constructor(private data: DataService) { }
  message = " Wow! this is Wesome "
  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.message)
  }

  receiveMessage($event: any){
    this.message = $event 
  }

}
