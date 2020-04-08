import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../interfaces/social-post';


@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  post: Post[] = [
    {
      title: 'Grand Circus',
      thought: 'Grand Circus is cool',
    },

    {
      title: 'Scott',
      thought: 'Scott rides scooters'
    },
    {
      title: 'Scott',
      thought: 'Scott rides scooters',
    },
  ];

  showPost: boolean = false;

  onSubmit(e) {
    this.showPost = !this.showPost
  }

  onDelete(post): void {
    this.post = this.post.filter(x => x != post.title);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
