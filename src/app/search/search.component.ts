import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Show, ShowsResponse} from "../tv.models";

@Component({
  selector: 'si-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  //http;
  shows: Show[];
  query = 'flash';



  constructor(private http: Http) {
   //? this.search(this.query);


    // const apiUrl = 'http://api.tvmaze.com/search/shows?q=flash';
    // http.get(apiUrl)
    //   .map(resp => resp.json() as ShowsResponse[])
    //   .subscribe(shows => this.shows = shows.map(showMeta => showMeta.show));  //bez subskrybcji to sama definicja, sub zaczyna obserwować; wykonuje fn
  }

  search(query: String) {
    const apiUrl = `http://api.tvmaze.com/search/shows?q=${query}`;
    this.http.get(apiUrl)  //??? this? bez przekazania jako argumnebt
      .map(resp => resp.json() as ShowsResponse[])
      .subscribe(shows => this.shows = shows.map(showMeta => showMeta.show));  //bez subskrybcji to sama definicja, sub zaczyna obserwować; wykonuje fn

  }

  ngOnInit() {
  }

}
