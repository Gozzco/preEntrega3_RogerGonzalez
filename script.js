/*El cliente tiene en la página web el catalogo de productos (organizados en el código como objetos), este debe seleccionar en un listado el nombre del producto del cual está interesado y presionar en el botón agregar. Una vez tenga todos los productos a comprar, presionará en el botón "Terminar" y recibirá un mensaje en la página indicando si hay disponibilidad (establecida en las propiedades del objeto), en caso de que no esté disponible se le indicará de la misma forma. Cuando termine de agregar articulos, la página mostrará los datos de los productos elegidos y sus precios + IVA. Estos productos disponibles indicados por el usuario se pushearan a un nuevo array y se reflejarán también en la consola*/

/*Catalogo: Silla Falcon, Silla Zulia, Silla Barinas, Silla Aragua, Silla Lara, Silla BKF, Silla Eames, Silla Merida, Silla Tachira, Silla Caracas, Silla Nueva Esparta*/

function Producto (nombreProducto, material, precio, disponibilidad) {
    this.nombreProducto = nombreProducto;
    this.material = material;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
    }

let sillaFalcon = new Producto ("Silla Falcon", "Madera", 12000, true);
let sillaZulia = new Producto ("Silla Zulia", "Madera", 11300, false);
let sillaBarinas = new Producto ("Silla Barinas", "Metal", 13600, true);
let sillaAragua = new Producto ("Silla Aragua", "Madera", 15400, true);
let sillaLara = new Producto ("Silla Lara", "Metal", 13599, true);
let sillaBkf = new Producto ("Silla BKF", "Metal", 35000, true);
let sillaEames = new Producto ("Silla Eames", "Metal", 13999, false);
let sillaMerida = new Producto ("Silla Merida", "Madera", 17800, true);
let sillaTachira = new Producto ("Silla Tachira", "Madera", 13450, false);
let sillaCaracas = new Producto ("Silla Caracas", "Madera", 19500, false);
let sillaNuevaEsparta = new Producto ("Silla Nueva Esparta", "Madera", 14900, true);

const catalogo = [
    sillaFalcon, 
    sillaZulia,
    sillaBarinas,
    sillaAragua,
    sillaLara,
    sillaBkf,
    sillaEames,
    sillaMerida,
    sillaTachira,
    sillaCaracas,
    sillaNuevaEsparta
];

const productosSeleccionados = [];


function agregarProducto() {
    const seleccionado = document.getElementById("selectProductos").value;
  
    const productoAgregado = catalogo.find(Producto => Producto.nombreProducto === seleccionado);
  
    if (productoAgregado.disponibilidad) {
      productosSeleccionados.push(productoAgregado);
      alert("El producto " + productoAgregado.nombreProducto + " ha sido agregado al carrito.");
      document.getElementById("selectProductos").value = "";
    } else {
      alert("Lo sentimos, el producto " + productoAgregado.nombreProducto + " no está disponible en este momento.");
    }
}

const botonAgregar = document.getElementById("btnAgregar");
botonAgregar.addEventListener("click", agregarProducto);



function terminarCompra() {
    
    if (productosSeleccionados.length > 0) {
      let total = 0;
      let mensaje = "Usted seleccionó:\n";
  
      productosSeleccionados.forEach(function(producto) {
        mensaje += "- " + producto.nombreProducto + " (" + producto.material + "): $" + producto.precio + " + IVA\n";
        total += producto.precio;
      });
  
      mensaje += "\nTotal con IVA: $" + (total * 1.21);
  
      alert(mensaje);
  
      console.log(productosSeleccionados);
    } else {
      alert("Debe seleccionar al menos uno de los productos disponibles.");
    }
  }

const botonTerminar = document.getElementById("btnTerminar");
botonTerminar.addEventListener("click", terminarCompra);


