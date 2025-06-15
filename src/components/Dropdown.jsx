import { NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Dropdown = ({ title, links }) => {
  return (
    <NavDropdown title={title} id={`offcanvasNavbarDropdown-expand`}>
      {
        links.map((link, ind) => (
          <NavDropdown.Item 
            as={NavLink} 
            to={link.url} 
            key={link.url + ind}
          >
            {link.title}
          </NavDropdown.Item>
        ))
      }
    </NavDropdown>
  );
}

export default Dropdown;


{/* <img src="person.png" alt="User Icon" className='img-fluid ' style={{ width: '30px', height: '30px' }} /> */}