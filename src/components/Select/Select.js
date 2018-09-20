import React, { Component } from 'react';
import axios from 'axios';

import Select from 'react-select';
// import axios from '../../axios';

const options = [
  {
  "id": 51,
  "title": "Алгебра и начала математического анализа"
  },
  {
  "id": 11,
  "title": "Английский язык"
  },
  {
  "id": 5,
  "title": "Биология"
  }
];

class SelectComponent extends Component {
  state = {
    selectedOption: null,
  }

  componentWillMount() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    axios.get(proxy + 'http://stage.vcs.resh.edu.ru/api/subject/')
    .then( response => {
      console.log(response);
    })
  }

  // componentDidMount() {
  //   const proxy = "https://cors-anywhere.herokuapp.com/";
  //   axios.post(proxy+'http://stage.vcs.resh.edu.ru/login', JSON.stringify({
  //     username: 'demo',
  //     password: 'demo'
  //     })
  //   )
  //     .then( response => {
  //       console.log(response);
  //       // const posts = response.data.slice(0, 4);
  //       // const updatedPosts = posts.map(post => {
  //       //   return {
  //       //     ...post,
  //       //     name: "Alex"
  //       //   }
  //       // })
  //       // this.setState({posts: updatedPosts})
  //     })
  //     // .catch((error) => {
  //     //   console.log(error)
  //     //     this.setState({error: true});
  //     // })
  //   axios.get(proxy + 'http://stage.vcs.resh.edu.ru/api/subject/')
  //   .then( response => {
  //     console.log(response);
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
        options={options}
      />
    );
  }
}

export default SelectComponent;