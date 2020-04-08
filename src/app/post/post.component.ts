import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from '../interfaces/social-post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() deleted = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  deletePost(): void {
    console.log('delete info');
    this.deleted.emit();

  }

}
