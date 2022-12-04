import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log(Player);

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const CURRENT_TIME = 'videoplayer-current-time';
const savedTime = localStorage.getItem(CURRENT_TIME);
console.log(savedTime);

player.on('timeupdate', throttle(onStartPlay, 1000));

function onStartPlay(data) {
  const currentPlayingTime = JSON.stringify(data.seconds);
  localStorage.setItem(CURRENT_TIME, currentPlayingTime);

  if (data.seconds === data.duration) {
    localStorage.removeItem(CURRENT_TIME);
  }
}

if (savedTime) {
  player.setCurrentTime(savedTime);
}
