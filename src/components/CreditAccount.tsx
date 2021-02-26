import React from 'react';
import { connect } from 'react-redux';
import { creditAccount } from '../redux/actions';
import {Button, Input} from "@material-ui/core";

type CreditAccountProps = {
  creditAccount?: any;
  id?: number;
  type?: string;
}

type CreditAccountState = {
  amount: number;
  id: number;
  type?: string;
}

class CreditAccount extends React.Component<CreditAccountProps, CreditAccountState> {
  constructor(props: any) {
    super(props);
    this.state = { type: props.type, amount: 0, id: props.id };
  }

  addFunds = (input: any) => {
    this.setState({ ...this.state, amount: input });
  }

  handleCreditAccount = () => {
    this.props.creditAccount(this.state.type, this.state.id, this.state.amount);
    this.setState({ ...this.state, amount: 0 });
  };

  render() {
    return (
      <div>
        <Input
          onChange={e => this.addFunds(e.target.value)}
          value={this.state.amount}
          placeholder="Amount"
        />
        <Button color="primary" variant="outlined" className="list-item" onClick={this.handleCreditAccount}>
          Add Funds
        </Button>
      </div>
    )
  }
}

export default connect(
  null,
  { creditAccount }
)(CreditAccount);
