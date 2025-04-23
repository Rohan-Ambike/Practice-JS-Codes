const fs = require('node:fs');
const path = require("path");
const replaceThis = "rohan";
const replaceWith = "king";
const folder = path.resolve(__dirname, 'data');

try {
    fs.readdir(folder, (err, data) => {

        // console.log(data);

        for (let index = 0; index < data.length; index++) {

            const item = data[index];

            let oldFile = path.join(folder, item);
            let newFile = path.join(folder, item.replaceAll(replaceThis, replaceWith));

            if (oldFile !== newFile) {
                fs.rename(oldFile, newFile, () => console.log("Rename Success"));
            }
            else {
                console.log("Provide new Name!");;
            }
        }
    });
} catch (err) {
    console.error(err);
}
