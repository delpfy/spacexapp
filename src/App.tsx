import React from "react";
import { Route, Routes } from "react-router-dom";
import { Favorites } from "./Pages/Favorites/Favorites";
import { Home } from "./Pages/Home/Home";
import { Head } from "./Pages/NavbarHeader/Head";
import { NotFound } from "./Pages/NotFound/NotFound";

export default function App() {
  return (
    <>
      <Head />
      <Routes>
        <Route path="/spacexapp" element={<Home />} />
        <Route path="/spacexapp/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
