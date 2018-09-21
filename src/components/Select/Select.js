import React, { Component } from 'react';
import axios from 'axios';

import Select from 'react-select';
// import axios from '../../axios';

// const options = [
// ];

class SelectComponent extends Component {
  state = {
    options: [],
    selectedOption: null,
  }

  componentWillMount() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    axios.get(proxy + 'http://stage.vcs.resh.edu.ru/api/subject/')
    .then( response => {
      console.log(response.data);
      const optionsMap = response.data.map(option => {
        return {
          value: option.id,
          label: option.title
        }
      })
      this.setState({
        options: optionsMap
      })
    })
  }

  // fillterCards = () => {
  //   const proxy = "https://cors-anywhere.herokuapp.com/";
  //   const url =`http://stage.vcs.resh.edu.ru/api/scene_plans/?limit=${limit}&page=${page}`
  //   axios.get(proxy + url)
  //   .then( response => {
  //     console.log(response.data);
  //   })
  // }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={this.state.options}
      />
    );
  }
}

export default SelectComponent;