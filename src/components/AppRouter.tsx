import React from 'react';
import { Route,Routes, Navigate} from "react-router-dom"
import {privateRoutes, publicRoutes, RouteName} from "../routes";

const AppRouter = () => {

    const auth = false;
    return (
        auth
        ?
        <Routes>
            {privateRoutes.map(route=>
                <Route key={route.path} path={route.path} Component={route.component} index={route.index}/>
            )}
            <Route
                path="*"
                element={<Navigate to={RouteName.EVENT} replace />}
            />
        </Routes>
        :
        <Routes>
            {publicRoutes.map(route=>
                <Route key={route.path} path={route.path} Component={route.component} index={route.index}/>
            )}
            <Route
                path="*"
                element={<Navigate to={RouteName.LOGIN} replace />}
            />
        </Routes>
    );
};

export default AppRouter;