
import Cart from '../../cart/Cart';
import './cart.css'
export default function CartContainer({handleIsActive,isActive}){

    return (
        <div>
            <h3> CartContainer  </h3>


            <div className="div">
           <div onClick={()=>handleIsActive("cart")} 
           className={`${isActive.cart?"btn active":"btn"}`}>Cart</div>
           <div onClick={()=>handleIsActive("about")} 
           className={`${isActive.cart?" btn ":"active btn"}`}>about</div>

           </div>
           <Cart></Cart>
           
        </div>
    );
};

// export default CartContainer;