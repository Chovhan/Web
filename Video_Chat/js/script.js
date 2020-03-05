navigator.getUserMedia({video: true, audio: false}, function (stream) {
    var Peer = require('simple-peer');
    var peer = new Peer({
        initiator: location.hash === '#init',
        trickle: false,
        stream: stream
    });
    peer.on('signal', function (data) {
        document.getElementById('yourId').value = JSON.stringify(data);
    });

    document.getElementById('connect').addEventListener("click", function () {
        var otherId = JSON.parse(document.getElementById('otherId').value);
        peer.signal(otherId);
    });

    document.getElementById('send').addEventListener("click", function () {
        var yourMessages = document.getElementById('yourMessage').value;
        peer.send(yourMessages);
        document.getElementById('youMessages').textContent += 'Me: ' + yourMessages + '\n';
    });


    peer.on('data', function (data) {
        document.getElementById('messages').textContent += 'Him: ' + data + '\n';
    });

    peer.on('stream', function (stream) {
        var video = document.createElement('video');
        document.body.appendChild(video);

        video.srcObject = stream;
        video.play();

    });
    f(stream);
    function f(stream) {
        var video1 = document.querySelector('#myVideo');
        video1.srcObject = stream;
        video1.play();
    }

}, function (err) {
    console.log(err);
});
