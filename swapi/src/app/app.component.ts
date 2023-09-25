import { Component, OnInit, OnDestroy } from '@angular/core';
import { StarWarsService } from './star-wars.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  people: any[] = []; // we don't know what data we are going to get back
  selectedFilm: any;

  private subscription!: Subscription;

  constructor(private starWarsService: StarWarsService) {

  }

  ngOnInit(): void {
    this.subscription = this.starWarsService.getPeople().subscribe((data: any) => {
      this.people = data.results;
    });
  }

  loadFilm(filmUrl: string) {
    this.subscription = this.starWarsService.getFilm(filmUrl).subscribe((film: any)=> {
      this.selectedFilm = film;
    })
  }


  ngOnDestroy(): void {
      if(this.subscription) {
        this.subscription.unsubscribe();
      }
  }

}
