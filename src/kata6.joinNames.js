const joinNames = namesObj => {
    const namesArray = namesObj.map(nameObj => {
        return nameObj.name;
    })
    const finalName = namesArray.pop();
    return namesArray.join(", ") + ` & ${finalName}.`;
};

module.exports = joinNames;