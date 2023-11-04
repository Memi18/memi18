

const comics = [
  {
    id: 1,
    category:'dc',
    imagen: 'https://acdn.mitiendanube.com/stores/001/184/069/products/batman_knightfall_vol_1_cov1-94c142bad4e22a9b1c16874803037803-1024-1024.webp',
    titulo: 'Batman Vol. 1: El Caballero de la Noche',
    resena: 'El comienzo de la leyenda de Batman, escrito por Frank Miller.',
    stock: 10,
  },
  {
    id:2,
    category:'dc',
    imagen: 'https://content.eccediciones.com//productos/9880/Batman_Silencio_cubierta_DEF.jpg',
    titulo: 'Batman: Silencio',
    resena: 'Una misteriosa figura del pasado de Batman regresa para atormentarlo.',
    stock: 3,
  },
  {
    id:3,
    category:'dc',
    imagen: 'https://acdn.mitiendanube.com/stores/001/184/069/products/el-regreso-del-caballero-oscuro-cov1-1f23a0c0f947fbe9ca16318167373326-1024-1024.webp',
    titulo: 'Batman: El Regreso del Caballero Oscuro',
    resena: 'Batman regresa a la acción para restaurar el orden en Gotham City.',
    stock: 1,
  },
  {
    id:4,
    category:'dc',
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_677056-MLA53028485654_122022-O.webp',
    titulo: 'Superman: El Hombre de Acero',
    resena: 'El origen de Superman, escrito por John Byrne.',
    stock: 1,
  },
  {
    id:5,
    category:'dc',
    imagen: 'https://images.cdn2.buscalibre.com/fit-in/360x360/93/52/93525888d10e512e0908cf83f83b1790.jpg',
    titulo: 'Superman: Rebirth',
    resena: 'Superman lucha por proteger a su familia y su mundo.',
    stock: 1,
  },
  {
    id:6,
    category:'dc',
    imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/326/487/products/978-987-724-632-21-c84d5ddd096f702b6b16045101422450-480-0.webp',
    titulo: 'Superman: El Reino de los Supermanes',
    resena: 'Cuando Superman muere, nuevos héroes surgen para reemplazarlo.',
    stock: 1,
  },
  {
    id:7,
    category:'manga',
    imagen: 'https://images.cdn3.buscalibre.com/fit-in/360x360/b1/0c/b10c11bb8e79371aca5501de04da669f.jpg',
    titulo: 'One Piece Vol. 1: Romance Dawn',
    resena: 'El inicio de la epopeya de Monkey D. Luffy en busca del One Piece.',
    stock: 1,
  },
  {
    id:8,
    category:'manga',
    imagen: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630569260i/364960.jpg',
    titulo: 'One Piece: Arlong Park',
    resena: 'Luffy y su tripulación se enfrentan a los piratas de Arlong.',
    stock: 1,
  },
  {
    id:9,
    category:'manga',
    imagen: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1449431644i/25813272.jpg',
    titulo: 'One Piece: Enies Lobby',
    resena: 'Luffy lucha para rescatar a su amiga Robin en el Gobierno Mundial.',
    stock: 1,
  },
  {
    id:10,
    category:'marvel',
    imagen: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1384951128i/18870691.jpg',
    titulo: 'Thor Vol. 1: El Poderoso Thor',
    resena: 'La historia del Dios del Trueno y su martillo Mjolnir.',
    stock: 1,
  },
  {
    id:11,
    category:'marvel',
    imagen: 'https://oyster.ignimgs.com/wordpress/stg.ign.com/2017/10/553807._SX1280_QL80_TTD_.jpg',
    titulo: 'Thor: Ragnarok',
    resena: 'Thor lucha por evitar el fin del mundo en el mito nórdico.',
    stock: 5,
  },
  {
    id:12,
    category:'marvel',
    imagen: 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/646308.jpg',
    titulo: 'Thor: Dios del Trueno',
    resena: 'Thor se enfrenta a amenazas cósmicas mientras protege la Tierra.',
    stock: 1,
  },
];
export const getComicsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredComics = comics.filter((comic) => comic.category === category);
      resolve(filteredComics);
    }, 500);
  });
};

export const getProducts = () => {
  return Promise.resolve(comics);
};