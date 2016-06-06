var run;

run = function() {
  var s;
  s = document.createElement('style');
  s.setAttribute('type', 'text/css');
  s.innerText = 'body { display: none; }';
  return (document.head || document.documentElement).appendChild(s);
};

run();
