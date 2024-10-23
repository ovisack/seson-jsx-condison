import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Nav from './componet/Nav'
import AllProducts from './componet/Allproducts'
import CartContainer from './componet/cart/CartContainer'



function App() {


  
 const [isActive,setIsActive]= useState({
cart:true,
status:"active",


 })

 const  handleIsActive= (status) =>{

  if(status=="cart"){
    setIsActive({
      cart:true,
status:"active",


    })
}

else{
  setIsActive({

    cart:false,
    status:"active",

  })
}

 }


console.log(isActive);



  return (
    <>
    
   <Nav></Nav>
   <div className="div">
   <AllProducts></AllProducts>

   <CartContainer handleIsActive={handleIsActive}></CartContainer>
   </div>

  </>
  )
}
 
export default App
