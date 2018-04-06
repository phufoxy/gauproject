import { NavbarComponent } from './../../../src/navbars/navbar.component';
import { NavbarService } from './../../../src/navbars/navbar.service';
import { LogoComponent } from './../../../src/navbars/logo.component';
import { LinksComponent } from './../../../src/navbars/links.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from '../../../src';
import { IndexComponent } from './components/index/index.component';
import {RouterModule,Routes} from '@angular/router';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {SlideshowModule} from 'ng-simple-slideshow';
import { TableComponent } from './dashboard/table/table.component';
import { ProfileUserComponent } from './dashboard/profile-user/profile-user.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material';
import 'hammerjs';
import { FormComponent } from './dashboard/form/form.component';
import { GeneralComponent } from './dashboard/general/general.component';
import { TableteacherComponent } from './dashboard/tableteacher/tableteacher.component';
import { TablestudentComponent } from './dashboard/tablestudent/tablestudent.component';
import { ClassComponent } from './dashboard/class/class.component';
const appRouter: Routes=[
  {path:'',component:IndexComponent},
  {path:'table',component:TableComponent},
  {path:'tableteacher',component:TableteacherComponent},
  {path:'student',component:TablestudentComponent},
  {path:'profile',component:ProfileUserComponent},
  {path:'form',component:FormComponent},
  {path:'general',component:GeneralComponent},
  {path:'class',component:ClassComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TableComponent,
    ProfileUserComponent,
    FormComponent,
    GeneralComponent,
    TableteacherComponent,
    TablestudentComponent,
    ClassComponent,
  ],
  imports: [
    MatInputModule,
    MatTableModule,
    MatMenuModule,
    HttpModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    BrowserAnimationsModule,
    SlideshowModule,
    BrowserModule,
    RouterModule.forRoot(appRouter),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [NavbarService],
  bootstrap: [AppComponent],
  exports: [ NavbarComponent, LinksComponent, LogoComponent],
})
export class AppModule {
}
