//firebase edit
const firebaseConfig = {
    apiKey: "TuAPIKey",
    authDomain: "tudominio.firebaseapp.com",
    projectId: "tuproyecto",
    storageBucket: "tuproyecto.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdefghijklmnopqrstuvwxyz",
};
firebase.initializeApp(firebaseConfig);

// referencia a la base de datos de Firebase
const db = firebase.firestore();

// elementos del formulario de reserva
const reservaForm = document.getElementById('reserva-form');
const nombreInput = document.getElementById('nombre');
const fechaInput = document.getElementById('fecha');
const horaInput = document.getElementById('hora');
const personasInput = document.getElementById('personas');

// envío del formulario
reservaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // valores del formulario
    const nombre = nombreInput.value;
    const fecha = fechaInput.value;
    const hora = horaInput.value;
    const personas = parseInt(personasInput.value);

    // validar los datos
    if (!nombre || !fecha || !hora || isNaN(personas)) {
        alert('Por favor, complete todos los campos correctamente.');
    } else {

    // reserva Firebase
    db.collection('reservas').add({
        nombre,
        fecha,
        hora,
        personas,
    })
    .then(() => {
        alert('Reserva exitosa. ¡Esperamos verte pronto!');
        reservaForm.reset();
    })
    .catch((error) => {
        alert('Error al realizar la reserva. Por favor, inténtalo de nuevo.');
        console.error(error);
    });
}
});