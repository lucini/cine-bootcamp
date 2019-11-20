import { Component, OnInit } from '@angular/core';
import {FilmeService} from '../service/filme.service';
import {Filme} from '../model/Filme';

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.scss']
})
export class FilmeListComponent implements OnInit {

  filmeList: Filme[];

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    const filme = new Filme();
    filme.id = 1;
    filme.titulo = 'Star Wars';
    this.filmeService.add(filme);
    // this.filmeService.remove(filme);
    // setTimeout(() => console.log(this.filmeService.findAll()), 1000);
    this.filmeList = this.filmeService.findAll();
  }

}
