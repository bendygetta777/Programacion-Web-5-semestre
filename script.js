// Archivo: script.js

// 1. Estructura de Datos en Memoria (Modelo equivalente a assignments/data/ del repositorio)
// Arreglo de objetos que contiene la información técnica de los módulos del POS
const serviciosData = [
    {
        id: 1,
        titulo: 'Gestión de Inventario',
        imagen: 'img/inventario.jpg',
        alt: 'Módulo de gestión de inventario'
    },
    {
        id: 2,
        titulo: 'Gestión de Clientes',
        imagen: 'img/clientes.jpg',
        alt: 'Módulo de gestión de clientes'
    },
    {
        id: 3,
        titulo: 'Gestión de Empleados',
        imagen: 'img/empleados.jpg',
        alt: 'Módulo de gestión de empleados'
    },
    {
        id: 4,
        titulo: 'Gestión de Ventas',
        imagen: 'img/ventas.jpg',
        alt: 'Módulo de gestión de ventas'
    }
];

// 2. Función para renderizar dinámicamente las tarjetas dentro del contenedor del DOM
function renderizarServicios(listaServicios) {
    const contenedor = document.getElementById('servicesContainer');
    
    // Validación de seguridad: verificar que el elemento exista en el HTML
    if (!contenedor) return;

    // Limpiamos el contenedor para asegurar una inserción limpia
    contenedor.innerHTML = '';

    // Recorremos el arreglo mediante el método forEach con un callback
    listaServicios.forEach((servicio) => {
        // Creación semántica del nodo contenedor <article>
        const card = document.createElement('article');
        card.classList.add('service-card');

        // Construcción de la estructura interna usando Template Literals (ES6)
        card.innerHTML = `
            <div class="card-img">
                <img src="${servicio.imagen}" alt="${servicio.alt}">
            </div>
            <h3>${servicio.titulo}</h3>
        `;

        // Escuchador de eventos individual por tarjeta
        card.addEventListener('click', () => {
            console.log(`Módulo consultado [ID ${servicio.id}]: ${servicio.titulo}`);
        });

        // Insertamos el nodo creado en el árbol del DOM
        contenedor.appendChild(card);
    });
}

// 3. Inicialización del sistema una vez que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    
    // Invocamos la función de renderizado de datos
    renderizarServicios(serviciosData);

    // Captura y manejo del evento en el botón principal (Hero CTA)
    const btnComenzar = document.getElementById('btnComenzar');
    if (btnComenzar) {
        btnComenzar.addEventListener('click', (event) => {
            event.preventDefault(); // Evita la recarga automática por el href="#"
            console.log('Interacción: Clic en el botón Comenzar Ahora');
            alert('¡Bienvenido a GrocerQuick POS! Redirigiendo al panel principal...');
        });
    }

    // Captura y manejo del evento en el botón de Login (Navbar)
    const btnLogin = document.getElementById('btnLogin');
    if (btnLogin) {
        btnLogin.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Interacción: Clic en el botón Login');
            alert('Acceso al sistema administrativo.');
        });
    }
});
