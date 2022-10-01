import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import Routers from './main/routers/Routers'
const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <StrictMode>
    <Routers />
  </StrictMode>
);