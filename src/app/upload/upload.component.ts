import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

   uploadedFiles: Array < File > ;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

      fileChange(element) {
        this.uploadedFiles = element.target.files;
    }

    upload( $event, title, desc) {
        $event.preventDefault();
       
        console.log("test");
        for (var i = 0; i < this.uploadedFiles.length; i++) {
            let formData = new FormData();
            console.log(this.uploadedFiles[i].name);
            formData.append("image", this.uploadedFiles[i], this.uploadedFiles[i].name);
            formData.append("desc", desc.value);
            formData.append("title", title.value);
             this.http.post('http://localhost:5000/api/upload', formData)
            .subscribe((response) => {
                alert("Uploaded");
                console.log('response received is ', response);
            })

        }
        

    }


}
