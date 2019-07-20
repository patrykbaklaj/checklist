import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
	FormGroup,
	Label,
	Input,
	Button,
	Row,
	Col,
	Form,
	Alert,
	Container
} from 'reactstrap';
import { connect } from 'react-redux';
import { fetchStores } from '../../actions/storesAction';

class NewAudit extends Component {
	componentDidMount() {
		this.props.fetchStores();
	}

	renderOptions = () => {
		if (this.props.stores.length !== 0) {
			return this.props.stores.map(store => {
				return <option key={store._id}>{store.number} - {store.city} {store.address}</option>;
			});
		} else {
			return <option>Loading...</option>;
		}
	};

	renderSelect = ({ input, label, meta, type }) => {
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
                    <option >Wybierz sklep</option>
					{this.renderOptions()}
				</Input>
			</FormGroup>
		);
	};

	render() {
		return (
			<div>
				<Container>
					<h1>New Audit</h1>
					<Alert color='primary'>Wybierz sklep</Alert>
					<div className='mb-5 shadow p-4'>
						<Form>
							<Field
								component={this.renderSelect}
								name='storeSelect'
                                type='select'
                                label="Wybierz sklep"
							/>
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
		stores: state.store.stores
	};
};

export default connect(
	mapStateToProps,
	{ fetchStores }
)(formWrapped);
