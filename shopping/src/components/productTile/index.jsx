import { useNavigate } from "react-router-dom";


function ProductTile({singleProductTile}){

    const navigate = useNavigate();

    function handleNavigateToProductDetailsPage(getCurrentProductId){
        navigate(`/product-details/${getCurrentProductId}`); 
    }


    return <div className="relative group border border-cyan 700 p-6 cursor-pointer">
        <div className="overflow-hidden aspect-w-1 aspect-h-1">
            <img  
            src={singleProductTile?.thumbnail}
            alt={singleProductTile?.title}
            className="oject-cover w-full h-full transition-all duration-300 group-hover:scale-125"
            />

        </div>
        <div className="flex items-start justify-between mt-4 space-x-4">
            <div className="font-bold text-white-900 sm:text-sm text-xs md:text-base">
                <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">{singleProductTile?.title} </p>
            </div>
             <div className="text-right">
                <p className="text-xs font-bold text-white-900 sm:text-sm md:text-[14px]">${singleProductTile?.price}</p>
             </div>
        </div>
        <button onClick={()=> handleNavigateToProductDetailsPage(singleProductTile?.id) } className="px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg">View Details</button>
    </div>
}
export default ProductTile;