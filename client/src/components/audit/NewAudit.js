import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
	FormGroup,
	Label,
	Input,
	Button,
	Form,
	Alert,
	Container
} from 'reactstrap';
import { connect } from 'react-redux';
import { fetchStores } from '../../actions/storesAction';
import { fetchChecklists } from '../../actions/checklistActions';
import { startAudit } from '../../actions/audit/auditActions';

class NewAudit extends Component {
	componentDidMount() {
		this.props.fetchStores();
		this.props.fetchChecklists();
	}

	renderStores = () => {
		if (this.props.stores.length !== 0) {
			return this.props.stores.map(store => {
				return (
					<option key={store._id} value={store._id}>
						{store.number} - {store.city} {store.address}
					</option>
				);
			});
		} else {
			return <option>Loading...</option>;
		}
	};

	// TODO
	// Chenge this method to fetch checklist type instead of fetching stores
	// Create action to fetch checklist and Create reducer
	renderChecklist = () => {
		if (this.props.checklists.length !== 0) {
			return this.props.checklists.map(checklist => {
				return (
					<option key={checklist._id} value={checklist._id}>
						{checklist.name}
					</option>
				);
			});
		} else {
			return <option>Loading...</option>;
		}
	};

	renderStoreSelect = ({ input, label, meta, type }) => {
		return (
			<FormGroup className='mb-4'>
				<Label for={input.name}>
					<strong>{label}</strong>
				</Label>
				<Input
					{...input}
					id={input.name}
					type={type}
					// placeholder={`Enter ${label}`}
				>
					<option value='null'>Wybierz sklep</option>
					{this.renderStores()}
				</Input>
			</FormGroup>
		);
	};
	renderChecklistSelect = ({ input, label, meta, type }) => {
		return (
			<FormGroup className='mb-4'>
				<Label for={input.name}>
					<strong>{label}</strong>
				</Label>
				<Input
					{...input}
					id={input.name}
					type={type}
					// placeholder={`Enter ${label}`}
				>
					<option value='null'>Wybierz rodzaj audytu</option>
					{this.renderChecklist()}
				</Input>
			</FormGroup>
		);
	};

	onSubmit = fomrVals => {
		this.props.startAudit(fomrVals);
	};

	render() {
		return (
			<div>
				<Container>
					<h1>New Audit</h1>
					<Alert color='primary'>
						Wybierz sklep i rodzaj listy audytowej
					</Alert>
					<div className='mb-5 shadow p-4'>
						<Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
							<Field
								component={this.renderStoreSelect}
								name='storeSelect'
								type='select'
								label='Wybierz sklep'
							/>
							<Field
								component={this.renderChecklistSelect}
								name='checklistSelect'
								type='select'
								label='Wybierz rodzaj audytu'
							/>
							<Button
								color='dark'
								block
								size='sm'
								className='mt-4'
							>
								Start new audit
							</Button>
						</Form>
					</div>
				</Container>
			</div>
		);
	}
}

const formWrapped = reduxForm({ form: 'audit' })(NewAudit);

const mapStateToProps = state => {
	return {
		stores: state.store.stores,
		checklists: state.checklist.checklists
	};
};

export default connect(
	mapStateToProps,
	{ fetchStores, fetchChecklists, startAudit }
)(formWrapped);
