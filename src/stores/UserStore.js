import { observable } from 'mobx';

const userStore = observable({ 
  nickname: "",
  nicknameSet: false,
});

export default userStore;
