import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  getMoviename='';
  getActor='';
  getActress='';
  getDirector='';
  onSubmit(data:NgForm)
  {
    
      this.apiService.insertData(data.value).subscribe((response)=>
      
        {
          console.log(response);
          alert("Successfully inserted");
        })
         
        
  }

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

}


