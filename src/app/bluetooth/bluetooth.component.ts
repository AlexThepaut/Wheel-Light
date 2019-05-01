import { Component, OnInit, Inject } from '@angular/core';
import { BluetoothService } from '../service/bluetooth.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-bluetooth',
  templateUrl: './bluetooth.component.html',
  styleUrls: ['./bluetooth.component.css']
})
export class BluetoothComponent implements OnInit {

  selected: number;
  selectDevice: string;
  bluetoothDevice = [{ 'id': 1, 'name': 'appareil 1' }, { 'id': 2, 'name': 'appareil 2' }, { 'id': 3, 'name': 'appareil 3' }];

  constructor(private bluetoothService: BluetoothService, public dialog: MatDialog) { }

  ngOnInit() {
    this.bluetoothService.listDevice();

  }

  handleConnect() {
    console.log(this.selected);
    const errorMsg = 'Pas de bluetooth';
    const dialogRef = this.dialog.open(BluetoothErrorDialog, {
      width: '250px',
      data: errorMsg
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'bluetooth-error-dialog',
  templateUrl: 'bluetooth-error-dialog.html',
  styleUrls: ['./bluetooth.component.css']
})
export class BluetoothErrorDialog {

  constructor(
    public dialogRef: MatDialogRef<BluetoothErrorDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
