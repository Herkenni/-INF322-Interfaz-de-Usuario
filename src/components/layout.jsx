import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import MapaPage from '../pages/mapa_page'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="layout">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mapa" element={<MapaPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Layout
