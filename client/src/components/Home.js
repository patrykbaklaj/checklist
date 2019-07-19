import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
	render() {
		return (
			<div>
				<Container>
					<h1>User Home Page</h1>
					<h3>Rozpocznij nowy audyt</h3>
					<Button tag={Link} to='/audit/new-audit' size='sm'>
						New audit
					</Button>
				</Container>
			</div>
		);
	}
}

export default Home;
