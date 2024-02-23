const fs = require('fs');

let shops = []
let products = []
let sales = []
let saleDetail = []
let shippingDetail = []
let shipping = []
let events = []
let eventProductDetail = []
let picking = []
for (let i = 0; i < 100; i++) {

    shops.push({
        customerCode: '011097' + i,
        id: '011097' + i,
        name: "イオンモール和歌山",
        region: "和歌山",
        local: "近畿"
    })

    sales.push({
        storeId: '011' + i,
        storeName: "イオンモール和歌山",
        regionName: "和歌山",
        localName: "近畿",
        startDate: "2023/08/10",
        endDate: "2023/08/31",
        eventPeriod: "21日",
        salesQuantity: 1200,
        totalSent: 1500,
        totalDamage: 12,
    })

    products.push({
        code: '454608802370' + i,
        productName: "RACHE(ラチェ) 130ライスボウル いちごミルク",
        departmentName: "KUKKA",
        quantityInStock: 1000 + i,
        status: i % 4 == 0 ? "廃盤" : "",
        unitPrice: 700,
        costPrice: 250,
        minimumLot: 10
    })

    saleDetail.push({
        no: i + 1,
        productCode: '4546088023747' + i,
        productName: 'RACHE(ラチェ) 130ライスボウル いちごミルク',
        departmentId: '15' + i,
        departmentName: 'KUKKA',
        unitPrice: 700 + i,
        costPrice: 250 + i,
        index: 10,
        salesQuantity: 50,
        totalSent: 60,
        totalDamage: 1,
    })

    shippingDetail.push({
        no: i + 1,
        productCode: '4546088023747' + i,
        productName: 'RACHE(ラチェ) 130ライスボウル いちごミルク',
        separation: i % 2 == 0,
        unitPrice: 700 + i,
        availableStockQuantity: 20,
        recommendStockQuantity: 10,
        numberOfAdditions: 20,
        pickingNumber: 11,
        roundMinutes: 2,
        display: 8,
        displayInput: 8,
        displayOricon: 8,
        shelfBin: 1,
        replenishment: 3,
        item: 0
    })

    shipping.push({
        pickingId: i + 1,
        eventDate: i < 4 ? "2023/10/24" : "2023/08/10",
        storeName: "イオンモール和歌山",
        number: 100,
        numberOfPices: 200,
        status: i < 4 ? "完" : "未"
    })

    events.push({
        customerCode: "0110" + i,
        customerName: "イオンモール和歌山",
        storeId: "011097" + i,
        regionName: "和歌山",
        localName: "近畿",
        startDate: "2023/8/10",
        endDate: "2023/8/31",
        place: "2階 A23",
        eventPeriod: "21日",
    })

    eventProductDetail.push({
        no: i + 1,
        productCode: '4546088023747' + i,
        productName: 'RACHE(ラチェ) 130ライスボウル いちごミルク',
        separation: i % 2 == 0,
        unitPrice: 700 + i,
        availableStockQuantity: 20,
        recommendStockQuantity: 10,
        numberOfAdditions: 20,
        pickingNumber: 11,
        roundMinutes: 2,
        displayItems: 8,
        display: 8,
        displayInput: 8,
        displayOricon: [3, 3],
        shelfBin: 1,
        replenishment: 3,
        item: 0
    })

    picking.push({
        registrationDate: '2023/10/11',
        storeId: '011' + i,
        storeName: "イオンモール和歌山",
        regionName: "和歌山",
        localName: "近畿",
        isNew: i % 5 == 0,
        status: '未'
    })

}

fs.writeFile("shops.json", JSON.stringify(shops), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("Shops saved!");
});

fs.writeFile("sales.json", JSON.stringify(sales), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("sales saved!");
});

fs.writeFile("products.json", JSON.stringify(products), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("products saved!");
});
fs.writeFile("saleDetail.json", JSON.stringify(saleDetail), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("saleDetail saved!");
});

fs.writeFile("shippingDetail.json", JSON.stringify(shippingDetail), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("shippingDetail saved!");
});

fs.writeFile("shipping.json", JSON.stringify(shipping), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("shipping saved!");
}); 

fs.writeFile("events.json", JSON.stringify(events), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("events saved!");
}); 

fs.writeFile("eventProductDetail.json", JSON.stringify(eventProductDetail), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("eventProductDetail saved!");
}); 

fs.writeFile("picking.json", JSON.stringify(picking), function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("picking saved!");
}); 
