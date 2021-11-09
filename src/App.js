import "./style.css"
let greeting
let style;

let date = new Date()
let hour = date.getHours()
if(hour >=7 && hour <= 12){
  greeting="Good Morning";
  style={
    color:"orange",
    fontSize:"7vmin"
  }
}else if(hour <= 6 && hour >=12){
  greeting = "Good Afternoon"
  style={
    color:"yellow",
    fontSize:"7vmin"
  }
}

else{
  greeting="Good Night"
  style={
    color:"black",
    fontSize:"7vmin"
  }
}
function App() {
  return (
  <>
   <div className="contain">
  <h1>Hello Sir <span style={style}>{greeting}</span></h1>
  </div>
  </>
  )
}

export default App;
