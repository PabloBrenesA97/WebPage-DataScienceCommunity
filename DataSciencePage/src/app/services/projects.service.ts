import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CommonService } from './common.service';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  gists: Array<string>;
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
        this.gists = new Array<string>();
        data.forEach(element => {
          this.gists.push(userName+"/"+element.id);
        });
      }, error: (err : HttpErrorResponse)  => this.commonService.openSnackBar(`Error: ${err}`,"OK")
    });;
  }
}
