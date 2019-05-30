import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  currentImage: any;

  constructor(
    public photoService: PhotoService
    ) { }

  ngOnInit() {
    this.photoService.loadSaved();
  }

}
