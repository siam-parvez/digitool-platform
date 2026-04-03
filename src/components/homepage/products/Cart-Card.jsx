import React from 'react';

const CartCard = ({products}) => {
    return (
        <>
            <div className="card bg-base-100 card-md shadow-sm border-neutral-200 border">
                <div className="card-body gap-4">
                    <h2 className="card-title">Your Cart</h2>
                    <div className={"space-y-4"}>
                        {
                            products.map((product) => {
                                return (
                                    <div
                                        key={product.id}
                                        className="flex gap-6 items-center w-full justify-between bg-gray-100 rounded-xl p-4">
                                        <div className="flex gap-4">
                                            <figure
                                                className='flex items-center justify-center size-12 border border-neutral-200 rounded-full p-3 bg-white'>
                                                <img src={product.icon} alt={product.name}
                                                     className="w-full h-auto"/>
                                            </figure>
                                            <div>
                                                <h2 className="font-bold text-base mb-1">{product.name}</h2>
                                                <h4 className={"text-xs"}>${product.price}</h4>
                                            </div>
                                        </div>
                                        <button className="btn btn-ghost btn-error rounded-full border-none">Remove
                                        </button>
                                    </div>
                                )
                            })
                        }
                        <div className={"flex justify-between items-center gap-6"}>
                            <h5 className={"text-neutral-500 text-xs lg:text-sm "}>Total:</h5>
                            <h4 className={"text-lg font-bold"}>${products.reduce((sum, product) => sum + product.price, 0).toFixed(2)}</h4>
                        </div>
                    </div>
                    <div className="justify-end card-actions">
                        <button
                            className="btn btn-primary rounded-full border-none bg-linear-45 from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition-opacity duration-300 btn-block">Proceed
                            to Checkout
                        </button>
                    </div>
                </div>
            </div>


        </>
    );
};

export default CartCard;