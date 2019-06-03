import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-tool-bar-with-side-bar',
  templateUrl: './tool-bar-with-side-bar.component.html',
  styleUrls: ['./tool-bar-with-side-bar.component.css']
})
export class ToolBarWithSideBarComponent implements OnInit {
  @Input()
  sideBarContentList=['Stack','About','Courses','Projects','Professional Experience','Contact me',];
  selctedChoice:string='About';
  closed=true;
  profImg='assets/black_white_pic.jpg'
  constructor() { }

  ngOnInit() {

  }
  
  onSelect(choice){
    this.selctedChoice=choice;
    
  }
  SideBarClosed(){
    this.closed=true
  }
    SideBarOpened(){
    this.closed=false
  }
  chngProfImgClr(mouseState){
    if (mouseState=='hover'){
      this.profImg='assets/high_brightness_pic.jpg'
    }
    else if (mouseState == 'out'){
      this.profImg='assets/black_white_pic.jpg'
    }

  }

}
