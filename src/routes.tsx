// react-router-dom configuration ts file
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

// If page not exist redirect to NotFound page

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default RoutesComponent
