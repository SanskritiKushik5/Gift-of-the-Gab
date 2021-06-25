import { Component } from 'react';
import { withRouter } from 'react-router';

class Refresh extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.location.reload();
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(Refresh)