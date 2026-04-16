import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import appStore from './store';
import { registerSW } from "virtual:pwa-register";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New version available. Reload?")) {
      updateSW();
    }
  }
});
createRoot(document.getElementById('root')).render(
  <Provider store={appStore}>
    <App />
  </Provider>
)
