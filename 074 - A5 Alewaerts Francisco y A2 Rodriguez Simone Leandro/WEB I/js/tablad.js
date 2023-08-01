//Datos de la tabla
let elementos = [];

function agregarElemento(prenda, talle, stock) {
    const tbody = document.getElementById('tbody');
    
    const fila = document.createElement('tr');
    
    const celdaPrenda = document.createElement('td');
    celdaPrenda.textContent = prenda;
    fila.appendChild(celdaPrenda);
    
    const celdaTalle = document.createElement('td');
    celdaTalle.textContent = talle;
    fila.appendChild(celdaTalle);
    
    const celdaStock = document.createElement('td');
    celdaStock.textContent = stock;
    fila.appendChild(celdaStock);

    const celdaEliminar = document.createElement('td');
    const botonEliminar = document.createElement('button');
    botonEliminar.classList.add("btn-eliminar");
    botonEliminar.textContent = 'Eliminar prenda';
    botonEliminar.addEventListener('click', function() {
    eliminarFila(fila);
   });
   celdaEliminar.appendChild(botonEliminar);
    fila.appendChild(celdaEliminar);

    tbody.appendChild(fila);
  }

  function vaciarTabla() {
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = '';
    
    elementos = [];
  }

  function eliminarFila(fila) {
    const tbody = document.getElementById('tbody');
    tbody.removeChild(fila);
    
    const filaEliminar = Array.from(tbody.children).indexOf(fila);
    elementos.splice(filaEliminar, 1);
  }

  document.getElementById("form").addEventListener('submit', function(event){
    event.preventDefault();
  
    const prenda = document.getElementById('prendas').value;
    const talle = document.getElementById('talle').value;
    const stock = document.getElementById('stock').value;
  
    const nuevoElemento = {
      prenda: prenda,
      talle: talle,
      stock: stock
    };
    elementos.push(nuevoElemento);
  
    agregarElemento(prenda, talle, stock);

    document.getElementById('prendas').value = '';
    document.getElementById('talle').value = '';
    document.getElementById('stock').value = '';
  });

document.getElementById('vaciarTabla').addEventListener('click', function() {
  vaciarTabla();
});

document.getElementById('crearAutomatico').addEventListener('click', function() {
  const prendas = ['Pantalon Cargo', 'Campera Invierno', 'Remera Oversize'];
  const talles = ['L', 'M', 'XL'];
  const stocks = [35, 20, 50];
  
  for (let i = 0; i < prendas.length; i++) {
    const prenda = prendas[i];
    const talle = talles[i];
    const stock = stocks[i];
    
    const nuevoElemento = {
      prenda: prenda,
      talle: talle,
      stock: stock
    };
    elementos.push(nuevoElemento);
    
    agregarElemento(prenda, talle, stock);
  }
});

//Aca se cargan las prendas automaticamente para cuando se inicia la pagina
window.addEventListener('load', function() {
  const elementosCargados = [
    { prenda: 'Zapatillas Skate', talle: 'S', stock: 100 },
    { prenda: 'Remera Estampada', talle: 'M', stock: 45 },
    { prenda: 'Pantalon Jogging', talle: 'XL', stock: 15 }
  ];
  
  for (let i = 0; i < elementosCargados.length; i++) {
    const prendaCargada = elementosCargados[i];
    agregarElemento(prendaCargada.prenda, prendaCargada.talle, prendaCargada.stock);
    elementos.push(prendaCargada);
  }
});

  
/* MENU HAMBURGUESA*/
function mostrar(){
  document.getElementById('ulMenuHam').style.display = 'flex';

}
function ocultar(){
  document.getElementById('ulMenuHam').style.display = 'none';

}
function mostrar_ocultar(){
  var caja = document.getElementById('ulMenuHam');
  if(caja.style.display == 'none'){
    mostrar();
  }else{
    
    ocultar();
  }
}
