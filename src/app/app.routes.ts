import { Routes } from '@angular/router';
import { PATH_HOME, PATH_BLUETOOTH, PATH_SENDTEXT, PATH_SPEED } from './app.routes.constantes';
import { HomeComponent } from './home/home.component';
import { BluetoothComponent } from './bluetooth/bluetooth.component';
import { SendTextComponent } from './send-text/send-text.component';
import { WheelSpeedComponent } from './wheel-speed/wheel-speed.component';

export const ROUTES: Routes = [
    { path: PATH_HOME, component: HomeComponent },
    { path: PATH_BLUETOOTH, component: BluetoothComponent },
    { path: PATH_SENDTEXT, component: SendTextComponent },
    { path: PATH_SPEED, component: WheelSpeedComponent },
];
