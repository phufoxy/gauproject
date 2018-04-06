import { Component, OnInit, } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  username:String;
  password:String;
  constructor( private router:Router) { }
  imageUrlArray=["https://cdn.vox-cdn.com/uploads/chorus_image/image/56789263/akrales_170919_1976_0104.0.jpg",
  "https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg",
  "https://cdn.vox-cdn.com/uploads/chorus_asset/file/9278671/jbareham_170917_2000_0124.jpg"
    ]
  ngOnInit() {
  }
  login(form:NgForm){
   
      if(form.value.email === "vanphudhsp2015@gmail.com" && form.value.password=== "0961688293"){
        localStorage.setItem("email",form.value.email);
        this.router.navigate(['/table']);
      }
  }

}
