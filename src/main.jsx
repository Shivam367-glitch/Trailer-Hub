
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
import { registerSW } from "virtual:pwa-register";

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
  </Provider>,
)
