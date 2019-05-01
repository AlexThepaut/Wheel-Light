import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BluetoothComponent, BluetoothErrorDialog } from './bluetooth/bluetooth.component';
import { SendTextComponent } from './send-text/send-text.component';
import { WheelSpeedComponent } from './wheel-speed/wheel-speed.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSlideToggleModule, 
  MatIconModule, 
  MatButtonModule, 
  MatInputModule, 
  MatSelectModule, 
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BluetoothComponent,
    SendTextComponent,
    WheelSpeedComponent,
    NavbarComponent,
    BluetoothErrorDialog
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
  ],
  entryComponents: [
    BluetoothComponent,
    BluetoothErrorDialog
  ],
  providers: [
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
