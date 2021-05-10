const joinNames = namesObj => {

    if (namesObj.length === 1) {
        return `${namesObj[0].name}.`
    };

    const namesArray = namesObj.map(nameObj => {
        return nameObj.name;
    })
    const finalName = namesArray.pop();
    return namesArray.join(", ") + ` & ${finalName}.`;
};

module.exports = joinNames;