import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="notFound">
    <h1 className="lostHeading">Lost Your Way ?</h1>
    <p className="lostPara">
      we are sorry the page you requested could not be found <br /> Please go
      back to the homepage.
    </p>
    <Link to="/">
      <button type="button" className="lostButton">
        Go to Home
      </button>
    </Link>
  </div>
)

export default NotFound
