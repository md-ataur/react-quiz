import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Api from './components/Api/Api';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import Payment from './components/Payment/Payment';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Result/Result';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/api" element={<Api />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
