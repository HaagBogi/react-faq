import './App.css';
import AllQuestions from "./pages/AllQuestions";
import Login from "./pages/Login";
import Regist from "./pages/Regist";
import ErrorPage from "./pages/ErrorPage";
import FilteredQuestionList from "./pages/FilteredQuestionList";
import QuestionPage from "./pages/QuestionPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import NewQuestion from "./pages/NewQuestion";
import Profile from "./pages/Profile";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<AllQuestions />} />
                  <Route path="login" element={<Login />} />
                  <Route path="registration" element={<Regist />} />
                  <Route path="myquestions" element={<FilteredQuestionList title='My Questions'/>}/>
                  <Route path="profile" element={<Profile />}/>
                  <Route path="newquestion" element={<NewQuestion />}/>
                  <Route path="search-question" element={<FilteredQuestionList title='Search Result'/>} />
                  <Route path=":questionTitle" element={<QuestionPage/>} />
                  <Route path="*" element={<ErrorPage />} />
              </Route>
          </Routes>
      </BrowserRouter>  );
}

export default App;
