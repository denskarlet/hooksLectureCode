// its empty
/*
  Go back to stale state:
  Add this: const refCount = useRef(0) next to 
  Add useEffect add: 
  refCount.current++
  console.log(refCount.current)


  You will see it logging 'updated' value all the time.
  Why? Because ref is not a state. Its a variable you set aside. Use it as you wish.
  After ***const refCount = useRef(null)*** this line what happens is:

  useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). 
  The returned object will persist for the full lifetime of the component.



  It's initial value is what you passed into useRef -- (0 in our case). Think of it as a safe box that you have access to, you can read,
  write, change, reassign, but react will not rerender based on those changes(again, because ref is not quite state).
  Its just a variable you want to declare and store, but you dont want React to 'react' based on it + you dont want react to redeclare it on every render.
  My personal use case: I store my websocket connection in there. This way I wont have to worry about my webSocket becoming a new connection on every render.
  THINGS TO WATCH OUT FOR:
  dont do:
  const myWebSocket = useRef(new WebSocket("ws://url")) <--- this will make a new connection on every render.
  From stackOverflow: 
  Things passed to useRef are evaluated every re-render, it's just that they're discarded if it's not the initial render.

  BEST way is to always pass null inside and then change .current to be what you want it to be.
  
  You can also store your previous state in useRef if you ever want to run a comparison between current/old state.
  Its truly a weird and niche hook but can help you a lot every now and then:)
*/
