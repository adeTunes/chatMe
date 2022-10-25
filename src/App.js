import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import LandingPage from "./pages/LandingPage";
import "./app.css";

function App() {
    return (
        <>
            <Router>
                <AuthProvider>
                    {/* <Header /> */}
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route
                            path="/app"
                            element={
                                <PrivateRoute>
                                    <Home />
                                </PrivateRoute>
                            }
                        />
                        {/* <Route path="/login" element={<Login />} /> */}
                    </Routes>
                </AuthProvider>
            </Router>
        </>
    );
}

export default App;
