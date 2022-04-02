import React from 'react';
import locationIcon from '../../icons/location.svg';

function Card(props) {
	return (
		<figure className="card">
			<img className="card__img" src={props.imageUrl} width={125} height={168} alt={props.title} />
			<div className="card__location">
				<img className="card__location-icon" src={locationIcon} width={7} height={9.5} alt="" aria-hidden="true" />
				<p className="card__location-country">{props.location}</p>
				<a className="card__location-link" href={props.googleMapsUrl}>
					View on Google Maps
				</a>
			</div>
			<h2 className="card__title">{props.title}</h2>
			<p className="card__dates">
				<time className="card__dates-start" dateTime={props.dateTimeStart}>
					{props.startDate}
				</time>
				{` - `}
				<time className="card__dates-end" dateTime={props.dateTimeEnd}>
					{props.endDate}
				</time>
			</p>
			<figcaption className="card__description">{props.description}</figcaption>
		</figure>
	);
}

export default Card;
