import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/AllRoutes';


function App() {
  return (
    <div className="App">
<AllRoutes />
    </div>
  )
//   return (
//     <DIV>
//       <div className='favorite-main'>
// <div className='side-navbar'>
// < Sidebar/>
// </div>
// <div className='navbar'>
//    < Navbar/>
//    <AllRoutes/>
// </div>
//       </div>
//     </DIV>
//   )
}

export default App;
// const DIV= styled.div`
//   .favorite-main{
//     border: 0px solid red;
// display: flex;
// margin: auto;

//   }
//   .side-navbar{
// width: 23%;
// border: 0px solid green;
//   }
// .navbar{
//   width: 77%;
//   border: 0px solid blue;
// }
// `