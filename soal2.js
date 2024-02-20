const searchName = (pattern, limit, callback) => {
    const names = [
        "Abigail", "Alexandra", "Alison",
        "Amanda", "Angela", "Bella",
        "Carol", "Caroline", "Carolyn",
        "Deirdre", "Diana", "Elizabeth",
        "Ella", "Faith", "Olivia", "Penelope"
    ]

    const nameList = names.filter(item => 
        item.toLowerCase()
        .includes(pattern.toLowerCase()))
        .slice(0, limit)
        
    callback(nameList)
};

const displayNames = function(nameList) {
    console.log(nameList)
}

searchName("an", 3, displayNames)