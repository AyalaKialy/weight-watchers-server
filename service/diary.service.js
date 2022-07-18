const fs = require('fs/promises')

module.exports = {
    getDiaryUser: async (id) => {
        let data = await fs.readFile('./dataFile.json');
        data = JSON.parse(data);
        const user = data.users.find(user => user.id === id);
        return user.diary;
    },
    addNewDaySummary: async (myId, summary) => {
        let data = await fs.readFile('./dataFile.json');
        data = JSON.parse(data);
        let usersArr = data;
        const user = usersArr.users.find(user => user.id === myId);
        const index = usersArr.users.indexOf(user);
        usersArr.users[index].diary.push(summary);
        return await fs.writeFile('./dataFile.json', JSON.stringify(usersArr));
    },
    updateDaySummary: async (id, dayId, summary) => {
        let data = await fs.readFile('./dataFile.json');
        data = JSON.parse(data);
        let usersArr = data;
        const user = usersArr.users.find(user => user.id === id);
        const userIndex = usersArr.users.indexOf(user);
        const day = usersArr.users[userIndex].diary.find(diary => diary.id === dayId);
        const dayIndex = usersArr.users[userIndex].diary.indexOf(day);
        usersArr.users[userIndex].diary[dayIndex] = summary;
        return await fs.writeFile('./dataFile.json', JSON.stringify(usersArr));
    },
    deleteDaySummary: async (id, dayId) => {
        let data = await fs.readFile('./dataFile.json');
        data = JSON.parse(data);
        let usersArr = data;
        const user = usersArr.users.find(user => user.id === id);
        const userIndex = usersArr.users.indexOf(user);
        const day = usersArr.users[userIndex].diary.find(diary => diary.id === dayId);
        const dayIndex = usersArr.users[userIndex].diary.indexOf(day);
        usersArr.users[userIndex].diary.splice(dayIndex, 1);
        return await fs.writeFile('./dataFile.json', JSON.stringify(usersArr));
    }
}

