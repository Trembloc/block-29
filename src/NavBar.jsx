import { Link } from 'react-router-dom';

const NavBar = () => {
  try {
    return (
      <nav>
        <Link to='/'> Home Page </Link>
        <Link to='/puppies'> Puppy List </Link>
        <Link to='/submit'>Submit Puppy</Link>
        <Link to='/delete'>Delete Puppy</Link>
      </nav>
    )
  } catch (err) {
    console.log(err)
  }
}
export default NavBar