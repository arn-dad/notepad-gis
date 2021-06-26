import { Suspense } from "react";
import { routerConfig } from '@config/router';
import Router from './Router';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router routes={routerConfig} auth={true} />
    </Suspense>
  );
}

export default App;
