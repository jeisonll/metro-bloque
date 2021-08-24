import React from "react";

export default function GridCategory({visible}){

    const array2=[{
        id:1,
        name:"POWER TOOLS",
        items:["9 meters inch tap",
            "A pair of brushes",
            "Carpentry tools set",
            "Clamps & Reducers",
            "Cutting Pliers Set"],
        icon:"https://cdn.shopify.com/s/files/1/0179/0453/3558/files/icon1_e1081865-e0c0-4f82-bc8c-ac0fc28cad9a_50x50.png",
        image:"https://cdn.shopify.com/s/files/1/0179/0453/3558/files/img1_400x.png"
    },{
        id:2,
        name:"GRIP TOOLS",
        items:["Cutting Pliers Set II",
           " Drilling Machine",
            "Hacksaw Blades Kit",
            "Hammer",
            "Hammer Set"],
        icon:"https://cdn.shopify.com/s/files/1/0179/0453/3558/files/icon2_b51f1a8b-f8a1-490c-892b-842f37c91d64_50x50.png",
        image:"https://cdn.shopify.com/s/files/1/0179/0453/3558/files/img2_400x.png?v=1569564040"
    },{
        id:3,
        name:"CUTTER TOOLS",
        items:["Hardware Starter kit",
            "Masonry equipments",
            "Monkey Spanners",
            "Paint Brush",
            "Reducers & Adapters"],
        icon:"https://cdn.shopify.com/s/files/1/0179/0453/3558/files/icon3_0559fa36-9456-4b2b-a3ae-88194d71cbda_50x50.png",
        image:"https://cdn.shopify.com/s/files/1/0179/0453/3558/files/img3_400x.png"
    },{
        id:4,
        name:"WRENCH TOOLS",
        items:["Safety Kit",
            "Spanner Kit",
            "Spanner Set",
            "Steel hacksaw blades",
            "The Vise"],
        icon:"https://cdn.shopify.com/s/files/1/0179/0453/3558/files/icon4_f33c2026-5ccd-4328-a001-e9d616cf4228_50x50.png",
        image:"https://cdn.shopify.com/s/files/1/0179/0453/3558/files/img4_926f209e-dd6c-41f8-899c-ca8ec08cca6b_400x.png"
    },{
        id:5,
        name:"HAMMER TOOLS",
        items:["Wrench Set",
            "A pair of brushes",
            "Cutting Pliers Set",
            "Hammer Set",
            "Reducers & Adapters"],
        icon:"https://cdn.shopify.com/s/files/1/0179/0453/3558/files/icon5_af7ecc5a-108c-4d65-96eb-a9976cd0e347_50x50.png",
        image:"https://cdn.shopify.com/s/files/1/0179/0453/3558/files/img5_400x.png"
    },{
        id:6,
        name:"GRIND TOOLS",
        items:["Carpentry tools set",
            "Drilling Machine",
            "Hacksaw Blades Kit",
            "Monkey Spanners",
            "Paint Brush"],
        icon:"https://cdn.shopify.com/s/files/1/0179/0453/3558/files/icon6_0c8a766e-c868-4eb1-8c84-190b9292519f_50x50.png",
        image:"https://cdn.shopify.com/s/files/1/0179/0453/3558/files/img6_400x.png"
    }]
    return(
        <div>
            <h4 id="textTitle" className="text-center " ><b>SHOP BY CATEGORIES</b></h4>
            <h2 className="text-center "><img src={"https://cdn.shopify.com/s/files/1/0179/0453/3558/t/4/assets/uline.png"} alt="separtor"/></h2>
            <div className="container mt-2 ">
                <div className="row">
                    {array2.map((product)=>(
                        <div key={product.id} className="grid1 col-11 col-sm-5 col-lg-4 text-center  mb-5 ">
                            <div className={visible}>
                                <img className="rounded-circle mx-3 border border-3 border-white bg-warning p-1 position-absolute"
                                     src={product.icon} alt="icono"/>

                                <h4 className="d-inline-block bg-dark text-white p-2 rounded-2 my-2 mx-5" style={{width: "70%"}}>{product.name}</h4>
                                <div className="row mx-5 mx-lg-0">
                                    <div className="col-12 col-lg-6 text-center">
                                        {product.items.map((item,i)=>(
                                            <a key={i} className="table-hover"><h6>{item}</h6></a>
                                        ))}
                                    </div>
                                    <div className="col-11 col-lg-6">
                                        <a><img style={{width:"100%"}} src={product.image} alt="taladro"/></a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    ))

                    }

                </div>
            </div>
            <style jsx global >
                {`
                  .hidden {
                   display: none;
                  }

                  .visible{
                    animation-name: visible;
                    animation-duration: 1s;
                    animation-timing-function: linear;
                    animation-fill-mode: forwards;
                  }
                  
                 @keyframes visible {
                  0% {
                    opacity: 0.5;
                  }
                  50% {
                    opacity: 0.7;
                  }
                  100% {
                    opacity: 1;
                    transform: translateX(10px);
                  }}
                  @media (max-width: 768px) {
                      .grid1, grid2,grid3 {
                        width: 100%;
                        flex-direction: column;
                      }}
              
                    
                `}
            </style>
        </div>
    )
}
