import { Component, OnInit } from '@angular/core';
import { TextPreview } from '../model/text-preview.model';

@Component({
  selector: 'app-send-text',
  templateUrl: './send-text.component.html',
  styleUrls: ['./send-text.component.css']
})
export class SendTextComponent implements OnInit {

  textToSend = '';
  textPreview: TextPreview[];
  defaultColor = 'rgb(255, 0, 0)';

  constructor() { }

  ngOnInit() {
  }

  setPreview() {
    this.textPreview = []
    let partSplit = this.textToSend.split('*');
    partSplit.forEach((p) => {
      let colorSplit = p.split(']');
      let color = (colorSplit.length > 1) ? `rgb(${colorSplit[0].substr(1)})` : this.defaultColor;
      let text = (colorSplit.length > 1) ? colorSplit[1].slice(0, -1) : colorSplit[0];
      this.textPreview = [... this.textPreview, new TextPreview(text, color)];
    });
  }

  textWriting(event) {
    this.textToSend = event.target.value;
    this.setPreview();
  }
}
