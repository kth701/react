import './Header.css'

const Header = () => {

  return (
    <div className="Header alert alert-warning ">
      <h5>오늘은 🏚</h5>
      <h4>{new Date().toDateString()}</h4>
    </div>
  )
}

export default Header;