import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDatas } from 'src/app/modules/dialog';

@Component({
  selector: 'app-dialog-card',
  templateUrl: './dialog-card.component.html',
  styleUrls: ['./dialog-card.component.css']
})
export class DialogCardComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogCardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDatas
  ) { }

  ngOnInit(): void {
  }

}
