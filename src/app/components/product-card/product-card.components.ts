import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  getStars(): number[] {
    return [1, 2, 3, 4, 5];
  }

  shareOnWhatsApp() {
    const text = `Посмотрите этот товар: ${this.product.name}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}%20${encodeURIComponent(this.product.link)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
}