import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';

function RouterConfig({history, app}) {
  history.listen(({pathname, query}) => {
    if(pathname == '/products'){
      app.model(require('./models/Products').default)
    }else{
      app.unmodel('products');
    }
  })

  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
