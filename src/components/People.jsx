import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeople } from '../utils/peopleSlice';

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
        <div className='z-2'> 
            <h2>Search People</h2>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search for an actor/actress..."
            />
            <button onClick={handleSearch}>Search</button>

            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>Error: {error}</p>}

            <ul>
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
            </ul>
        </div>
    );
};

export default People;
