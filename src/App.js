import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Contact } from "./component/contact/Contact";
import { Home } from "./component/Home";
import { Login } from "./component/login/Login";
import { NoticeBoard } from "./component/noticeBoard/NoticeBoard";
import { Style } from "./style/Style";

export let loginHandler = {};

function App() {
  return (
    <Router>
      <Style />
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/" element={<Login />}></Route>
        <Route path="/noticeboard" element={<NoticeBoard />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
