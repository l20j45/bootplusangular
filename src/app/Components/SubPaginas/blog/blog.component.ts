import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  articulos = [
    {
      id: 1,
      title: 'Nuevos modelos',
      date: '22 de Octubre',
      author: 'TiendaMuebles',
      textPrimary:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe soluta omnis nesciunt libero ullam tenetur sunt excepturi animi recusandae quis dolorem culpa cumque, reprehenderit laudantium similique! Saepe officiis autem ad!',
      textSecundary:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe soluta omnis nesciunt libero ullam tenetur sunt excepturi animi recusandae quis dolorem culpa cumque, reprehenderit laudantium similique! Saepe officiis autem ad!',
    },
    {
      id: 2,
      title: 'Guia de colores',
      date: '22 de Noviembre',
      author: 'TiendaMuebles',
      textPrimary:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe soluta omnis nesciunt libero ullam tenetur sunt excepturi animi recusandae quis dolorem culpa cumque, reprehenderit laudantium similique! Saepe officiis autem ad!',
      textSecundary:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe soluta omnis nesciunt libero ullam tenetur sunt excepturi animi recusandae quis dolorem culpa cumque, reprehenderit laudantium similique! Saepe officiis autem ad!',
    },
    {
      id: 3,
      title: 'Guia para diseños de interiores',
      date: '22 de',
      author: 'TiendaMuebles',
      textPrimary:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe soluta omnis nesciunt libero ullam tenetur sunt excepturi animi recusandae quis dolorem culpa cumque, reprehenderit laudantium similique! Saepe officiis autem ad!',
      textSecundary:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe soluta omnis nesciunt libero ullam tenetur sunt excepturi animi recusandae quis dolorem culpa cumque, reprehenderit laudantium similique! Saepe officiis autem ad!',
    },
    {
      id: 4,
      title: 'Guia de diseños exteriores',
      date: '22 de',
      author: 'TiendaMuebles',
      textPrimary:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe soluta omnis nesciunt libero ullam tenetur sunt excepturi animi recusandae quis dolorem culpa cumque, reprehenderit laudantium similique! Saepe officiis autem ad!',
      textSecundary:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe soluta omnis nesciunt libero ullam tenetur sunt excepturi animi recusandae quis dolorem culpa cumque, reprehenderit laudantium similique! Saepe officiis autem ad!',
    },
  ];
}
