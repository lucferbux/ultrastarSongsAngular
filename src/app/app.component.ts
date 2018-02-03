import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireList, AngularFireObject, DatabaseReference } from 'angularfire2/database/interfaces';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  public songs: Observable<Song[]>;
  displayedColumns = ['Title', 'Artist', 'Genre'];
  dataSource = new MatTableDataSource<Song>()


  constructor(db: AngularFireDatabase) {
    this.songs = db.list<Song>('songs').valueChanges()
      db.list<Song>('songs', ref => ref.orderByChild('Artist')).valueChanges().subscribe(newSongs => {
          console.log(newSongs)
          this.dataSource.data = newSongs
      }
    )
  }

  ngOnInit() {
    
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface Song {
  Title: string;
  Artist: string;
  Genre: string;
  Year: number;
}

