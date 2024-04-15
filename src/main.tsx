import { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const { pathname } = window.location;

const path = pathname !== '/' ? `./demoApps${pathname}` : '.';
const App = lazy(() => import(`${path}/App.tsx`));

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Suspense fallback={<div>Loading...</div>}>
        <App />
    </Suspense>
);
