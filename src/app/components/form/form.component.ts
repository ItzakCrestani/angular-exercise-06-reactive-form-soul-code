import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PhoneNumbers } from 'src/app/modules/dialog';
import { DialogCardComponent } from '../dialog-card/dialog-card.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('',[
      Validators.required,
      Validators.minLength(1)
    ]),
    
    lastname: new FormControl('',[
      Validators.required,
      Validators.minLength(1)
    ]),
    
    cpf: new FormControl('',[
      Validators.required,
      Validators.minLength(11)
    ]),
    
    phoneNumbers: new FormArray([
      new FormControl('',[
        Validators.required,
        Validators.minLength(10)
      ])
    ]),
    
    adress: new FormControl('',[
      Validators.required,
      Validators.minLength(1)
    ]),
    
    complement: new FormControl(''),
    
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(1)
    ]),
    
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ]),
    
    passwordConfirmation: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
    ])
  })

  phoneNumberArray: FormArray = this.registerForm.get('phoneNumbers') as FormArray

  
  addPhone(){
    this.phoneNumberArray.push(new FormControl('',[]))
  }
  removePhone(i: number){
    this.phoneNumberArray.removeAt(i)
  }

  phoneAdd: PhoneNumbers[] = [{intPhoneNumber: '12'}];
  phoneNumber: string = ''

  mainPhoneObjects: PhoneNumbers = {intPhoneNumber: '12'}

  constructor(public dialog: MatDialog) {}

  openDialog(){

    var index = 0
    for(let i of this.phoneNumberArray.controls){
      this.phoneAdd[index].intPhoneNumber = i.value
      this.phoneAdd.push({intPhoneNumber: ''})
      index++;
    }

    var aux = this.phoneAdd.shift()
    if (aux != undefined){
      this.mainPhoneObjects = aux
      this.phoneNumber = this.mainPhoneObjects.intPhoneNumber
    }

    this.dialog.open(DialogCardComponent, {
      width: '20rem',
      data: {
        name: this.registerForm.get('name')?.value,
        lastName: this.registerForm.get('lastname')?.value, 
        username: this.registerForm.get('username')?.value, 
        cpf: this.registerForm.get('cpf')?.value,
        phoneNumber: this.phoneNumber,
        additionalPhoneNumber: this.phoneAdd,
        adress: this.registerForm.get('adress')?.value, 
        compl: this.registerForm.get('complement')?.value, 
        password: this.registerForm.get('password')?.value,
        passwordConfirmation: this.registerForm.get('passwordConfirmation')?.value
      },
    });
  }
}
