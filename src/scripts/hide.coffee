run = () ->
  s = document.createElement('style')

  s.setAttribute 'type', 'text/css'
  s.innerText = 'body { display: none; }'

  (document.head or document.documentElement).appendChild s

run()
