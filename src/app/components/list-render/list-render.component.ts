import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})


export class ListRenderComponent implements OnInit {

    animalDetails = '';

    animals : Animal[] = [];

  constructor(private listService : ListService) {
    this.GetAnimals();

  }

  ngOnInit(): void {
  }
  showAge (animal : Animal){
    console.log(animal);
    this.animalDetails = `O pet ${animal.age} tem ${animal.age} anos!`;
  }
  removeAnimal (animal : Animal){
    this.animals = this.animals.filter((a) => animal.name != a.name)
    this.listService.remove(animal.id).subscribe();
  }
  GetAnimals() : void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
