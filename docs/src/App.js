import React from 'react';
import * as library from '@kvraamkey/react-ui';
import Button from './components/Button';

const importView = (DemoComponentName) =>
  React.lazy(() =>
    import(`./${DemoComponentName}`).catch((e) =>
      console.log('demo component not exported')
    )
  );

const App = () => {
  return (
    <section className='docs'>
      <section className='docs-nav'>
        <div className='docs-nav-header'>
          <span>React UI</span>
          <input type='search' placeholder='Search Component' />
        </div>
        <div className='docs-nav-list'>
          {Object.keys(library).map((lib) => (
            <span key={lib}>{lib}</span>
          ))}
        </div>
      </section>
      <React.Suspense fallback='loading'>
        <Button />
      </React.Suspense>
    </section>
  );
};

export default App;
