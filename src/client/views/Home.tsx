import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment  from 'moment';
import type { IChirp } from '../../typings/typings';

const Home = (props: HomeProps) => {

    const [chirps, setChirps] = useState<IChirp[]>([]);

    useEffect(() => {
        fetch('/api/chirper/')
            .then(res => res.json())
            .then(chirps => setChirps(chirps))
            .then(serverRes => console.log(serverRes))
    }, [])


    return (
        <section>
            {chirps?.map(chirp => (
                <div key={`chirper-${chirp.id}`} className="card rounded shadow mx-3 my-4">
                    <div className="card-body">
                        <h4 className="card-title">{chirp.name}</h4>
                        <h6 className="card-title">{chirp.content}</h6>
                        <h6 className="card-title">{chirp.location}</h6>
                        <h6 className="card-title">{Moment(chirp._created).format("MMM Do YY")}</h6>
                        <Link to={`/details/${chirp.id}`}>To Chirp Details</Link>
                    </div>
                </div>
            ))}
        </section>
    );
};

interface HomeProps { }

// export interface IChirp {
//     id: string;
//     name: string;
//     email: string;
//     password: string | number;
//     _created: string;
//     userid: string;
//     content: string;
//     location: string;
// }

export default Home;