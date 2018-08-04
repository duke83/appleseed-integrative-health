import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PaperScope, Project, Path, Point, Tool, View } from 'paper';

@Component({
  selector: 'app-paper-graph',
  templateUrl: './paper-graph.component.html',
  styleUrls: ['./paper-graph.component.css']
})
export class PaperGraphComponent implements OnInit {

  @ViewChild('canvasElement') canvasElement: ElementRef;
  scope: PaperScope;
  project: Project;
  yAxis: Path;



  constructor() { }

  ngOnInit() {
    this.scope = new PaperScope();
    this.project = new Project(this.canvasElement.nativeElement);
    this.yAxis = new Path();
    // ... add some points, set some properties
    this.yAxis.strokeColor = 'black';
    this.yAxis.add(new Point(10, 10));
    this.yAxis.add(new Point(10, 300));
    this.yAxis.add(new Point(300, 300));

    this.project.activeLayer.addChild(this.yAxis);
  }

  changeColor() {
    this.yAxis.strokeColor = 'green';
    this.yAxis.strokeWidth = 20;
    this.scope.view.onFrame = (event) => {
      console.log(event);
     this.yAxis.rotate(3);
    };
  }


}
