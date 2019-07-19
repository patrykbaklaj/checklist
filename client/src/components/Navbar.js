import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class MainNavbar extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        return (
            <div>
                <Navbar color='dark' dark>
                    <Container>
                        <NavbarBrand href='/' className='mr-auto'>
                            Checklist
                        </NavbarBrand>
                        <NavbarToggler
                            onClick={this.toggleNavbar}
                            className='mr-2'
                        />
                        <Collapse isOpen={!this.state.collapsed} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink to='/' tag={Link}>
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to='/' tag={Link}>
                                        New audit
                                    </NavLink>
                                </NavItem>

                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Admin
                                    </DropdownToggle>
                                    <DropdownMenu right className="bg-dark">
                                        <DropdownItem>
                                            <NavLink
                                                tag={Link}
                                                to='/admin/categories/list'
                                            >
                                                Categories
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink
                                                tag={Link}
                                                to='/admin/questions/list'
                                            >
                                                Questions
                                            </NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default MainNavbar;
