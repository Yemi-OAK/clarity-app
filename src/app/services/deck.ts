import { Injectable } from '@angular/core';
import { TarotCard } from '../models/tarot-card';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  private cards: TarotCard[] = [
  { id: 1, name: 'The Fool', meaning: 'New beginnings, trust, adventure', reversed: false },
  { id: 2, name: 'The Magician', meaning: 'Manifestation, skill, confidence', reversed: false },
  { id: 3, name: 'The High Priestess', meaning: 'Intuition, inner wisdom, mystery', reversed: false },
  { id: 4, name: 'The Empress', meaning: 'Abundance, creativity, nurturing', reversed: false },
  { id: 5, name: 'The Emperor', meaning: 'Authority, stability, leadership', reversed: false },
  { id: 6, name: 'The Hierophant', meaning: 'Tradition, learning, spiritual guidance', reversed: false },
  { id: 7, name: 'The Lovers', meaning: 'Love, harmony, meaningful choices', reversed: false },
  { id: 8, name: 'The Chariot', meaning: 'Determination, victory, self-control', reversed: false },
  { id: 9, name: 'Strength', meaning: 'Courage, compassion, inner strength', reversed: false },
  { id: 10, name: 'The Hermit', meaning: 'Reflection, solitude, wisdom', reversed: false },
  { id: 11, name: 'Wheel of Fortune', meaning: 'Change, destiny, opportunity', reversed: false },
  { id: 12, name: 'Justice', meaning: 'Fairness, truth, accountability', reversed: false },
  { id: 13, name: 'The Hanged Man', meaning: 'Perspective, surrender, patience', reversed: false },
  { id: 14, name: 'Death', meaning: 'Transformation, endings, renewal', reversed: false },
  { id: 15, name: 'Temperance', meaning: 'Balance, moderation, healing', reversed: false },
  { id: 16, name: 'The Devil', meaning: 'Temptation, attachment, limitation', reversed: false },
  { id: 17, name: 'The Tower', meaning: 'Sudden change, awakening, upheaval', reversed: false },
  { id: 18, name: 'The Star', meaning: 'Hope, inspiration, serenity', reversed: false },
  { id: 19, name: 'The Moon', meaning: 'Illusion, intuition, uncertainty', reversed: false },
  { id: 20, name: 'The Sun', meaning: 'Joy, success, vitality', reversed: false },
];

 drawCard(): TarotCard {
    const card = this.cards[Math.floor(Math.random() * this.cards.length)];

    return {
      ...card,
      reversed: Math.random() < 0.5
    };
  }
}
