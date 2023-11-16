import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './app/store';
import { Provider } from 'react-redux'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='Master-Container'>
  <Provider store={store}>
    <App />
  </Provider>
  </div>
)
