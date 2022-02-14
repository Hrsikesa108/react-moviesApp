import Cookies from 'js-cookie'
import {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'

import './index.css'

const trendingApi = 'https://apis.ccbp.in/movies-app/trending-movies'

const topRatedMoviesApi = `https://apis.ccbp.in/movies-app/top-rated-movies`

const originalsApi = `https://apis.ccbp.in/movies-app/originals`

const popularMoviesApi = `https://apis.ccbp.in/movies-app/popular-movies`

const movieItemDetailsApi = `https://apis.ccbp.in/movies-app/movies/{movieId}`

const searchMoviesApi =
  'https://apis.ccbp.in/movies-app/movies-search?search={searchText}'

export default class Home extends Component {
  state = {searchText: ''}

  componentDidMount() {
    this.loadData()
    const a = Cookies.get('jwt-token')
    console.log('jwt', a)
  }

  loadData = async () => {
    const options = {
      headers: {
        Authorization: `Bearer ${Cookies.get('jwt-token')}`,
      },
      method: 'GET',
    }

    const response = await fetch(trendingApi, options)
    const data = await response.json()
    console.log('data', data)
  }

  onClickSearchButton = item => {
    // const {searchText} = this.state
    this.setState({
      searchText: item,
    })
  }

  render() {
    const {searchText} = this.state
    return (
      <>
        <Header onClickButton={this.onClickSearchButton} />
        <div>
          <h1>hello</h1>
        </div>
        <Footer />
      </>
    )
  }
}
