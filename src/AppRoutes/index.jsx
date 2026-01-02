// Đây là import động
import { BrowserRouter, Route, Routes } from "react-router";

import { lazy } from "react";
// Đây là import bất đồng bộ
const Example1 = lazy(() => import("@/page/Example1"));
const Example2 = lazy(() => import("@/page/Example2"));

// Page

// Components

// import Loading from "@/components/Loading";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="example1" element={<Example1 />}></Route>
        <Route path="example2" element={<Example2 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
