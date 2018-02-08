import { Component, OnInit, ViewChild } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireList, AngularFireObject, DatabaseReference } from 'angularfire2/database/interfaces';
import {MatTableDataSource, MatSort } from '@angular/material';
import {Song} from './song'

@Component({
  selector: 'app-song-table',
  templateUrl: './song-table.component.html',
  styleUrls: ['./song-table.component.css']
})
export class SongTableComponent implements OnInit {

  public songs: Observable<Song[]>;
  displayedColumns = ['Title', 'Artist', 'Genre'];
  dataSource = new MatTableDataSource<Song>();
  isLoadingResults = true;

  @ViewChild(MatSort) sort: MatSort;

  constructor(db: AngularFireDatabase) {
    this.songs = db.list<Song>('songs').valueChanges()
      db.list<Song>('songs', ref => ref.orderByChild('Artist')).valueChanges().subscribe(newSongs => {
          this.dataSource.data = newSongs;
          this.isLoadingResults = false;
          this.dataSource.sort = this.sort;
      }
    )
  }

  ngOnInit() {}
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
}
