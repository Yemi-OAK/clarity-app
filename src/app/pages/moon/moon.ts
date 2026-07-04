import { Component, inject } from '@angular/core';
import { MoonPhaseService } from '../../services/moon-phase';

@Component({
  selector: 'app-moon',
  imports: [],
  templateUrl: './moon.html',
  styleUrl: './moon.css'
})
export class Moon {
  private moonPhaseService = inject(MoonPhaseService);

  moonPhase = this.moonPhaseService.getMoonPhase();
}