import { useEffect } from 'react';



export default function useKeyPress(key, action){
    useEffect(() => {
    // TODO: define event listener
    function onKeyup(e) {
        if (e.key === key) action()
      }

    // TODO: register event listener
    window.addEventListener('keyup', onKeyup);
    // TODO: unregister event listener
    return () => window.removeEventListener('keyup', onKeyup);
    // TODO: link to component lifecycle
    }, [])
}