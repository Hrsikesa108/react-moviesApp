import './index.css'

const google =
  'https://res.cloudinary.com/camedia/image/upload/v1643870569/google_r3rpqh.png'
const instagram =
  'https://res.cloudinary.com/camedia/image/upload/v1643870569/instagram_os6yfw.png'
const twitter =
  'https://res.cloudinary.com/camedia/image/upload/v1643870569/twitter_dslpm2.png'
const youtube =
  'https://res.cloudinary.com/camedia/image/upload/v1643870569/youtube_pmlvgb.png'

const Footer = () => (
  <footer className="footer-box">
    <div className="footer-items">
      <div className="footer-logos">
        <img src={google} alt="google" className="footer-logo" />
        <img src={twitter} alt="twitter" className="footer-logo" />
        <img src={instagram} alt="instagram" className="footer-logo" />
        <img src={youtube} alt="youtube" className="footer-logo" />
      </div>
      <h1 className="footer-heading">Contact Us</h1>
    </div>
  </footer>
)

export default Footer
