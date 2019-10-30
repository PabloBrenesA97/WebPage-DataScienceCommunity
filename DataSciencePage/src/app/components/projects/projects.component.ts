import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  searchText;
  userNameGist = "PabloBrenesA97";
  constructor(
    public projectsService: ProjectsService
  ) { }

  ngOnInit() {
    if(!this.projectsService.gists)
      this.projectsService.getAllGistIds(this.userNameGist);

      //TODO: Extraer los nombres de los gist
  }

}
