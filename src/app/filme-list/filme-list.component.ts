import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilmeService} from '../service/filme.service';
import {Filme} from '../model/Filme';
import {Observable} from 'rxjs';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.scss']
})
export class FilmeListComponent implements OnInit, OnDestroy {

  filmeList$: Observable<Filme[]>;
  tooltip: string;

  constructor(private filmeService: FilmeService,
              private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Cine BootCamp - Filmes');
    this.gerarFilmes();
    // this.filmeService.remove(filme);
    // this.filmeService.findAll()
    //   .subscribe(
    //     filmeList => this.filmeList = filmeList,
    //     error => console.log(error),
    //     () => console.log('OK')
    //   );
    this.filmeList$ = this.filmeService.findAll();
  }

  private gerarFilmes(): void {
    const filme = new Filme();
    filme.id = 1;
    filme.titulo = 'Star Wars';
    filme.precoBilhete = 10;
    filme.dataLancamento = new Date(1988, 3, 15);
    this.filmeService.add(filme);

    const filme2 = new Filme();
    filme2.id = 2;
    filme2.titulo = 'Rambo';
    filme2.precoBilhete = 15;
    filme2.dataLancamento = new Date(1988, 3, 15);
    filme2.inativo = true;
    this.filmeService.add(filme2);

    const filme3 = new Filme();
    filme3.id = 3;
    filme3.titulo = 'Clube da Luta';
    filme3.precoBilhete = 30;
    filme3.dataLancamento = new Date(1991, 3, 15);
    this.filmeService.add(filme3);

    const filme4 = new Filme();
    filme4.id = 4;
    filme4.titulo = 'Avengers';
    filme4.precoBilhete = 50;
    filme4.dataLancamento = new Date(1991, 3, 15);
    this.filmeService.add(filme4);
  }

  ngOnDestroy(): void {
    this.filmeService.clear();
  }

  setTitle(filme: Filme): void {

    if (filme.inativo) {
      this.tooltip = 'Inativo';
      return;
    }

    if (filme.precoBilhete <= 10) {
      this.tooltip = 'Custo baixo';
    }

    if (filme.precoBilhete > 10 && filme.precoBilhete <= 20) {
      this.tooltip = 'Custo regular';
    }

    if (filme.precoBilhete > 20 && filme.precoBilhete < 40) {
      this.tooltip = 'Custo médio';
    }

    if (filme.precoBilhete >= 40) {
      this.tooltip = 'Custo Alto';
    }
  }
}
