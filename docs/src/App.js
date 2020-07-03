import React from 'react';
import * as library from '@kvraamkey/react-ui';

const importView = (DemoComponentName) =>
  React.lazy(() =>
    import(`./components/${DemoComponentName}`).catch((e) =>
      console.log('demo component not exported')
    )
  );

const App = () => {
  const [views, setViews] = React.useState();
  const urlParams = new URLSearchParams(window.location.search);

  React.useEffect(() => {
    const comp = urlParams.get('c') || 'Alert';
    loadViews(comp);
    // eslint-disable-next-line
  }, []);

  async function loadViews(comp) {
    window.history.replaceState(null, null, `?c=${comp}`);
    const View = await importView(comp);
    setViews(<View />);
  }

  return (
    <section className='docs'>
      <section className='docs-nav animate-opacity'>
        <div className='docs-nav-header'>
          <span>React UI</span>
          <input type='search' placeholder='Search Component' />
        </div>
        <div className='docs-nav-list'>
          {Object.keys(library).map((lib) => (
            <span
              className={urlParams.get('c') === lib ? 'active' : ''}
              key={lib}
              onClick={() => loadViews(lib)}
            >
              {lib}
            </span>
          ))}
        </div>
      </section>
      <React.Suspense fallback='loading'>{views}</React.Suspense>
    </section>
  );
};

export default App;
