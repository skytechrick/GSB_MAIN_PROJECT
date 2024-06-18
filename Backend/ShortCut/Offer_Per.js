const Offer_Per = (mrp, sellingPrice) => {
    if (mrp <= 0 || sellingPrice < 0) return '-0%';
    
    const discount = mrp - sellingPrice;
    const offerPercentage = (discount / mrp) * 100;

    
    return "-" + Math.round(offerPercentage) + '%';
};

module.exports = Offer_Per;