import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeople } from '../utils/peopleSlice';
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import List from './List';

const People = () => {
    const dispatch = useDispatch(); 
     const { people, status, error } = useSelector((state) => state.people);
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim()) {
            dispatch(fetchPeople(query));
        }
    };

    return (
        <> 
                <Container fluid={'md'} className="text-center">                  
                    <Row as={Form} className=" justify-content-center mt-5"> 
                            <h2 className='text-white'>Search People</h2>
                            <Col xs={4}  className="border border-secondary"> 
                                <input
                                type="text"
          className="rounded-2 py-2 px-2 border-none w-100"
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search for an actor/actress..."
                            />
       
                            </Col> 
                            <Col xs={2} className="border border-secondary">
                                <Button variant="danger" onClick={handleSearch} disabled={status === 'loading'} className="w-100">
                                  {status === 'loading' ? <Spinner animation="border" size="sm" /> : "Search"}
                                </Button>
                            </Col> 
                         {status === 'failed' && <Col className="text-danger mt-3 fs-5 text-white">{error}</Col>}
                      {status==="succeeded" && people.length===0 && <h2 className="text-white">No results found</h2>}
                    </Row>
                
          {
            status==='succeeded' && people.length>0 && (
                <Row>
                     {/* <ul>
                {people.map((person) => (
                    <li key={person.id}>
                        <h3>{person.name}</h3>
                        {person.profile_path && (
                            <img 
                                src={`https://image.tmdb.org/t/p/w200${person.profile_path}`} 
                                alt={person.name} 
                            />
                        )}
                    </li>
                ))}
                </ul> */}
                <List title={"People"} peopleList={people}   showGptSearch={false}/>
                </Row>
            )
          }
</Container>
              
        </>
    );
};

export default People;
