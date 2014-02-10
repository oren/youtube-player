var p = require('youtube-player')({id: 'yt_player', width: 400, height: 300});

p.on('ready', function (state) {
  p.play('wusGIl3v044');
});

p.on('change', function (state) {
  console.log('change', state, Object.keys(p.player));
});

p.on('playing', function (time) {
  console.log(time);
});

p.on('end', function () {
  console.log('THE END');
});


p.on('error', function (error) {
  console.log(error);
});
