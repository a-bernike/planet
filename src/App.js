import { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from 'config/routes';
import Header from 'views/components/Header';
import Background from 'views/components/Background';
import { Loader } from 'views/components/widgets';

const App = props => {
    return (
        <div className="app">
            <Background />
            <Header />
            <BrowserRouter>
                <Switch>
                    {routes.map((route, idx) => {
                        return route.component ? 
                            <Route key={idx} path={route.path} exact={route.exact} render={props => (
                                <Suspense fallback={<Loader />}>
                                    <route.component {...props} />
                                </Suspense>
                            )} /> 
                            : null
                    })}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
