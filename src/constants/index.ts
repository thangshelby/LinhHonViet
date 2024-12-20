export const paymentMethods = [
  {
    title: "COD",
    description: "Thanh toán khi nhận hàng",
    icon: "https://www.coolmate.me/images/COD.svg",
  },
  {
    title: "AFTEE - Mua sắm thuận tiện, trả sau linh hoạt",
    description: "Trả sau miễn phí trong 10 giây chỉ với số điện thoại",
    icon: "https://shop-document.aftee.vn/images/AFTEElogo_40x40.svg",
  },
  {
    title: "Thanh Toán MoMo",
    description: "",
    icon: "https://www.coolmate.me/images/momo-icon.png",
  },

  {
    title: "Ví điện tử ZaloPay",
    description: "Thẻ ATM/Thẻ tín dụng/Thanh toán qua ví ZaloPay",
    icon: "https://www.coolmate.me/images/logo-zalopay.svg",
  },
  {
    title: "Quét QR & Thanh toán bằng ứng dụng ngân hàng",
    description: "Mờ ứng dụng ngân hàng để thanh toán",
    icon: "https://gateway.zalopay.vn/image/emvco/icon-vietqr.svg",
  },
  {
    title: "Chuyển khoản liên ngân hàng bằng QR Code",
    description: "Chuyển tiền qua ví điện tử (MoMo, Zalopay,...)",
    icon: "https://mcdn.coolmate.me/image/April2023/mceclip1_21.png",
  },
];

export const navbarLinks = [
  {
    title: "SẢN PHẨM MỚI",
  },
  {
    title: "SẢN PHẨM",
    children: [
      { title: "TẤT CẢ SẢN PHẨM" },
      { title: "SẢN PHẨM MỚI" },
      { title: "SẢN PHẨM HOT" },
      { title: "ÁO DÀI" },
      { title: "QUẦN" },
      { title: "PHỤ KIỆN" },
    ],
  },
  {
    title: "BÁN CHẠY NHẤT",
  },

  {
    title: "BỘ SƯU TẬP",
    children: [
      { title: "ÁO DÀI THU ĐÔNG" },
      { title: "ÁO DÀI XUÂN HÈ" },
      { title: "ÁO DÀI CÔ DÂU" },
      { title: "ÁO DÀI CHÚ RỂ" },
      { title: "ÁO DÀI TRẺ EM" },
      { title: "ÁO DÀI NỮ SINH" },
      { title: "ÁO DÀI NAM SINH" },
      { title: "ÁO DÀI TRUYỀN THỐNG" },
      { title: "ÁO DÀI CÁCH TÂN" },
      { title: "ÁO DÀI DÀI" },
      { title: "ÁO DÀI NGẮN" },
    ],
  },
  {
    title: "VỀ LINH HỒN VIỆT",

    children: [
      { title: "QUY TRÌNH CỦA CHÚNG TÔI" },
      { title: "CHÍNH SÁCH CHO THUÊ" },
      { title: "HỆ THỐNG KHÁCH HÀNG" }
    ],
  },
];

