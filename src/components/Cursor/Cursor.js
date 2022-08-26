import React, {useEffect, useState} from 'react'
import { useContext } from 'react'
import { mouseContext } from '../../context/mouseContext'

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({top: 0, left: 0})
    const {mouseEnter} = useContext(mouseContext)

    const mouseMoveHandler = (e) => {
        setMousePosition({left: e.pageX, top: e.pageY})
    }

    useEffect(() => {
      window.addEventListener('pointermove', mouseMoveHandler)
    }, [])

  return (
    <>
        <div className={`outer-cursor ${mouseEnter ? 'scale-cursor' : ''} `}
            style={{left:mousePosition.left , top: mousePosition.top}} 
            onPointerMove={e => mouseMoveHandler(e)}>
            {!mouseEnter && <div className="inner-cursor"></div>}
        </div>
    </>
  )
}

export default Cursor