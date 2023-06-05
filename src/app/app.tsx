import { Route, Switch } from 'react-router-dom';

import { AppLayout } from './containers/app-layout';
import { MainPage } from './containers/mainPage/loadable';

export const App = () => (
  <AppLayout>
    <Switch>
      <Route path="/" component={MainPage} />
      <Route
        path="*"
        component={() => (
          <div
            style={{
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
              fontSize: 40,
            }}>
            Template
          </div>
        )}
      />
    </Switch>
  </AppLayout>
);
