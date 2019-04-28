import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bluetooth',
  templateUrl: './bluetooth.component.html',
  styleUrls: ['./bluetooth.component.css']
})
export class BluetoothComponent implements OnInit {

  selectDevice: string;
  bluetoothDevice = ['appareil 1', 'appareil 2', 'appareil 3'];

  constructor() { }

  ngOnInit() {  
  }

}
