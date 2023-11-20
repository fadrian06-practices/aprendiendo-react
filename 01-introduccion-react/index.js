const appDOMElement = document.getElementById('app')
const root = ReactDOM.createRoot(appDOMElement)

const button = React.createElement('button', { 'data-id': 123 }, 'Me gusta')
const button2 = React.createElement('button', { 'data-id': 456 }, 'Me gusta')
const button3 = React.createElement('button', { 'data-id': 789 }, 'Me gusta')

const app = React.createElement(React.Fragment, null, [button, button2, button3])

/* JSX
<React.Fragment>
	<button data-id="123">Me gusta</button>
	<button data-id="456">Me gusta</button>
	<button data-id="789">Me gusta</button>
</React.Fragment>
*/

root.render(app)
