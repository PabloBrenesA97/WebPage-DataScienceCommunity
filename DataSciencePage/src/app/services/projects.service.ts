import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonService } from './common.service';
import { Gist } from '../models/gist.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  gists: Array<Gist>;
  constructor(
    private http: HttpClient,
    private commonService: CommonService
  ) {
  }

  /**
   * @function Get gist ids by user name
   * @param userName
   */
  getAllGistIds(userName: string) {
    this.http.get(`https://api.github.com/users/${userName}/gists`).subscribe({
      next: (data: any) => {
        this.gists = new Array<Gist>();
        data.forEach(element => {
          let name: string = (Object.keys(element.files)[0]);
          let gistURL: string = userName+"/"+element.id;
          let lenguage: string = element.files[Object.keys(element.files)[0]].language;
          this.gists.push(new Gist(name,gistURL,lenguage));
        });
      }, error: (err : HttpErrorResponse)  => this.commonService.openSnackBar(`Error: ${err}`,"OK")
    });;
  }
}
