import { Navigate, Route, Routes } from "react-router-dom";
import { Page404 } from "./pages/Page404";
import { Payment } from "./pages/Payment";
import { Success } from "./pages/Success";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Payment />} />
      <Route path="/success" element={<Success />} />
      <Route path="/*" element={<Navigate to="/404" />} />
      <Route path="404" element={<Page404 />} />
    </Routes>
  );
}
