import React, { Component } from 'react';

import './List.css'

import axios from 'axios';
import Select from 'react-select';

import Card from './Card/Card';

class List extends Component {

  state = {
    cards: [],
    limit: 30,
    page: 1,
    total: null,
    scrolling: false,
    options: [],
    selectedOption: {value: 11, label: "Английский язык"},
  }

  componentWillMount() {
    this.loadCards();
    this.selectCard()
    this.scrollListener = window.addEventListener('scroll', (e) => {
      this.handleScroll(e)
    })
  }

  handleScroll = () => {
    const { scrolling, totalPages, page} = this.state
    if (scrolling) return
    if (totalPages <= page) return
    let lastLi = document.querySelector('ul.contacts > li:last-child')
    let lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
    let pageOffset = window.pageYOffset + window.innerHeight
    let bottomOffset = 20
    if (pageOffset > lastLiOffset - bottomOffset) {
      this.loadMore()
    }
  }

  selectCard = () => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    axios.get(proxy + 'http://stage.vcs.resh.edu.ru/api/subject/')
    .then( response => {
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

  handleChange = (selectedOption) => {
    this.setState({ selectedOption: selectedOption },
    () => {
      const { limit, page } = this.state
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const url =`http://stage.vcs.resh.edu.ru/api/scene_plans/?limit=${limit}&page=${page}&subjectId=${this.state.selectedOption.value}`
        axios.get(proxy + url)
        .then( response => {
          const cardsRes = response.data.rows;
          const FilteredCards = cardsRes.map(card => {
            return {
              ...card
            }
          })
        this.setState({
          cards: FilteredCards,
          scrolling: false
        })
      })
    })
    console.log(`Option selected:`, selectedOption);
  }

  loadCards = () => {
    const { limit, page, cards } = this.state
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url =`http://stage.vcs.resh.edu.ru/api/scene_plans/?limit=${limit}&page=${page}`
    axios.get(proxy + url)
    .then( response => {
      const cardsRes = response.data.rows;
      const requestCards = cardsRes.map(card => {
        return {
          ...card
        }
      })
      this.setState({
        cards: [...cards, ...requestCards],
        scrolling: false
      })
    })
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }), this.loadCards)
  }

  render() {
    const { selectedOption } = this.state;

    const cards = this.state.cards.map(card => {
      return (
        <li key={card.id}>
          <Card 
          id={card.theme}
          title={Object.keys(card.work_program.subject).map(key => card.work_program.subject[key])}
          class={Object.keys(card.work_program.school_class).map(key => card.work_program.school_class[key])}
          number={card.number}
          theme={card.theme}
          status={card.readable_status}
          filename={card.file_name}
          />
    </li>)})
    return (
      <div className="list">
        <div className="list-select">
          <span className="list-name">Предмет:</span>
          <Select className="list-select"
            value={selectedOption}
            onChange={this.handleChange}
            options={this.state.options}/>
        </div>
        <ul className="contacts contact-container">
          {cards}
        </ul>
      </div>
    )
  }
}

export default List;