const fs = require('fs/promises')

module.exports = {
    login: async (meansOfIdentification) => {
        let data = await fs.readFile('./dataFile.json');
        data = JSON.parse(data);
        return data.users.find(user => user.email === meansOfIdentification || user.phone === meansOfIdentification);
    }
}