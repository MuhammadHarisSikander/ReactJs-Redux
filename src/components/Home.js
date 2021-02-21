import React from 'react'

const Home = () =>{
    return(
        <div className="container">
            <div className="buy-wrapper">
                <img src="http://cdn.onlinewebfonts.com/svg/img_550770.png" />
            </div>
            <h1>Home Component</h1>

            <div className="cart-wrapper">
                <div className="img-wrapper item" > 
                    <img src="https://thegoodguys.sirv.com/products/50073438/50073438_744125.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&q=90" />
                </div>
                <div className="text-wrapper item"><span>IPhone-12 : </span><span>$5000.00</span></div>
                <div className="btn-wrapper item"><button>Add to cart</button></div>
            </div>



        </div>
    )
}
export default Home