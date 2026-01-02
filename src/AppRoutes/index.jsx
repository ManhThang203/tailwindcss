// Đây là import động
import { BrowserRouter, Route, Routes } from "react-router";

import { lazy } from "react";
// Đây là import bất đồng bộ
const Counter = lazy(() => import("@/page/Counter"));

// Page

// Components

// import Loading from "@/components/Loading";

function AppRouter() {
  return (
    <BrowserRouter>
      {/* <Loading /> */}
      <AuthProvider />
      <Header />
      <Routes>
        <Route path="counter" element={<Counter />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
