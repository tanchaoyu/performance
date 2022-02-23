addEventListener('message', function (e) {
    postMessage('You said: ' + e.data);
  }, false);