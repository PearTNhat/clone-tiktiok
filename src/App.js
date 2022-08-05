import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import { publicRoures } from '~/routers';
import { DefaultLayout } from '~/component/Layout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoures.map((router, index) => {
                        // nếu router k có layout thì mặc đinh là Defaylt
                        let Layout = DefaultLayout;
                        if (router.layout) {
                            Layout = router.layout;
                        } else if (router.layout === null) {
                            Layout = Fragment;
                        }
                        const Page = router.component;
                        return (
                            <Route
                                key={index}
                                path={router.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
