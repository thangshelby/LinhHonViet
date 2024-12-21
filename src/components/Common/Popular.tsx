

import ShowProductList from "./ShowProductList";
const   Popular = () => {

  return (
    <div className="flex flex-col px-[16px] justify-center items-center w-full">
      <div className="w-full ">
        <div className="flex flex-col items-center gap-5 w-full">

          {/* LIST PRODUCTSList */}
          <div className="w-full relative">

            <ShowProductList
              productPerPage={3}
              isShownPagination={true}
              isShowNavigation={true}
            />

          </div>
  
        </div>
      </div>
    </div>
  );
};

export default Popular;
