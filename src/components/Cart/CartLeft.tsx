import { FaMinus, FaPlus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { useCartStore } from '../../store/store';
import { products } from '../../constants';

const CartLeft = () => {
  const columns = ["Sản phẩm", "Giá", "Số lượng", "Tổng cộng"];
  const { productsInCart } = useCartStore();

  return (
       <table>
           <thead>
             <tr>
               {columns.map((column, index) => (
                 <th
                   key={index}
                   className={`rounded-2xl border-b-[4px] border-gray-200 pb-2 ${index != columns.length - 1 ? "text-left" : "text-right"} font-base_regular font-semibold text-[#333]`}
                 >
                   {column}
                 </th>
               ))}
             </tr>
           </thead>
           <tbody>
             {productsInCart.map((product) => (
               <tr>
                 <td className="flex flex-row items-center space-x-2 border-b-[1px] border-gray-300 py-10">
                   <FaRegTrashAlt />
 
                   <img
                     src={products[0].image}
                     className="h-24 w-24 rounded-sm object-center"
                   />
 
                   <p className="font-base_regular text-xs">
                     {products[0].name} - {product.size}
                   </p>
                 </td>
                 <td className="text-md border-b-[1px] border-gray-300 text-left font-raleway font-bold">
                   {products[0].priceSale} VND
                 </td>
                 <td className="border-b-[1px] border-gray-300">
                   <div className="flex flex-row">
                     <div
                       //  onClick={() => {
                       //    if (quantity > 0) setQuantity(quantity - 1);
                       //  }}
                       className="flex items-center justify-center border-[1px] border-gray-300 bg-[#f9f9f9] p-1 px-3 hover:cursor-pointer hover:bg-gray-400"
                     >
                       <FaMinus size={6} color="black" />
                     </div>
                     <div className="flex items-center justify-center border-[1px] border-gray-300 bg-white p-1 px-3 shadow-xl">
                       {/* {quantity} */} 0
                     </div>
                     <div
                       //  onClick={() => {
                       //    setQuantity(quantity + 1);
                       //  }}
                       className="flex items-center justify-center border-[1px] border-gray-300 bg-[#f9f9f9] p-1 px-3 hover:cursor-pointer hover:bg-gray-400"
                     >
                       <FaPlus size={6} color="black" />
                     </div>
                   </div>
                 </td>
                 <td className="text-md border-b-[1px] border-gray-300 text-right font-raleway font-bold">
                   {products[0].priceSale} VND
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
  )
}

export default CartLeft