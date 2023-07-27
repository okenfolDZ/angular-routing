import {Component} from '@angular/core';
import {Team} from "../../models/team.model";
import {TeamService} from "../../services/team.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent {
  teams: Team[] = this.teamService.teams;

  constructor(private teamService: TeamService, private router: Router) {

  }

  goToTeamDeatils(teamId: number) {
    this.router.navigate(['/team-details',teamId-1])
  }

}
