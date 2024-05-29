
const  Controller = ( {handleSetCount}) => {
  return(
    <div className="controller">
      <button className="btn btn-primary" onClick={ () => handleSetCount(-1)}>-1</button>
      <button className="btn btn-success" onClick={ () => handleSetCount(-10)}>-10</button>
      <button className="btn btn-primary" onClick={ () => handleSetCount(-100)}>-100</button>
      <button className="btn btn-success" onClick={ () => handleSetCount(100)}>+100</button>
      <button className="btn btn-primary" onClick={ () => handleSetCount(10)}>+10</button>
      <button className="btn btn-success" onClick={ () => handleSetCount(1)}>+1</button>
    </div>
  )
}

export default Controller;