import { Routes, Route } from 'react-router-dom'

import NavBar from './NavBar.jsx'
import PuppyList from './PuppyList.jsx'
import DeleteForm from './Delete.jsx'
import SubmitForm from './Submit.jsx'
const  App = () => {
  

  return (
    <>
      <NavBar />

      <h1>Puppy Bowl</h1>

      <Routes>
        <Route path='/' element={<h2>Welcome</h2>} />
        <Route path='/puppies' element={<PuppyList />} />
        <Route path= '/submit' element={<SubmitForm />} />
        <Route path= '/delete' element={<DeleteForm />} />
      </Routes>
    </>
  )
}

export default App
