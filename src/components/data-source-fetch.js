import React from 'react';
const withDataSourceFetch = (children, fetchData, removeItem) => {
  return class DataSourceFetch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isFetching: true,
        data: [],
        message: ''
      }
      this.remove = this.remove.bind(this);
    }
  
    async componentDidMount() {
      this._fetchData();
    }

    async remove(e) {
      await removeItem(e.target.id);
      this._fetchData();
    };
  
    async _fetchData () {
      try {
        this.setState({...this.state, isFetching: true});
        var data;
        if (this.props.id) {
          data = await fetchData(this.props.id);
        } else {
          data = await fetchData();
        }
        this.setState({...this.state, isFetching: false, data: data, message: ''});
      } catch(e) {
        this.setState({ ...this.state, isFetching: false, message: e.message});
      }
    }
  
    render() {
      return children({...this.state, remove: this.remove});
    }
  
  
  };
};

export default withDataSourceFetch;