import React from 'react';
import Card from './Card.jsx';
import datas from './datas.jsx';

function Main() {
	const cards = datas.map(data => <Card key={data.id} {...data} />);

	return <main className="main">{cards}</main>;
}

export default Main;
