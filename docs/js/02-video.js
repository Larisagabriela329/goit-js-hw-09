import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);


player.on('timeupdate', throttle(function(event) {
    localStorage.setItem('videoplayer-current-time', event.seconds);
}, 1000)); 

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
    player.setCurrentTime(savedTime).catch(function(error) {
        console.error('Error setting playback time:', error);
    });
}