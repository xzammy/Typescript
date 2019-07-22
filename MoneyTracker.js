var owedMoney = {};
owedMoney["Hobo"] = 10;
owedMoney["Lauren"] = 15;

owedMoney["Jimmy"];
//undefined
//Hobo borrows more money

owedMoney["Hobo"] += 20;
owedMoney["Hobo"];
//30

var myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
};

myCrazyObject["some array"][2].number;
//123