export const products = [
  {
    id: 1,
    name: "ÁO DÀI HỒNG UYỂN",
    path: "aodainusinh0",
    priceRent: "80.000",
    priceSale: "4.250.000",
    specialDetail: [
      "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
      "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
      "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
      "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
      "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
      "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
    ],
    category: "NHÓM TRANG PHỤC CÁCH TÂN",
    image:
      "	https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9549-copy.jpg",
    imageDetail: [
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9538-copy.jpg",
    ],
  },
  {
    id: 2,
    name: "ÁO DÀI TỰ HÀ",
    path: "aonguthan0",
    priceRent: "150.000",
    priceSale: "2.750.000",
    specialDetail: [
      "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
      "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
      "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
      "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
      "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
      "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
    ],
    category: "NHÓM TRANG PHỤC TRUYỀN THỐNG",
    image:
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9475-2-copy.jpg",
    imageDetail: [
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9431-copy.jpg",
    ],
  },
  {
    id: 3,
    name: "ÁO DÀI HỒ UYỂN",
    path: "aonguthanvaitruot0",
    priceRent: "120.000",
    priceSale: "1.050.000",
    specialDetail: [
      "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
      "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
      "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
      "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
      "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
      "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
    ],
    category: "NHÓM TRANG PHỤC TRUYỀN THỐNG",
    image:
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9501-2-copy.jpg",
    imageDetail: [
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9495-2-copy-2.jpg",
    ],
  },
  {
    id: 4,
    name: "ÁO DÀI HỒNG UYỂN",
    path: "aodainusinh0",
    priceRent: "80.000",
    priceSale: "4.250.000",
    specialDetail: [
      "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
      "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
      "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
      "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
      "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
      "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
    ],
    category: "NHÓM TRANG PHỤC CÁCH TÂN",
    image:
      "	https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9549-copy.jpg",
    imageDetail: [
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9538-copy.jpg",
    ],
  },
  {
    id: 5,
    name: "ÁO DÀI TỰ HÀ",
    path: "aonguthan0",
    priceRent: "150.000",
    priceSale: "2.750.000",
    specialDetail: [
      "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
      "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
      "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
      "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
      "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
      "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
    ],
    category: "NHÓM TRANG PHỤC TRUYỀN THỐNG",
    image:
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9475-2-copy.jpg",
    imageDetail: [
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9431-copy.jpg",
    ],
  },
  {
    id: 6,
    name: "ÁO DÀI HỒ UYỂN",
    path: "aonguthanvaitruot0",
    priceRent: "120.000",
    priceSale: "1.050.000",
    specialDetail: [
      "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
      "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
      "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
      "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
      "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
      "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
    ],
    category: "NHÓM TRANG PHỤC TRUYỀN THỐNG",
    image:
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9501-2-copy.jpg",
    imageDetail: [
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9495-2-copy-2.jpg",
    ],
  },
  {
    id: 1,
    name: "ÁO DÀI HỒNG UYỂN",
    path: "aodainusinh0",
    priceRent: "80.000",
    priceSale: "4.250.000",
    specialDetail: [
      "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
      "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
      "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
      "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
      "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
      "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
    ],
    category: "NHÓM TRANG PHỤC CÁCH TÂN",
    image:
      "	https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9549-copy.jpg",
    imageDetail: [
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9538-copy.jpg",
    ],
  },
  {
    id: 2,
    name: "ÁO DÀI TỰ HÀ",
    path: "aonguthan0",
    priceRent: "150.000",
    priceSale: "2.750.000",
    specialDetail: [
      "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
      "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
      "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
      "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
      "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
      "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
    ],
    category: "NHÓM TRANG PHỤC TRUYỀN THỐNG",
    image:
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9475-2-copy.jpg",
    imageDetail: [
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9431-copy.jpg",
    ],
  },
  {
    id: 3,
    name: "ÁO DÀI HỒ UYỂN",
    path: "aonguthanvaitruot0",
    priceRent: "120.000",
    priceSale: "1.050.000",
    specialDetail: [
      "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
      "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
      "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
      "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
      "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
      "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
    ],
    category: "NHÓM TRANG PHỤC TRUYỀN THỐNG",
    image:
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9501-2-copy.jpg",
    imageDetail: [
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9495-2-copy-2.jpg",
    ],
  },
  {
    id: 1,
    name: "ÁO DÀI HỒNG UYỂN",
    path: "aodainusinh0",
    priceRent: "80.000",
    priceSale: "4.250.000",
    specialDetail: [
      "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
      "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
      "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
      "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
      "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
      "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
    ],
    category: "NHÓM TRANG PHỤC CÁCH TÂN",
    image:
      "	https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9549-copy.jpg",
    imageDetail: [
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9538-copy.jpg",
    ],
  },
  {
    id: 2,
    name: "ÁO DÀI TỰ HÀ",
    path: "aonguthan0",
    priceRent: "150.000",
    priceSale: "2.750.000",
    specialDetail: [
      "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
      "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
      "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
      "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
      "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
      "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
    ],
    category: "NHÓM TRANG PHỤC TRUYỀN THỐNG",
    image:
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9475-2-copy.jpg",
    imageDetail: [
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9431-copy.jpg",
    ],
  },
  {
    id: 3,
    name: "ÁO DÀI HỒ UYỂN",
    path: "aonguthanvaitruot0",
    priceRent: "120.000",
    priceSale: "1.050.000",
    specialDetail: [
      "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
      "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
      "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
      "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
      "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
      "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
    ],
    category: "NHÓM TRANG PHỤC TRUYỀN THỐNG",
    image:
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9501-2-copy.jpg",
    imageDetail: [
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9495-2-copy-2.jpg",
    ],
  },
  {
    id: 1,
    name: "ÁO DÀI HỒNG UYỂN",
    path: "aodainusinh0",
    priceRent: "80.000",
    priceSale: "4.250.000",
    specialDetail: [
      "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
      "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
      "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
      "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
      "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
      "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
    ],
    category: "NHÓM TRANG PHỤC CÁCH TÂN",
    image:
      "	https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9549-copy.jpg",
    imageDetail: [
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9538-copy.jpg",
    ],
  },
  {
    id: 2,
    name: "ÁO DÀI TỰ HÀ",
    path: "aonguthan0",
    priceRent: "150.000",
    priceSale: "2.750.000",
    specialDetail: [
      "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
      "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
      "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
      "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
      "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
      "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
    ],
    category: "NHÓM TRANG PHỤC TRUYỀN THỐNG",
    image:
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9475-2-copy.jpg",
    imageDetail: [
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9431-copy.jpg",
    ],
  },
  {
    id: 3,
    name: "ÁO DÀI HỒ UYỂN",
    path: "aonguthanvaitruot0",
    priceRent: "120.000",
    priceSale: "1.050.000",
    specialDetail: [
      "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
      "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
      "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
      "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
      "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
      "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
    ],
    category: "NHÓM TRANG PHỤC TRUYỀN THỐNG",
    image:
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9501-2-copy.jpg",
    imageDetail: [
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9495-2-copy-2.jpg",
    ],
  },
  {
    id: 1,
    name: "ÁO DÀI HỒNG UYỂN",
    path: "aodainusinh0",
    priceRent: "80.000",
    priceSale: "4.250.000",
    specialDetail: [
      "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
      "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
      "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
      "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
      "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
      "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
    ],
    category: "NHÓM TRANG PHỤC CÁCH TÂN",
    image:
      "	https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9549-copy.jpg",
    imageDetail: [
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9538-copy.jpg",
    ],
  },
  {
    id: 2,
    name: "ÁO DÀI TỰ HÀ",
    path: "aonguthan0",
    priceRent: "150.000",
    priceSale: "2.750.000",
    specialDetail: [
      "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
      "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
      "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
      "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
      "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
      "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
    ],
    category: "NHÓM TRANG PHỤC TRUYỀN THỐNG",
    image:
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9475-2-copy.jpg",
    imageDetail: [
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9431-copy.jpg",
    ],
  },
  {
    id: 3,
    name: "ÁO DÀI HỒ UYỂN",
    path: "aonguthanvaitruot0",
    priceRent: "120.000",
    priceSale: "1.050.000",
    specialDetail: [
      "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
      "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
      "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
      "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
      "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
      "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
    ],
    category: "NHÓM TRANG PHỤC TRUYỀN THỐNG",
    image:
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9501-2-copy.jpg",
    imageDetail: [
      "https://xeoxo.com/vn/wp-content/uploads/sites/2/2024/11/DSCF9495-2-copy-2.jpg",
    ],
  },
  // {
  //   name: "YẾM PHƯỢNG",
  //   path: "yemphuong0",
  //   priceRent: "50.000",
  //   priceSale: "375.000",
  //   specialDetail: [
  //     "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
  //     "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
  //     "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
  //     "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
  //     "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
  //     "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
  //   ],
  //   category: "NHÓM TRANG PHỤC TRUYỀN THỐNG",
  //   image:
  //     "https://product.hstatic.net/1000403671/product/z6003240187769_1ceba6c9810bf22f5f2383f395697b17_38d08e497b3644549b7a79a8a8657cd1_grande.jpg",
  //   imageDetail: [
  //     "https://product.hstatic.net/1000403671/product/z6003239507767_125b922cc1e558b3df7883d6e68f0847_86208a721cc34bf796e037f35b6feecc_compact.jpg",
  //   ],
  // },
  // {
  //   name: "Áo ngũ thân cách tân viền lục giác (Unisex)",
  //   path: "aonguthancachtan0",
  //   priceRent: "100.000",
  //   priceSale: "800.000",
  //   specialDetail: [
  //     "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
  //     "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
  //     "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
  //     "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
  //     "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
  //     "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
  //   ],
  //   category: "NHÓM TRANG PHỤC CÁCH TÂN",
  // },
  // {
  //   name: "ÁO GIAO LĨNH QUẤN THƯỜNG (3 MÓN)",
  //   path: "aogiaolinhquanthuong0",
  //   priceRent: "100.000",
  //   priceSale: "2.500.000",
  //   specialDetail: [
  //     "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
  //     "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
  //     "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
  //     "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
  //     "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
  //     "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
  //   ],
  //   category: "NHÓM TRANG PHỤC TRUYỀN THỐNG",
  // },
  // {
  //   name: "ÁO NGŨ THÂN NGHÊ (UNISEX)",
  //   path: "aonguthannghe0",
  //   priceRent: "60.000",
  //   priceSale: "450.000",
  //   specialDetail: [
  //     "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
  //     "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
  //     "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
  //     "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
  //     "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
  //     "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
  //   ],
  //   category: "NHÓM TRANG PHỤC CÁCH TÂN",
  // },
  // {
  //   name: "ÁO NGŨ THÂN TEX NHUNG HOA NHÍ",
  //   path: "aonguthantex0",
  //   priceRent: "120.000",
  //   priceSale: "920.000",
  //   specialDetail: [
  //     "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
  //     "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
  //     "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
  //     "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
  //     "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
  //     "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
  //   ],
  //   category: "NHÓM TRANG PHỤC CÁCH TÂN",
  // },
  // {
  //   name: "ÁO NHẬT BÌNH CÁCH TÂN SAPPHIRE & EMERALD (LAM NGỌC & LỤC NGỌC)",
  //   path: "aonhatbinh0",
  //   priceRent: "60.000",
  //   priceSale: "450.000",
  //   specialDetail: [
  //     "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
  //     "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
  //     "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
  //     "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
  //     "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
  //     "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
  //   ],
  //   category: "NHÓM TRANG PHỤC CÁCH TÂN",
  // },
  // {
  //   name: "CAPE HẠC",
  //   path: "capehac0",
  //   priceRent: "100.000",
  //   priceSale: "790.000",
  //   specialDetail: [
  //     "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
  //     "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
  //     "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
  //     "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
  //     "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
  //     "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
  //   ],
  //   category: "NHÓM TRANG PHỤC CÁCH TÂN",
  // },
  // {
  //   name: "CAPE HẠC VER 2 2024",
  //   path: "capehacver20",
  //   priceRent: "70.000",
  //   priceSale: "590.000",
  //   specialDetail: [
  //     "Áo Dài Ngũ Thân Tay Chẽn vải lụa vân nữ may bằng vải lụa vân, may 1 lớp, hướng tới đối tượng Học Sinh.",
  //     "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
  //     "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
  //     "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
  //     "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
  //     "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
  //   ],
  //   category: "NHÓM TRANG PHỤC CÁCH TÂN",
  // },
  // {
  //   name: "ÁO NGŨ THÂN TAY CHẼN VẢI SA HOẶC TƠ CHO NAM",
  //   path: "aonguthantaychenchonam0",
  //   priceRent: "105.000",
  //   priceSale: "1.350.000",
  //   specialDetail: [
  //     "Áo Ngũ Thân Tay Chẽn vải sa hàn hoặc vải tơ sống, tơ vân, tơ thủy ngư, tơ hoa cúc, tơ xước kim",
  //     "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
  //     "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
  //     "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
  //     "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
  //     "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
  //   ],
  //   category: "NHÓM TRANG PHỤC TRUYỀN THỐNG",
  // },
  // {
  //   name: "ÁO NGŨ THÂN TAY CHẼN VER TẾT 2024",
  //   path: "aonguthantaychenvertet0",
  //   priceRent: "120.000",
  //   priceSale: "1.050.000",
  //   specialDetail: [
  //     "Áo Ngũ Thân Tay Chẽn vải sa hàn hoặc vải tơ sống, tơ vân, tơ thủy ngư, tơ hoa cúc, tơ xước kim",
  //     "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
  //     "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
  //     "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
  //     "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
  //     "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
  //   ],
  //   category: "NHÓM TRANG PHỤC TRUYỀN THỐNG",
  // },
  // {
  //   name: "NHẬT BÌNH TRUYỀN THỐNG CHO BÉ GÁI",
  //   path: "nhatbinhchobegai0",
  //   priceRent: "120.000",
  //   priceSale: "1.800.000",
  //   specialDetail: [
  //     "Áo Ngũ Thân Tay Chẽn vải sa hàn hoặc vải tơ sống, tơ vân, tơ thủy ngư, tơ hoa cúc, tơ xước kim",
  //     "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
  //     "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
  //     "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
  //     "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
  //     "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
  //   ],
  //   category: "NHÓM TRANG PHỤC TRUYỀN THỐNG",
  // },
  // {
  //   name: "GUỐC MỘC",
  //   path: "guocmoc0",
  //   priceRent: "30.000",
  //   priceSale: "100.000",
  //   specialDetail: [
  //     // "Áo Ngũ Thân Tay Chẽn vải sa hàn hoặc vải tơ sống, tơ vân, tơ thủy ngư, tơ hoa cúc, tơ xước kim",
  //     "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
  //     "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
  //     "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
  //     "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
  //     "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
  //   ],
  //   category: "PHỤ KIỆN ĐI KÈM",
  // },
  // {
  //   name: "VÒNG NGỌC BỘI",
  //   path: "vongngoc0",
  //   priceRent: "35.000",
  //   priceSale: "140.000",
  //   specialDetail: [
  //     // "Áo Ngũ Thân Tay Chẽn vải sa hàn hoặc vải tơ sống, tơ vân, tơ thủy ngư, tơ hoa cúc, tơ xước kim",
  //     "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
  //     "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
  //     "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
  //     "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
  //     "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
  //   ],
  //   category: "PHỤ KIỆN ĐI KÈM",
  // },
  // {
  //   name: "NÓN LÁ",
  //   path: "nonla0",
  //   priceRent: "20.000",
  //   priceSale: "100.000",
  //   specialDetail: [
  //     // "Áo Ngũ Thân Tay Chẽn vải sa hàn hoặc vải tơ sống, tơ vân, tơ thủy ngư, tơ hoa cúc, tơ xước kim",
  //     "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
  //     "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
  //     "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
  //     "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
  //     "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
  //   ],
  //   category: "PHỤ KIỆN ĐI KÈM",
  // },
  // {
  //   name: "QUẠT CỔ TRANG",
  //   path: "quatcotrang0",
  //   priceRent: "20.000",
  //   priceSale: "80.000",
  //   specialDetail: [
  //     // "Áo Ngũ Thân Tay Chẽn vải sa hàn hoặc vải tơ sống, tơ vân, tơ thủy ngư, tơ hoa cúc, tơ xước kim",
  //     "Có 2 loại vân để lựa chọn: vân hoa hoặc vân gỗ.",
  //     "Phù hợp với học sinh, sinh viên khi mặc hàng ngày và vận động nhiều.",
  //     "Sản phẩm này, shop khuyến khích mặc với quần trắng của áo dài có sẵn cho tiết kiệm.",
  //     "Có khả năng cách nhiệt tốt, giữ ấm vào mùa đông và mát mẻ vào mùa hè.",
  //     "Có khả năng hút ẩm tốt, giúp người mặc luôn cảm thấy thoải mái, khô ráo.",
  //   ],
  //   category: "PHỤ KIỆN ĐI KÈM",
  // },
];

