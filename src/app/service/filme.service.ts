import {Injectable} from '@angular/core';
import {Filme} from '../model/Filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  private filmeList: Filme[];
  private KEY_FILMES = 'KEY_FILMES';

  constructor() {
    this.filmeList = [];
  }

  findAll(): Filme[] {
    return JSON.parse(localStorage.getItem(this.KEY_FILMES));
  }

  add(filme: Filme): void {
    this.filmeList.push(filme);
    localStorage.setItem(this.KEY_FILMES, JSON.stringify(this.filmeList));
  }

  remove(filme: Filme): void {
    const index = this.filmeList.findIndex(item => item.id === filme.id);

    this.filmeList.splice(index, 1);
    localStorage.setItem(this.KEY_FILMES, JSON.stringify(this.filmeList));
  }

  clear(): void {
    this.filmeList = [];
    localStorage.removeItem(this.KEY_FILMES);
  }
}
