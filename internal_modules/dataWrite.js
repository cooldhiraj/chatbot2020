
module.exports.save = async function ( inputs ) {
    const fs = require('fs')

    const data = JSON.stringify(inputs.sentence);

     fs.writeFile(inputs.path, data, err => {
        if (err) {
            console.error(err)
            return false;
        }
        console.log(inputs.msg);
        return true;
    })
};



