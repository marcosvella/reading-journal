import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Cadastro } from '../pages/Cadastro'
import { Livros } from '../pages/Livros'
import { Sobre } from '../pages/Sobre'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' exact Component={Home} />
      <Route path='/sobre' exact Component={Sobre} />
      <Route path='/cadastrar' exact Component={Cadastro} />
      <Route path='/lista-de-livros' exact Component={Livros} />
    </Routes>
  )
}