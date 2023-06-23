import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { publicRoutes } from './routes';
function App() {
    const [scroll, setScroll] = useState(false);
    const [scroll2, setScroll2] = useState(false);
    const [scroll3, setScroll3] = useState(false);
    const [scroll4, setScroll4] = useState(false);
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route) => {
                        const Layout = route.layout === null && Fragment;
                        const Page = route.component;
                        return (
                            <Route
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page
                                            scroll={scroll}
                                            setScroll={setScroll}
                                            scroll2={scroll2}
                                            setScroll2={setScroll2}
                                            scroll3={scroll3}
                                            setScroll3={setScroll3}
                                            scroll4={scroll4}
                                            setScroll4={setScroll4}
                                        />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
