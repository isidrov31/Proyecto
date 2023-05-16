document.addEventListener('click', function(event) {
    var cart = document.querySelector('.cart');
    var cartToggle = document.getElementById('cart-toggle');
  
    var targetElement = event.target; // Elemento en el que se hizo clic
  
    // Verificar si el clic ocurrió fuera del carrito y del botón de activación
    if (!cart.contains(targetElement) && targetElement !== cartToggle) {
      cartToggle.checked = false; // Desactivar el carrito
    }
  });
  

  document.addEventListener('click', function(event) {
    var cart = document.querySelector('.navbar-list');
    var menuToggle = document.getElementById('menu-toggle');
  
    var targetElement = event.target; // Elemento en el que se hizo clic
  
    // Verificar si el clic ocurrió fuera del carrito y del botón de activación
    if (!cart.contains(targetElement) && targetElement !== menuToggle) {
      menuToggle.checked = false; // Desactivar el carrito
    }
  });
  
       // Obtén el elemento de la lista de la barra de navegación
       const navbarList = document.querySelector('.navbar-list');

       // Agrega una clase 'show' a la lista después de un tiempo de retraso
       setTimeout(() => {
         navbarList.classList.add('checked');
       }, 1000); // Ajusta el tiempo de retraso según tus necesidades