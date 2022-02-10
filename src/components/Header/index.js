import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import './index.css'

// let warningImage =
//   'https://res.cloudinary.com/camedia/image/upload/v1643733469/Icon_gmbv0g.png'
// let someThingWentWrong =
//   'https://res.cloudinary.com/camedia/image/upload/v1643733367/Group_fmzkut.png'
const avatar =
  'https://res.cloudinary.com/camedia/image/upload/v1643733159/Avatar_tedtdx.png'
// let illustratorImage =
//   'https://res.cloudinary.com/camedia/image/upload/v1643733728/Illustration_vdcdih.png'

//   export default class Header extends Component{
//       state={
//           searchInput : ''
//       }

//       render(){}

//   }
class Header extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearch = event => {
    // console.log('event', event.target.value)
    this.setState({searchInput: event.target.value})
  }

  onClickButtonSearch = () => {
    const {searchInput} = this.state
    const {onClickButton} = this.props
    onClickButton(searchInput)
  }

  render() {
    const {searchInput} = this.state
    return (
      <nav className="nav-header">
        <div className="nav-left-part">
          <div className="left-box">
            <img
              src="https://res.cloudinary.com/camedia/image/upload/v1643733018/Group_7399_oabyzr.png"
              alt="login website logo"
              className="header-website-logo"
            />
          </div>
          <div className="left-box">
            <Link to="/" className="link-h">
              Home
            </Link>
            <Link to="/" className="link-h">
              Popular
            </Link>
          </div>
        </div>
        <div className="nav-right-part">
          <div className="search-container">
            <input
              type="search"
              value={searchInput}
              onChange={this.onChangeSearch}
              placeholder="Search"
              className="input-box"
            />
            <button
              type="button"
              onClick={this.onClickButtonSearch}
              data-testid="searchButton"
              className="search-button "
            >
              <AiOutlineSearch color="#ffffff" />
            </button>
          </div>
          <Link to="/account">
            <img src={avatar} alt="avatar" className="avatar-img" />
          </Link>
        </div>
      </nav>
    )
  }
}

export default Header
