import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoonPhaseService {
  getMoonPhase(date = new Date()): string {
    const lunarCycle = 29.530588853;
    const knownNewMoon = new Date('2000-01-06T18:14:00Z');

    const daysSinceNewMoon =
      (date.getTime() - knownNewMoon.getTime()) / (1000 * 60 * 60 * 24);

    const moonAge = daysSinceNewMoon % lunarCycle;

    if (moonAge < 1.84566) return 'New Moon';
    if (moonAge < 5.53699) return 'Waxing Crescent';
    if (moonAge < 9.22831) return 'First Quarter';
    if (moonAge < 12.91963) return 'Waxing Gibbous';
    if (moonAge < 16.61096) return 'Full Moon';
    if (moonAge < 20.30228) return 'Waning Gibbous';
    if (moonAge < 23.99361) return 'Last Quarter';
    if (moonAge < 27.68493) return 'Waning Crescent';

    return 'New Moon';
  }
}
