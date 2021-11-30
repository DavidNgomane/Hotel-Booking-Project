import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  path = null;

  constructor(private angularfirebase: AngularFireStorage, private http: HttpClient) { }

  ngOnInit(): void {
  }

  upload(event: any){
    this.path = event.target.files[0]
  }

  uploadImage(){
    console.log(this.path)

    this.angularfirebase.upload("/room"+Math.random()+this.path,this.path)
  }
}
