import './Card.css'
// import pic1 from "../Images/img1.jpg"
function Card(props) {
  return (
    <div className="mycard">
      <h1>{props.name}</h1>
      <img src={props.pic} alt="mypic" />
      <h2>Roll no.: {props.rol}</h2>
      <h3>{props.date.toLocaleString()}</h3>
    </div>
  )
}

export default Card
