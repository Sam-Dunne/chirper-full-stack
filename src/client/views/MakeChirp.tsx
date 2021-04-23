import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IUsersTable } from '../../typings/typings'


const MakeChirp = (props: MakeChirpProps) => {
    const history = useHistory();
    // control state of name input
    const [userName, setUserName] = useState<IUsersTable[]>([]);
     // control state of select element userid
    const [selectedUserID, setSelectedUserID] = useState('0');
    
    // controls state of chirp msg input
    const [newChirp, setNewChirp] = useState('');
    const handleSetNewChirp = (e: React.ChangeEvent<HTMLInputElement>) => setNewChirp(e.target.value)

    useEffect(() => {
        fetch('/api/users')
            .then(res => res.json())
            .then(users => setUserName(users));
    }, []);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fetch(`/api/chirper/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userid: selectedUserID, content: newChirp, location: "oklahoma" })
        })
            .then(res => res.json())
            .then(serverRes => {
                console.log(serverRes);
                history.push('/');  // loads HOME view
            });
    };


    return (

        <section>
            <form
                id="chirp-form"
                className="form-group bg-info shadow rounded m-5 p-5">
                <div className="mb-3">
                    <select value={selectedUserID}
                        onChange={e => setSelectedUserID(e.target.value)}
                        className="form-control">
                        <option value="0">Select Yourself, Fool!</option>
                        {userName.map(user => (
                            <option key={`user-option-${user.id}`} value={user.id}>{user.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control mb-2"
                        id="exampleInputPassword1"
                        placeholder="What's good yo?!?"
                        value={newChirp}
                        onChange={handleSetNewChirp}
                    />
                </div>
                <div className="container ">
                    <div className="row justify-content-between align-items-center">
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="btn btn-secondary">
                            Chirpr It
                        </button>
                        <Link to="/" className="btn btn-link bg-light rounded ">
                            Back Home
                        </Link>
                    </div>
                </div>
            </form>
        </section>
    );
};

interface MakeChirpProps { };

export default MakeChirp;