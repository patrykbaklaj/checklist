import React, { Component } from 'react';
import { Container } from 'reactstrap';
import CategoriesList from './CategoriesList';

class MainAudit extends Component {
	render() {
		return (
			<div>
				<Container>
					<h1>Process</h1>

					<CategoriesList />
				</Container>
			</div>
		);
	}
}

export default MainAudit;
