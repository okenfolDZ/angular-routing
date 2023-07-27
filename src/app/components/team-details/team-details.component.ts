import {Component} from '@angular/core';
import {TeamService} from "../../services/team.service";
import {ActivatedRoute} from "@angular/router";
import {Team} from "../../models/team.model";

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent {

  team!: Team;
  constructor(private teamService: TeamService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      const teamId = params['id'];
      this.team = this.teamService.teams[teamId];

    })
  }
}
