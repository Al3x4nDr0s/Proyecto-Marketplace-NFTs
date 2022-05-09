import { Link } from 'react-router-dom'
import Footer from '../footer/footer';

export default function AdminHome() {
  

return (
    <div>
        <h3>Welcome to the Admin Section</h3>
            <h5>Here you can Select the area that you would like to edit</h5>
              <Link  to='admin/users'><Button>Users</Button></Link>
              <Link  to='admin/nfts'> <Button>Nfts</Button></Link>
              <Link to='admin/categories'><Button>Categories</Button></Link>
              
       
        <Footer></Footer>
        </div>
    )
}