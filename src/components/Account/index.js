import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Account = props => {
  const onClickBtn = () => {
    const {history} = props
    Cookies.remove('jwt-token')
    history.replace('/login')
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    console.log('clicked', history)
  }
  const username = localStorage.getItem('username')
  const password = localStorage.getItem('password')

  return (
    <>
      <Header />
      <div className="account-box">
        <div className="details">
          <h1 className="account-heading">Account</h1>
          <hr style={{width: '90%'}} size="3" color="#CBD5E1" />
          <div className="account-details">
            <h1 className="heading">Member ship</h1>
            <div>
              <p className="para-desc">email : {username}</p>
              <p className="para-password">password : {password}</p>
            </div>
          </div>
          <hr style={{width: '90%'}} size="3" color="#CBD5E1" />
          <div className="account-details">
            <h1 className="heading">Plan details</h1>
            <p className="para-desc">Premium</p>
            <p className="ultra-p">Ultra HD</p>
          </div>
          <button className="logoutBtn" type="button" onClick={onClickBtn}>
            Logout
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default withRouter(Account)
