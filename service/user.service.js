const fs = require('fs/promises')

const getData = async () => {
    const data = await fs.readFile('./dataFile.json');
    return await JSON.parse(data);
};
  
const setData = (data) => fs.writeFile('./dataFile.json', JSON.stringify(data));
module.exports = {

    getAllUsers: async () => {
        const data = await getData();
        return data.users;
    },
    MeansOfIdentification: async (meansOfIdentification) => {
        let data = await getData();
        return data = data.users.find(user => user.email === meansOfIdentification || user.phone === meansOfIdentification); 
    },
    getUserById: async (id) => {
        let data = await getData();
        return data = data.users.find(user => user.id === id);
    },
    updateUser: async (id, userToUpdate) => {
        let data = await getData();
        let index = data.users.indexOf(user => user.id === id);
        data.users[index + 1] = userToUpdate;
        return await setData(data);
    },
    createUser: async (user) => {
        let data = await getData();
        data.users.push(user);
        return await setData(data);
    },
    deleteUser: async (id) => {
        let data = await getData();
        let index = data.users.indexOf(user => user.id === id);
        data.users.splice(index, 1);
        return await setData(data);
    }
}

