import { Component } from '@angular/core';
import { DeckService } from './services/deck';
import { TarotCard } from './models/tarot-card';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  card: TarotCard | null = null;

  constructor(private deck: DeckService) {}

  draw() {
    this.card = this.deck.drawCard();
  }
}