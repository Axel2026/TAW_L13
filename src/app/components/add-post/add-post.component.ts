import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  public newPostData = {
    title: '',
    text: '',
    image: ''
  };

  constructor(private service: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  addPost(){
    return this.service.addPost(this.newPostData).subscribe(() => {
        this.router.navigate(['/']);
    });
  }

}
