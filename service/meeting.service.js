const fs = require('fs/promises');

const getData = async () => {
  const data = await fs.readFile('./dataFile.json');
  return await JSON.parse(data);
};

const setData = (data) => fs.writeFile('./dataFile.json', JSON.stringify(data));

module.exports = {
  getAllMeetings: async () => {
    const data = await getData();
    const users = data.users;
    let meetings = [];
    users.forEach((user) => {
      meetings.push({ user: user.id, meetings: user.weight.meetings });
    });
    return meetings;
  },
  getMeetingById: async (id) => {
    const data = await getData();
    const users = data.users;
    let meetings = [];
    users.forEach((user) => {
      meetings.push({
        user: user.id,
        meetings: user.weight.meetings.find((meeting) => meeting.id === id),
      });
    });
    return meetings;
  },
  updateMeeting: async (id, meetingToUpdate) => {
    let allData = await getData();
    for (let i = 0; i < allData.users.length; i++) {
      let index = allData.users[i].weight.meetings.indexOf((meeting) => meeting.id === id);
      allData.users[i].weight.meetings[index + 1] = meetingToUpdate[i];
    }
    return await setData(allData);
      
  },
  createMeeting: async (meetings) => {
    let allData = await getData();
    let users = allData.users;
    let index = 0;
    users.forEach((user) => {
      user.weight.meetings.push(meetings[index++]);
    });
    return await setData(allData);
  },
  deleteMeeting: async (id) => {
    let allData = await getData();
      let users = allData.users;
      for (let i = 0; i < users.length; i++) {
        let index = users[i].weight.meetings.indexOf((meeting) => meeting.id === id);
        users[i].weight.meetings.splice(index , 1);
      }
    return await setData(allData);
  },
};
