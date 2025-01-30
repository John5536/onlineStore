const dummyData = [
    {"title": "orange",
     "category":  "fruit",
     "price": 15.99,
     "image": "/images/oranges.png",
     "_id": "45",
    },
    {"title": "strawberry",
     "category":  "fruit",
     "price": 4.90,
     "image": "/images/strawberry.png",
     "_id": "49",
    },
    {"title": "melon",
     "category":  "fruit",
     "price": 10.67,
     "image": "/images/melon.png",
     "_id": "40",
    }
];

const dummyCategories = ["fruit", "vegetables","beverages", "meat"]
class DataService{
    getProducts(){
        return dummyData;
    }

    saveProduct(){

    }

}

export default new DataService();