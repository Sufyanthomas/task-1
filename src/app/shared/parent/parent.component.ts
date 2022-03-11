import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataService } from 'src/app/servicess/data.service';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit, OnInit {

  @ViewChild(ChildComponent) child: any;

  constructor(private data: DataService) { }


  ngOnInit(): void {   
    
  }
  message = 'Hello Wolf'
  ngAfterViewInit(): void {
    this.message = this.child.message;
  }

  



}
