import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-shared-dialog',
  templateUrl: './shared-dialog.component.html',
  styleUrls: ['./shared-dialog.component.scss']
})
export class SharedDialogComponent implements OnInit {
  value: any;

  constructor(private dialogRef: MatDialogRef<SharedDialogComponent> , @Inject(MAT_DIALOG_DATA) public data: any,) {
    dialogRef.disableClose = true;
  }
  center(){
    this.value='center'
    this.closeModal()
  }
  coach(){
    this.value='coach'
    this.closeModal()
  }
  ngOnInit(): void {
  }
  closeModal() {
    this.dialogRef.close({ data: this.value });
  }
}
