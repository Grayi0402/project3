import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent implements OnInit {
@Input('control') control;
@Input('name-control')name;

  constructor() { }

  ngOnInit() {
  }
  get message(){

  	for(let err in this.control.errors){
  		if(this.control.dirty){
  			return this.getErrorMessage(err,this.control.errors[err])
  		}
  	}
  	return null;
  }
  getErrorMessage(err, value){
  	let message={
  		'required':`${this.name} không được bỏ trống`,
  		'pattern':`${this.name} không hợp lệ`,
  		'minlength':`Độ dài tối thiểu là ${value.requiredLength}`,
  		'maxlength':`Độ dài tối đa là ${value.requiredLength}`
  	}
  
  	return message[err];
  }

}
