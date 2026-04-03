import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div className='card w-full bg-base-100 shadow-sm border border-neutral-200 relative'>
            <div
                className={`${product.tagType === "new" ? "badge-success" : product.tagType === "popular" ? "badge-primary" : "badge-warning"} absolute top-2 right-2 badge badge-soft uppercase`}>
                {product.tagType}
            </div>
            <div className='card-body flex flex-col gap-6 justify-between'>
                <div className='flex flex-col gap-6 justify-between'>
                    <div className='space-y-6'>
                        <figure
                            className='flex items-center justify-center size-12 border border-neutral-200 rounded-full p-3 aspect-square'>
                            <img src={product.icon} alt={product.name} className="w-full h-auto"/>
                        </figure>
                        <h2 className='text-xl font-bold'>{product.name}</h2>
                        <p className='text-neutral-500'>
                            {product.description}
                        </p>
                    </div>
                    <span className='text-xl text-neutral-500'>
                        <span className='font-bold text-3xl text-black'>${product.price}</span>
                      /{product.period}
                    </span>
                    <ul className='flex flex-col gap-2 text-xs'>
                        {
                            product.features.map(
                                (feature, index) => (
                                    <li key={index}>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='size-4 me-2 inline-block text-success'
                                            fill='none'
                                            viewBox='0 0 24 24'
                                            stroke='currentColor'>
                                            <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth='2'
                                                d='M5 13l4 4L19 7'
                                            />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
                <button
                    className='btn btn-primary btn-block rounded-full border-none bg-linear-45 from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition-opacity duration-300'>
                    Buy Now
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
