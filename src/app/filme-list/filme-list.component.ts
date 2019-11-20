import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilmeService} from '../service/filme.service';
import {Filme} from '../model/Filme';

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.scss']
})
export class FilmeListComponent implements OnInit, OnDestroy {

  filmeList: Filme[];

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    const filme = new Filme();
    filme.id = 1;
    filme.titulo = 'Star Wars';
    filme.precoBilhete = 40.5;
    filme.dataLancamento = new Date(1988, 3, 15);
    this.filmeService.add(filme);
    // this.filmeService.remove(filme);
    this.filmeList = this.filmeService.findAll();
  }

  ngOnDestroy(): void {
    this.filmeService.clear();
  }

}
