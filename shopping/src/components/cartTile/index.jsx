import { Fragment } from "react";


function CartTile({singleCartItem}){
    
    return (
        <Fragment>
         <div className="grid grid-cols-3 items-start gap-5">
        <div className="col-span-2 flex- items-start gap-4">
            <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm">
                <img 
                src={singleCartItem?.thumbnail}
                className="w-full h-full object-contain"
                />
            </div>
            <div>
                <h3 text-base font-bold text-gray-900>{singleCartItem?.title} </h3>
                <button className="text-sm px-4 py-3 bg-black text-white font-extrabold">
                    Remove
                    </button>
            </div>
        </div>
        <div className="ml-auto">
            <h3 className="text-lg font-bold text-white-900">
                ${singleCartItem.totalPrice.toFixed(2)}
            </h3>
            <div className="mt-3">
                <button className="border border-[#000]">-</button>
                <button className="border border-[#000]">+</button>
            </div>
        </div>
    </div>
    <hr className="border-gray-500"/>
    </Fragment>
    );
}

export default CartTile;