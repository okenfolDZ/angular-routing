import { Injectable } from '@angular/core';
import {Team} from "../models/team.model";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

   teams: Team[] = [
    { id: 1, name: 'Real Madrid', country: 'Spain' },
    { id: 2, name: 'Barcelona', country: 'Spain' },
    { id: 3, name: 'Bayern Munich', country: 'Germany' },
    { id: 4, name: 'Manchester United', country: 'England' },
    { id: 5, name: 'Juventus', country: 'Italy' },
  ]
  constructor() { }
}
