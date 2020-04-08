import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../interfaces/social-post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  submitPost(form: NgForm): void {
    console.log('postForm');
    this.submitted.emit(form.value);
    form.reset();
  }
}

