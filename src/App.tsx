import React, {Suspense} from "react";

import {CircularProgress} from "@mui/material";

import Header from "./layout/Header";
const UsersPage = React.lazy(() => import('./pages/UsersPage'));

function App() {


    return (
        <>
            <Header />

            <Suspense fallback={<CircularProgress sx={{m:'20px 50%'}}/>}>
                <UsersPage/>
            </Suspense>
        </>
    );
}

export default App;