export const outstandingFeatures = [
  {
    title: "Nhanh khô",
    icon: "https://mcdn.coolmate.me/image/January2024/mceclip10_19.png",
  },
  {
    title: "Thấm hút",
    icon: "https://mcdn.coolmate.me/image/January2024/mceclip15_84.png",
  },
  {
    title: "Nhẹ nhàng",
    icon: "https://mcdn.coolmate.me/image/January2024/mceclip6_26.png",
  },
  {
    title: "Thoải mái",
    icon: "https://mcdn.coolmate.me/image/January2024/mceclip18_54.png",
  },
];
export const sizes: {
  size: string;
  description: string;
  "Chiều cao": string;
  "Cân nặng": string;
  Cổ: string;
  Vai: string;
  Ngực: string;
  Eo: string;
  Mông: string;
  "Dài tay": string;
  "Dài áo": string;
  "Dài quần": string;
}[] = [
  {
    size: "XS",
    description: "(1m45 - 1m55 | 40kg-50kg)",
    "Chiều cao": "1m45 - 1m55",
    "Cân nặng": "40kg-50kg",
    Cổ: "30",
    Vai: "34",
    Ngực: "80",
    Eo: "60",
    Mông: "84",
    "Dài tay": "49",
    "Dài áo": "116",
    "Dài quần": "96",
  },
  {
    size: "S",
    description: "(1m55 - 1m60 | 50kg-60kg)",
    "Chiều cao": "1m55 - 1m60",
    "Cân nặng": "50kg-60kg",
    Cổ: "32",
    Vai: "36",
    Ngực: "84",
    Eo: "64",
    Mông: "88",
    "Dài tay": "49",
    "Dài áo": "120",
    "Dài quần": "100",
  },
  {
    size: "M",
    description: "(1m60 - 1m65 | 60kg-70kg)",
    "Chiều cao": "1m60 - 1m65",
    "Cân nặng": "60kg-70kg",
    Cổ: "34",
    Vai: "38",
    Ngực: "88",
    Eo: "68",
    Mông: "92",
    "Dài tay": "50",
    "Dài áo": "125",
    "Dài quần": "104",
  },
  {
    size: "L",
    description: "(1m65 - 1m70 | 70kg-80kg)",
    "Chiều cao": "1m65 - 1m70",
    "Cân nặng": "70kg-80kg",
    Cổ: "36",
    Vai: "40",
    Ngực: "92",
    Eo: "72",
    Mông: "96",
    "Dài tay": "51",
    "Dài áo": "130",
    "Dài quần": "108",
  },
  {
    size: "XL",
    description: "(1m70 - 1m75 | 80kg-90kg)",
    "Chiều cao": "1m70 - 1m75",
    "Cân nặng": "80kg-90kg",
    Cổ: "38",
    Vai: "42",
    Ngực: "96",
    Eo: "76",
    Mông: "100",
    "Dài tay": "52",
    "Dài áo": "130",
    "Dài quần": "108",
  },
];

