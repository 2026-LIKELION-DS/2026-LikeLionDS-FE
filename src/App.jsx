import { Routes, Route } from "react-router-dom";
import "@/App.css";
import ScrollToTop from "@/hooks/ScrollToTop";
import Splash from "@routes/Splash";
import Main from "@routes/Main";
import NoticeList from "@routes/NoticeList";
import NoticeDetail from "@routes/NoticeDetail";
import ImageDetail from "@routes/ImageDetail";
import Question from "@routes/Question";
import Applicants from "@routes/Applicants";
import ApplicantsResult from "@routes/ApplicantsResult";
import AdminLogin from "@routes/AdminLogin";
import AdminMenu from "@routes/AdminMenu";
import NoticeForm from "@routes/NoticeForm";
import Error from "@routes/Error";
import ProtectedRoute from "@/ProtectedRoute";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/main" element={<Main />} />
        <Route path="/notice" element={<NoticeList />} />
        <Route path="/notice/:id" element={<NoticeDetail />} />
        <Route path="/image-detail" element={<ImageDetail />} />
        <Route path="/qna" element={<Question />} />
        <Route path="/input" element={<Applicants />} />
        <Route path="/result" element={<ApplicantsResult />} />
        <Route path="/admin" element={<AdminLogin />} />
        {/* 어드민 로그인 상태에서만 접근 가능한 라우터들 */}
        <Route
          path="/admin/menu"
          element={
            <ProtectedRoute>
              <AdminMenu />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/notice/new"
          element={
            <ProtectedRoute>
              <NoticeForm type="new" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/notice/:id/edit"
          element={
            <ProtectedRoute>
              <NoticeForm type="edit" />
            </ProtectedRoute>
          }
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
