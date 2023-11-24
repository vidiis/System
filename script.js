// Este es un ejemplo de un archivo script.js muy básico

document.addEventListener('DOMContentLoaded', (event) => {
    // Código que se ejecuta una vez que el contenido de la página ha cargado completamente
    console.log('El documento fue cargado completamente');
    
    // función para cambiar el texto de un elemento con el id 'mi-elemento'
    const cambiarTexto = () => {
        const el = document.getElementById('mi-elemento');
        if(el){
            el.textContent = "¡Texto cambiado!";
        }
    }

    // Ejemplo de cómo se escucha el evento de clic en un botón con id 'mi-boton'
    const boton = document.getElementById('mi-boton');
    if(boton){
        boton.addEventListener('click', cambiarTexto);
    }
});
