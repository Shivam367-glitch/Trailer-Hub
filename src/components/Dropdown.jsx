import { NavDropdown } from 'react-bootstrap';
import {NavLink } from 'react-router-dom';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
const Dropdown = ({ title, links,onClick }) => {
  
  return (
    <NavDropdown title={title} id={`Dropdown-${title}`}>
      {
        links.map((link, ind) => (
          <NavDropdown.Item 
            as={NavLink} 
            to={link.url} 
            key={link.url + ind}
           onClick={onClick}
          >
            {link.name}
          </NavDropdown.Item>
        ))
      }
    </NavDropdown>
  );
}

export default memo(Dropdown);


{/* <img src="person.png" alt="User Icon" className='img-fluid ' style={{ width: '30px', height: '30px' }} /> */}