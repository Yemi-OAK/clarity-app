import { Injectable } from '@angular/core';
import { TarotCard } from '../models/tarot-card';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  private cards: TarotCard[] = [
  { id: 1, name: 'The Fool', meaning: 'New beginnings, trust, adventure', reversed: false, imageUrl : 'assets/images_tarot/0_fool.png'},
  { id: 2, name: 'The Magician', meaning: 'Manifestation, skill, confidence', reversed: false, imageUrl : 'assets/images_tarot/1_magican.png'},
  { id: 3, name: 'The High Priestess', meaning: 'Intuition, inner wisdom, mystery', reversed: false, imageUrl : 'assets/images_tarot/2_highPriestess.png'},
  { id: 4, name: 'The Empress', meaning: 'Abundance, creativity, nurturing', reversed: false,imageUrl : 'assets/images_tarot/3_empress.png'},
  { id: 5, name: 'The Emperor', meaning: 'Authority, stability, leadership', reversed: false,imageUrl : 'assets/images_tarot/4_empore.png'},
  { id: 6, name: 'The Hierophant', meaning: 'Tradition, learning, spiritual guidance', reversed: false,  imageUrl : 'assets/images_tarot/5_hierophant.png'},
  { id: 7, name: 'The Lovers', meaning: 'Love, harmony, meaningful choices', reversed: false, imageUrl : 'assets/images_tarot/6_lovers.png'},
  { id: 8, name: 'The Chariot', meaning: 'Determination, victory, self-control', reversed: false, imageUrl : 'assets/images_tarot/7_chariot.png'},
  { id: 9, name: 'Strength', meaning: 'Courage, compassion, inner strength', reversed: false, imageUrl : 'assets/images_tarot/8_strength.png'},
  { id: 10, name: 'The Hermit', meaning: 'Reflection, solitude, wisdom', reversed: false, imageUrl : 'assets/images_tarot/9_hermit.png'},
  { id: 11, name: 'Wheel of Fortune', meaning: 'Change, destiny, opportunity', reversed: false, imageUrl : 'assets/images_tarot/10_wheeloff.png'},
  { id: 12, name: 'Justice', meaning: 'Fairness, truth, accountability', reversed: false, imageUrl : 'assets/images_tarot/11_justice.png'},
  { id: 13, name: 'The Hanged Man', meaning: 'Perspective, surrender, patience', reversed: false, imageUrl : 'assets/images_tarot/12_hangedone.png'},
  { id: 14, name: 'Death', meaning: 'Transformation, endings, renewal', reversed: false, imageUrl : 'assets/images_tarot/13_death.png'},
  { id: 15, name: 'Temperance', meaning: 'Balance, moderation, healing', reversed: false, imageUrl : 'assets/images_tarot/14_temperance.png'},
  { id: 16, name: 'The Devil', meaning: 'Temptation, attachment, limitation', reversed: false, imageUrl : 'assets/images_tarot/15_devil.png' },
  { id: 17, name: 'The Tower', meaning: 'Sudden change, awakening, upheaval', reversed: false, imageUrl : 'assets/images_tarot/16_tower.png'},
  { id: 18, name: 'The Star', meaning: 'Hope, inspiration, serenity', reversed: false, imageUrl : 'assets/images_tarot/17_star.png'},
  { id: 19, name: 'The Moon', meaning: 'Illusion, intuition, uncertainty', reversed: false, imageUrl : 'assets/images_tarot/18_moon.png'},
  { id: 20, name: 'The Sun', meaning: 'Joy, success, vitality', reversed: false, imageUrl : 'assets/images_tarot/19_sun.png'},
];

 drawCard(): TarotCard {
    const card = this.cards[Math.floor(Math.random() * this.cards.length)];

    return {
      ...card,
      reversed: Math.random() < 0.5
    };
  }
}
