import React from 'react'

function Cards({item}) {
    
    return (
        <>
            <div>
                <div className="card bg-base-100 w-96 shadow-sm mt-4 my-3 hover:scale-105 duration-400 ease-in-out">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.Description}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline p-4">${item.price}</div>
                            <div className="badge badge-outline cursor-pointer hover:bg-pink-500 duration-200 hover:text-white p-4 ">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards