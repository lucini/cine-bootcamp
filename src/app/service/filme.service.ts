import {Injectable} from '@angular/core';
import {Filme} from '../model/Filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private filmeList: Filme[];

  constructor() {
    this.filmeList = [];
  }

  findAll(): Filme[] {
    return this.filmeList;
  }

  add(filme: Filme): void {
    this.filmeList.push(filme);
  }

  remove(filme: Filme): void {
    const index = this.filmeList.findIndex(item => item.id === filme.id);

    this.filmeList.splice(index, 1);
  }
}
