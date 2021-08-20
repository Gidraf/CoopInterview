import logo from './assets/cooplogo.svg'
import profile_pic from './assets/profilepicture@3x.png'
import toggle from "./assets/toggle.svg"
import widthdrawcash from "./assets/cashless.svg"
import eloans from "./assets/ic_eloans.svg"
import buyairtime from "./assets/buyair.svg"
import payfav from "./assets/payfav.svg"
import duebill from "./assets/duebill.svg"
import './App.css';
import Slider from "./Slider"

function App() {
  const menus = [{
    name:"Withdraw Cash",
    image: widthdrawcash,
  },{
    name:"E-Loans",
    image:eloans
  },
  {
    name:"Buy-Airtime",
    image:buyairtime,
  },
  {
    name:"Pay Favourite",
    image:payfav,
  },
  {
    name:"Due Bills",
    image:duebill,
  },
  
]
  return (
    <div className="App">
      <div className="header">
      <img className="App-logo" src={logo}/>
     <h3 className="title">Hi Gidraf</h3>
     <div className="profile_pic">
     <img  src={profile_pic}/>
     <div className="badge">2</div>
       </div>
     
      </div>
      <ul className="ul">
        <li className="li">
          Accounts
        </li>
        <li className="li">
          Loans
        </li>
        <li className="li">
          Cards
        </li>
        <li className="li">
          Investments
        </li>
        </ul>
        <hr style={{marginBottom:".5rem", width:"95%", borderWidth:"2px", borderStyle:"solid", borderColor:"white"}}></hr>
   <Slider/>
   <div className="transaction">
     <span style={ {color: "white", fontSize:"12px"}}>VIEW RECENT TRANSACTIONS</span>
     <img src={toggle} style={{width:"1rem", marginLeft:".5rem"}}/>
   </div>
   <h2 className="action-title">Quick actions</h2>
   <div className="home">
     {renderMenus(menus)}
   </div>
    </div>
  );
}

const renderMenus = (menus)=>{
  const allMenu = menus.map((item,i)=>
  <div className="menu">
    <img src={item.image} style={{width:"50px", margin:"0"}} />
    <br/>
    <span className="text">{item.name}</span>
  </div>)
  return allMenu
}

export default App;
