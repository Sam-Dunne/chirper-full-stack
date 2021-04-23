import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { IChirp } from '../../typings/typings';
import Moment  from 'moment';

/* HOOK REACT EXAMPLE */
const Details = (props: DetailsProps) => {
	const { id } = useParams<{ id: string }>();
	const [chirp, setChirp] = useState<IChirp>(null);

	useEffect(() => {
		fetch(`/api/chirper/${id}`)
			.then(res => res.json())
			.then(chirp => setChirp(chirp))
	}, [id])


	return (
		<section>
			<div className="card">
				<div className="card-body">
					{/* {chirp?foo} is optional chain operator */}
					<h4 className="card-title">{chirp?.name}</h4>
					<h6 className="card-title">{chirp?.content}</h6>
					<h6 className="card-title">Location: {chirp?.location}</h6>
					<h6 className="card-title">{Moment(chirp?._created).format("MMM Do YY")}</h6>
					<div className="container ">
						<div className="row justify-content-between align-items-center">
							<Link to={`/edit/${id}`}
								className="btn btn-link bg-secondary rounded my-2 mx-auto p-2">
								To Edit
							</Link>
							<Link to={`/`}
								className="btn btn-link bg-secondary rounded my-2 mx-auto p-2">
								Back to Home
							</Link>
						</div></div>
				</div>
			</div>

		</section>

	);
};

interface DetailsProps { }



export default Details;