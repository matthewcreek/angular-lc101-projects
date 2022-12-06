import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://external-preview.redd.it/HbG3Q2o5QT_9UUmAknsRe_GXgQdJRoFgJ6NLTI2oH_A.jpg?width=640&crop=smart&auto=webp&s=be661d037acf37132ca2162e1c054432155a2aa5';
  image2 = 'https://previews.123rf.com/images/marcel63/marcel630707/marcel63070700039/1262490-a-cool-dog.jpg';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdu2aO90yjgz4LqZe4NnLLAnc5ldEYaiaGIg&usqp=CAU';

  constructor() { }

  ngOnInit() {
  }

}