export const afterBuys = [
  {
    icon: "https://www.coolmate.me/images/product-detail/return.svg",
    title: "Đổi trả cực dễ chỉ cần số điện thoại",
  },
  {
    icon: "https://www.coolmate.me/images/product-detail/return-60.svg",
    title: "60 ngày đổi trả vì bất kỳ lý do gì",
  },
  {
    icon: "https://www.coolmate.me/images/product-detail/phone.svg",
    title: "Hotline 1900.27.27.37 hỗtrợ từ 8h30 - 22h mỗi ngày",
  },
  {
    icon: "https://www.coolmate.me/images/product-detail/location.svg",
    title: "Đến tận nơi nhận hàng trả, hoàn tiền trong 24h",
  },
];

export const footerItems = [
  {
    title: "Dịch vụ khách hàng",
    children: [
      {
        title: "Liên hệ",
        children: ["Linh Hồn Việt Sài Gòn", "Linh Hồn Việt Hà Nội"],
      },
      {
        title: "Chính sách",
        children: [
          "Chính sách đổi trả",
          "Chính sách bảo mật",
          "Chính sách vận chuyển",
          "Chính sách khách hàng",
        ],
      },
      {
        title: "Mạng xã hội",
        children: ["Hướng dẫn chọn size", "Hướng dẫn mua hàng"],
      },
    ],
  },
  {
    "CHĂM SÓC KHÁCH HÀNG": [
      "Trải nghiệm mua sắm 100% hài lòng",
      "Hỏi đáp - FAQs",
    ],
  },
  {
    "KIẾN THỨC MẶC ĐẸP": [
      "Hướng dẫn chọn size",
      "Blog",
      "Group mặc đẹp sống chất",
    ],
  },
  {
    "TÀI LIỆU - TUYỂN DỤNG": ["Tuyển dụng", "Đăng ký bản quyền"],
  },
  {
    "VỀ CHÚNG TÔI": [
      "Sắc lụa việt",
      "DVKH xuất sắc",
      "Câu chuyện về chúng tôi",
      "Nhà máy",
      "Care & Share",
    ],
  },
  {
    "ĐỊA CHỈ LIÊN HỆ": [
      "Vietnam National University HCM, University of Economics and Law (Đại Học Kinh Tế - Luật, Đại Học Quốc Gia TP.HCM UEL)  669 QL1A, khu phố 3, Thủ Đức, Thành phố Hồ Chí Minh",
    ],
  },
];

