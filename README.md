# Documentación del Proyecto - DebComics

## Descripción
DebComics es una tienda en línea especializada en cómics, con una interfaz intuitiva que permite a los usuarios explorar y comprar cómics de diferentes categorías como DC, Marvel y Manga. El proyecto utiliza React para la interfaz de usuario y Firebase para la gestión de datos y pedidos.

## Estructura del Proyecto

/
|-- src
| |-- components
| |-- Item
| |-- Item.jsx
| |-- ItemCount
| |-- ItemCount.jsx
| |-- ItemList
| |-- ItemListContainer.jsx
| |-- Comics.jsx
| |-- Cart
| |-- Cart.jsx
| |-- CheckoutForm.jsx
| |-- Navbar
| |-- Navbar.jsx
| |-- CartWidget
| |-- CartWidget.jsx
| |-- context
| |-- CartContext.jsx
| |-- App.jsx
|-- public
|-- index.html
|-- main.js 


## Configuración y Tecnologías

- React:Utilizado para la interfaz de usuario y la gestión de componentes.
- Firebase: Utilizado para la gestión de ordenes de compra
- React Router: Para la navegación dentro de la aplicación.

## Componentes Principales

### `App.jsx`
Componente principal que configura las rutas y proporciona el contexto del carrito.

### `ItemListContainer.jsx`
Muestra una lista de cómics según la categoría seleccionada.

### `Item.jsx`
Representa un cómic individual, con la opción de ver detalles y agregar al carrito.

### `ItemCount.jsx`
Un contador que permite al usuario seleccionar la cantidad de cómics para agregar al carrito.

### `Cart.jsx` y `CartWidget.jsx`
Componentes relacionados con la visualización del carrito y su widget en la barra de navegación.

### `CheckoutForm.jsx`
Formulario de pago que utiliza Firebase para registrar las órdenes de compra.

### `Navbar.jsx`
Barra de navegación con enlaces a diferentes categorías y al carrito.

### `CartContext.jsx`
Contexto de React utilizado para gestionar el estado del carrito.

## Uso del Proyecto

1. Clona el repositorio: `git clone https://github.com/Memi18/memi18`
2. Instala las dependencias: `npm install`
3. Inicia la aplicación: `npm run dev`

