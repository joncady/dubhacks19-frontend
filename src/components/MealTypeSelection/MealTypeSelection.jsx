import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Meal Type
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Meal Type</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Breakfast</DropdownItem>
          <DropdownItem>Lunch</DropdownItem>
          <DropdownItem>Dinner</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