export const signUpFormField: {
  name: string;
  label: string;
  type: string;
  options?: string[];
}[] = [
  {
    name: "firstname",
    label: "First Name",
    type: "text",
  },
  {
    name: "lastname",
    label: "Last Name",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "phone",
    label: "Phone",
    type: "text",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    type: "password",
  },
  {
    name: "gender",
    label: "Gender",
    type: "radio",
    options: ["Male", "Female", "Prefer not to say"],
  },
  {
    name: "birth",
    label: "Birth",
    type: "date",
  },
];

export const inputDeliveryField: {
  name:
    | "name"
    | "phone"
    | "email"
    | "addressDetail"
    | "city"
    | "district"
    | "ward"
    | "note";
  label: string;
  placeholder: string;
  tag: string;
  type: string;
  width: string;
}[] = [
  {
    name: "name",
    label: "Họ và tên",
    placeholder: "Nhập họ và tên",
    tag: "input",
    type: "text",
    width: "48%",
  },
  {
    name: "phone",
    label: "Số điện thoại",
    placeholder: "Nhập số điện thoại",
    tag: "input",
    type: "text",
    width: "48%",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Nhập email",
    tag: "input",
    type: "email",
    width: "100%",
  },
  {
    name: "addressDetail",
    label: "Địa chỉ",
    placeholder:
      "Địa chỉ(ví dụ: Số 669 Quốc lộ 1, Khu phố 6, Phường Linh Xuân)",
    tag: "input",
    type: "text",
    width: "100%",
  },
  {
    name: "city",
    label: "Tỉnh/Thành phố",
    placeholder: "Chọn tỉnh/thành phố",
    tag: "select",
    type: "text",
    width: "30%",
  },
  {
    name: "district",
    label: "Quận/Huyện",
    placeholder: "Chọn quận/huyện",
    tag: "select",
    type: "text",
    width: "30%",
  },
  {
    name: "ward",
    label: "Phường/Xã",
    placeholder: "Chọn phường/xã",
    tag: "select",
    type: "text",
    width: "30%",
  },
  {
    name: "note",
    label: "Ghi chú",
    placeholder: "Ghi chú thêm(ví dụ: Giao hàng vào buổi sáng)",
    tag: "input",
    type: "text",
    width: "100%",
  },
];

export const bodyTypes = [
  {
    type: "Dáng đồng hồ cát",
    image:
      "https://file.hstatic.net/200000422145/file/dhc-2_60ae76a77e674d6dbdba7f4441e78b33_grande.png",
  },
  {
    type: "Dáng tam giác",
    image:
      "https://file.hstatic.net/200000422145/file/tg-2_ca98c19031814708b78ac35dd908dd95_grande.png",
  },
  {
    type: "Dáng người tròn trịa",
    image:
      "https://file.hstatic.net/200000422145/file/tt-2_2b3fa6e1c6144ef0a4a0a575e230860e_grande.png",
  },
  {
    type: "Dáng người tam giác ngược",
    image:
      "https://file.hstatic.net/200000422145/file/tgn-2_a4502adefcc84117acfcc93b78a8ec9e_grande.png",
  },
  {
    type: "Dáng chữ nhật",
    image:
      "https://file.hstatic.net/200000422145/file/cn-3_3ac01cb0351a4dcfbe23540a57f64d09_grande.png",
  },
];
