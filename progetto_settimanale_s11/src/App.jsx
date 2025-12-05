import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <p className="text-danger">Ciao</p>
    </Provider>
  )
}

export default App
