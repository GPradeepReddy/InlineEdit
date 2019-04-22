import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { FetchingDataService } from '../fetching-data.service';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss']
})
export class DatabindingComponent implements OnInit {
  title = 'Angular Data Binding';
  numberA: number = 10;
  numberB: number = 20;
  name: string = 'PRADEEP';
  imgUrl = './../../assets/angular.png'
  MyName: any = "Pradeep"
  InlineEditData: any;

  constructor(public _fetchingData: FetchingDataService) { }

  ngOnInit() {
    let messageElem = document.querySelector('#message');
    console.log("Text inside message element: " + messageElem.textContent);
    this._fetchingData.getInlineEdit().subscribe(data => {
      this.InlineEditData = data['InlineEdit']
    })
  }

  addTwoNumbers() {
    return this.numberA + this.numberB;
  }
  onSave($event) {
    $event.stopPropagation();
    console.log("Save operation is performed!", $event);
  }
  onDivClick() {
    alert("Div clicked")
  }
  onPressEnter($event) {
    console.log("Entered text: ", $event.target.value);
  }
  currentFlag: boolean = true;
  currentValue() {
    this.currentFlag = (this.currentFlag === false) ? true : false;
  }
  fname = 'pradeep';
  lname = "Reddy";

  fullname() {
    return `Your first Name ${this.fname} Your last Name ${this.lname}`
  }

  alertClass = "alert alert-success";
  public html = `This text is <b>data bound</b>!<script>alert("This is dangerous!!!")</script>`
  public size = '20px';
  public fontStyle = 'italic';
  public color = 'red';
  isPrimary: boolean = true;

  toggleBtn() {
    if (this.isPrimary) {
      this.isPrimary = false;
    } else {
      this.isPrimary = true;
    }
  }

  isInlineEdit: boolean = false;
  onInlineEdit() {
    debugger;
    this.isInlineEdit = true;
  }
  onInlineUpdate() {
    debugger;
    this.isInlineEdit = false;
  }

}
