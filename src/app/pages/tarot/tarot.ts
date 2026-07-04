import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckService } from '../../services/deck';
import { TarotCard } from '../../models/tarot-card';

@Component({
  selector: 'app-tarot',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarot.html',
  styleUrl: './tarot.css'
})
export class Tarot {
  private deck = inject(DeckService);

  card: TarotCard | null = null;

  draw() {
    this.card = this.deck.drawCard();
  }
}