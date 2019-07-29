import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { fetchChecklist } from '../../actions/audit/auditActions';

class CategoriesList extends Component {
	componentDidMount() {
		// change hardcodec id value
		this.props.fetchChecklist('5d3ec8a877933623904e9d45');
	}
	renderTable = () => {
		if (this.props.checklist) {
			return (
				<Table>
					<thead>
						<tr>
							<th>LP</th>
							<th>Category Name</th>
							<th>Points</th>
						</tr>
					</thead>
					<tbody>
						{this.props.checklist.categories.map(
							(category, index) => {
								return (
									<tr key={category._id}>
										<th scope='row'>{index + 1}</th>
										<td>{category.name}</td>
										<td>Otto</td>
										<td>@mdo</td>
									</tr>
								);
							}
						)}
					</tbody>
				</Table>
			);
		} else {
			return <div>Loading ...</div>;
		}
	};

	render() {
		return <div>{this.renderTable()}</div>;
	}
}

const mapStateToProps = state => {
	return {
		checklist: state.audit.checklist
	};
};

export default connect(
	mapStateToProps,
	{ fetchChecklist }
)(CategoriesList);
