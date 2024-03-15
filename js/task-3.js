'use strict';
const profile = {
  username: 'Jacob',
  playTime: 300,
  changeUsername(newName) {
    this.username = newName;
  },
  updatePlayTime(hours) {
    this.playTime += hours;
  },
  getInfo() {
    console.log(`${this.username} has ${this.playTime} active hours!`);
  },
};

profile.getInfo(); // "Jacob has 300 active hours!"

profile.changeUsername('Marco');

profile.getInfo(); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
profile.getInfo(); // "Marco has 320 active hours!"
