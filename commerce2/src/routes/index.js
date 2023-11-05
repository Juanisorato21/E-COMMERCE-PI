// Almacenar las rutas principales de la aplicación /bienvenida usuario /mostrar acerca de 

const express = require('express'); // Requerimos Express para crear rutas
const router = express.Router(); // Metodo para devolver un objeto


router.get('/', async (req, res) => {
    res.render('index');
});

router.get('/carrito', async (req, res) => {
    res.render('carrito.hbs');
});

module.exports = router;