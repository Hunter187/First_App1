import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
    data :any;
  constructor(private NewsService:NewsService, private router:Router) { }

  ngOnInit() {
    this.NewsService.getData('top-headlines?sources=al-jazeera-english').subscribe(data => {
      console.log(data);
      this.data =data;
    })
    
  }
  onGoToNewsSinglePage(article){
      this.NewsService.currentArticle=article;
      this.router.navigate(['/news-single']);
  }

}
