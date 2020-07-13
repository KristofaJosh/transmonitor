import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {PulseLoader} from "react-spinners";
import {Color} from "./ui/constants/siteColors";
import NavBar from "./ui/components/organisms/navbar";
import SideBar from "./ui/components/organisms/sidebar";

const Dashboard = lazy(() => import("./ui/composite/pages/dashboard"));

function App() {
    return (
        <Suspense fallback={
            <div className={'pageloader'}>
                <PulseLoader color={Color.blue}/>
            </div>
        }
        >
            <BrowserRouter>
                <NavBar/>
                <SideBar/>
                <Switch>
                    <Route component={Dashboard}/>
                    {/*other routes will go here*/}
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
