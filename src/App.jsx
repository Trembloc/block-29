import { Routes, Route } from 'react-router-dom'



import NavBar from './NavBar.jsx'
const  App = () => {
  

  return (
    <>
      <NavBar />

      <h1>Puppy Bowl</h1>

      <Routes>
        <Route path='/' element={<h2>Welcome</h2>} />
        <Route path='/puppies' element={<h2>Puppy List</h2>} />
        <Route path= '/submit' element={<h2>Submit Puppy Form</h2>} />
        <Route path= '/delete' element={<h2>Delete Puppy</h2>} />
      </Routes>
    </>
  )
}

export default App
