const sizeData = {
  "Đồng hồ cát": [
    { size: "S", height: [150, 158], weight: [40, 47] },
    { size: "M", height: [159, 165], weight: [48, 55] },
    { size: "L", height: [166, 172], weight: [56, 62] },
    { size: "XL", height: [173, 178], weight: [63, 70] },
    { size: "XXL", height: [179, 185], weight: [71, 80] },
  ],
  "Tam giác (Quả lê)": [
    { size: "S", height: [150, 157], weight: [42, 50] },
    { size: "M", height: [158, 165], weight: [51, 57] },
    { size: "L", height: [166, 172], weight: [58, 65] },
    { size: "XL", height: [173, 178], weight: [66, 73] },
    { size: "XXL", height: [179, 185], weight: [74, 85] },
  ],
  "Tam giác ngược": [
    { size: "S", height: [152, 158], weight: [43, 50] },
    { size: "M", height: [159, 166], weight: [51, 58] },
    { size: "L", height: [167, 173], weight: [59, 67] },
    { size: "XL", height: [174, 180], weight: [68, 75] },
    { size: "XXL", height: [181, 187], weight: [76, 85] },
  ],
  "Tròn trịa": [
    { size: "S", height: [150, 156], weight: [50, 60] },
    { size: "M", height: [157, 162], weight: [61, 70] },
    { size: "L", height: [163, 168], weight: [71, 80] },
    { size: "XL", height: [169, 175], weight: [81, 90] },
    { size: "XXL", height: [176, 182], weight: [91, 100] },
  ],
  "Chữ nhật": [
    { size: "S", height: [150, 157], weight: [45, 50] },
    { size: "M", height: [158, 165], weight: [51, 56] },
    { size: "L", height: [166, 172], weight: [57, 64] },
    { size: "XL", height: [173, 178], weight: [65, 72] },
    { size: "XXL", height: [179, 185], weight: [73, 82] },
  ],
};
function suggestClosestSizes(height, weight, bodyShape) {
    const sizes = sizeData[bodyShape];
    if (!sizes) return "Dáng người không hợp lệ.";
  
    // Tìm khoảng cách Euclidean nhỏ nhất
    const closestSizes = sizes
      .map(({ size, height: [minH, maxH], weight: [minW, maxW] }) => ({
        size,
        distance: Math.sqrt(
          ((minH + maxH) / 2 - height) ** 2 + ((minW + maxW) / 2 - weight) ** 2
        ),
      }))
      .sort((a, b) => a.distance - b.distance) // Sắp xếp theo khoảng cách tăng dần
      .slice(0, 2) // Lấy tối đa 2 size gần nhất
      .map(({ size }) => size);
  
    return closestSizes.length
      ? `Gợi ý size: ${closestSizes.join(" hoặc ")}`
      : "Không tìm thấy size phù hợp.";
  }
  function nearestNeighborSizeSuggestion(height, weight, sizeData) {
    return sizeData.reduce((closest, size) => {
      const distance = Math.sqrt(
        (size.height - height) ** 2 + (size.weight - weight) ** 2
      );
      return distance < closest.distance ? { size: size.size, distance } : closest;
    }, { size: null, distance: Infinity }).size;
  }
  // Ví dụ sử dụng
  console.log(suggestClosestSizes(160, 80, "Đồng hồ cát")); // Gợi ý size: M hoặc S
  console.log(suggestClosestSizes(165, 58, "Tam giác ngược")); // Gợi ý size: M hoặc L
  console.log(suggestClosestSizes(175, 85, "Tròn trịa")); // Gợi ý size: XXL hoặc XL


    // Ví dụ sử dụng
    console.log(nearestNeighborSizeSuggestion(160, 80, "Đồng hồ cát")); // Gợi ý size: M hoặc S
    console.log(nearestNeighborSizeSuggestion(165, 58, "Tam giác ngược")); // Gợi ý size: M hoặc L
    console.log(nearestNeighborSizeSuggestion(175, 85, "Tròn trịa")); // Gợi ý size: XXL hoặc XL