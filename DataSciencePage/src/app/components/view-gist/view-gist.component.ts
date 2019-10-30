import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gist } from 'src/app/models/gist.model';

@Component({
  selector: 'app-view-gist',
  templateUrl: './view-gist.component.html',
  styleUrls: ['./view-gist.component.scss']
})
export class ViewGistComponent implements OnInit {

  gist: Gist;
  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe( data => {
      this.gist = new Gist(data.name, data.guistURL, data.lenguage);
    })
  }

}
