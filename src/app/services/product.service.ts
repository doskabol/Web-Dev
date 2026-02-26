import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 15 128Gb',
      description: 'Смартфон Apple iPhone 15, 128 ГБ памяти, черный цвет, поддержка 5G, камера 48 МП',
      price: 399900,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/84378448232478.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h0d/h91/84378448265246.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-113137753/',
      category: 'Смартфоны',
      inStock: true
    },
    {
      id: 2,
      name: 'Ноутбук Apple MacBook Air 13',
      description: 'Ноутбук Apple MacBook Air 13, экран 13.6 дюйма, чип M2, 8 ГБ RAM, 256 ГБ SSD',
      price: 559900,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64508122988574.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64508122988574.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h41/h09/64508123021342.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h26/hd0/64508123054110.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-106720712/',
      category: 'Ноутбуки',
      inStock: true
    },
    {
      id: 3,
      name: 'Наушники Apple AirPods Pro 2',
      description: 'Беспроводные наушники Apple AirPods Pro 2 с активным шумоподавлением, USB-C',
      price: 119900,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h54/64509379067934.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc9/h54/64509379067934.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hf6/hb1/64509379100702.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h21/hc0/64509379133470.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-106968283/',
      category: 'Наушники',
      inStock: true
    },
    {
      id: 4,
      name: 'Планшет Samsung Galaxy Tab S9',
      description: 'Планшет Samsung Galaxy Tab S9, 128 ГБ, Wi-Fi, графитовый цвет, 11 дюймов',
      price: 299900,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8d/h34/84985580240926.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h8d/h34/84985580240926.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h48/h46/84985580273694.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h4f/h22/84985580306462.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-128gb-114844657/',
      category: 'Планшеты',
      inStock: true
    },
    {
      id: 5,
      name: 'Умные часы Apple Watch Series 9',
      description: 'Умные часы Apple Watch Series 9, GPS, 45mm, розовый корпус, дисплей Always-On',
      price: 229900,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h23/hb5/85037735788574.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h23/hb5/85037735788574.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h8b/h38/85037735821342.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h05/h02/85037735854110.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-45mm-113656671/',
      category: 'Часы',
      inStock: true
    },
    {
      id: 6,
      name: 'Игровая приставка Sony PlayStation 5',
      description: 'Игровая приставка Sony PlayStation 5, 825 ГБ, белый цвет, 2 контроллера',
      price: 299900,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h01/hb3/64508609953822.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h01/hb3/64508609953822.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h13/h57/64508609986590.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h68/h5e/64508610019358.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-100807585/',
      category: 'Игры',
      inStock: false
    },
    {
      id: 7,
      name: 'Кофеварка DeLonghi Magnifica S',
      description: 'Автоматическая кофеварка DeLonghi Magnifica S, 1450 Вт, 15 бар, черный цвет',
      price: 349900,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0c/h5f/63781611716638.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0c/h5f/63781611716638.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h38/h42/63781611749406.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h34/h17/63781611782174.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/delonghi-magnifica-s-ecam-22-110-sb-110014538/',
      category: 'Техника для кухни',
      inStock: true
    },
    {
      id: 8,
      name: 'Телевизор LG OLED55C3',
      description: 'Телевизор LG OLED55C3, 55 дюймов, 4K UHD, Smart TV, процессор α9 Gen6',
      price: 599900,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8a/h1b/84985636814878.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h8a/h1b/84985636814878.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h7d/hb3/84985636847646.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hb2/h66/84985636880414.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/lg-oled55c3rla-114660372/',
      category: 'Телевизоры',
      inStock: true
    },
    {
      id: 9,
      name: 'Фотоаппарат Canon EOS R10',
      description: 'Беззеркальный фотоаппарат Canon EOS R10, 24.2 МП, съемка 4K, комплект с объективом 18-45mm',
      price: 429900,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h29/hc1/65446218629150.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h29/hc1/65446218629150.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h37/h34/65446218661918.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hc4/hfd/65446218694686.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/canon-eos-r10-kit-18-45mm-108626559/',
      category: 'Фото',
      inStock: true
    },
    {
      id: 10,
      name: 'Робот-пылесос Xiaomi Robot Vacuum S10+',
      description: 'Робот-пылесос Xiaomi Robot Vacuum S10+, 4000 Па, влажная уборка, картография LDS',
      price: 119900,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h34/h28/84925464330270.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h34/h28/84925464330270.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/hd9/h3c/84925464363038.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h78/hdc/84925464395806.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-s10-114183167/',
      category: 'Техника для дома',
      inStock: true
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  getCategories(): string[] {
    return [...new Set(this.products.map(p => p.category).filter(Boolean))] as string[];
  }
}