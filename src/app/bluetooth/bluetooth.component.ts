import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bluetooth',
  templateUrl: './bluetooth.component.html',
  styleUrls: ['./bluetooth.component.css']
})
export class BluetoothComponent implements OnInit {

  selected: number;
  selectDevice: string;
  bluetoothDevice = [{'id': 1, 'name': 'appareil 1'}, {'id': 2, 'name': 'appareil 2'}, {'id': 3, 'name': 'appareil 3'}];

  constructor() { }

  ngOnInit() {  
  }

  handleConnect() {
    console.log(this.selected);
  }
}
