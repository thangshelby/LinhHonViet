import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }: { product: any }) => {
  const navigate = useNavigate();

  function removeVietnameseAccents(str: string) {
    return str
      .normalize("NFD") // Chuẩn hóa chuỗi về dạng Normalization Form D
      .replace(/[\u0300-\u036f]/g, "") // Loại bỏ các dấu thanh
      .replace(/đ/g, "d") // Thay thế ký tự đặc biệt
      .replace(/Đ/g, "D")
      .toLowerCase();
  }
  const handleChangePath = (name: string) => {
    const params = removeVietnameseAccents(name).replace(/ /g, "-");

    navigate(`/product/${params}`);
    window.scrollTo(0, 0);
  };
  return (
    <div
      className={`parent hover:boder-gray-100 flex flex-col space-y-3 pb-6 duration-700 hover:cursor-pointer hover:border-[1px] hover:shadow-2xl`}
    >
      <div
        onClick={() => {
          handleChangePath(product.name);
        }}
        className={`group relative flex w-full flex-col items-center justify-center overflow-hidden hover:cursor-pointer`}
      >
        <img
          src={product.image}
          alt="Default Image"
          loading="lazy"
          className="h-full w-full object-cover opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:opacity-0"
        />

        <img
          src={product.imageDetail ? product.imageDetail[0] : product.image}
          alt="Hover Image"
          loading="lazy"
          className="absolute left-0 top-0 h-full w-full object-cover opacity-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p
          onClick={() => {
            handleChangePath(product.name);
          }}
          className="font-raleway text-lg text-[#333] hover:cursor-pointer hover:font-medium hover:text-primary_1"
        >
          {product.name && product.name?.length >= 20
            ? product.name.slice(0, 20) + " ..."
            : product.name}
        </p>

        <p className="text-[15p x] mb-2 font-raleway font-semibold text-[#111111]">
          <bdi>
            <span className="font-bold">{product.priceSale} VND</span>
          </bdi>
        </p>
        <div
          onClick={() => {
            handleChangePath(product.name);
          }}
          className="hover:bg- rounded-sm bg-[#e9e6ed] px-4 py-1 font-thin text-[#282523] hover:bg-[#dbd9de]"
        >
          Xem chi tiết
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
