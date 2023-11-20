// Vanilla JavaScript

// recuperamos todos los botones
const buttons = document.querySelectorAll('button')

// al hacer click en el botón, tenemos que ejecutar una función
buttons.forEach((button) => {
	button.addEventListener('click', () => {
		// recuperar el id del atributo del HTML
		const id = button.getAttribute('data-id')

		// llamar a un servicio para actualizar si me gusta
		// toggleLike(id)

		if (button.classList.contains('liked')) {
			button.classList.remove('liked')
			button.innerText = 'Me gusta'
		} else {
			button.classList.add('liked')
			button.innerText = 'No me gusta'
		}
	})
})
