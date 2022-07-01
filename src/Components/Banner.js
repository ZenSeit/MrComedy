import '../Stylesheets/banner.css'



export default function Banner() {
  return (
  <div className="banner-container">
    <div className="banner-title">
        <h1 className='title-app'>Mr Comedy</h1>
    </div>
    <div className="banner-icon">
        <img className='logo' src={require('../Images/hisoka.png')}/>
    </div>

  </div>
  )
}
