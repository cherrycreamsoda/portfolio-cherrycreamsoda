import { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const ringPosition = useRef({ x: 0, y: 0 })
  const targetPosition = useRef({ x: 0, y: 0 })
  const animationFrame = useRef(null)
  const [isEnabled, setIsEnabled] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updateAvailability = () => {
      setIsEnabled(pointerQuery.matches && !motionQuery.matches)
    }

    updateAvailability()
    pointerQuery.addEventListener('change', updateAvailability)
    motionQuery.addEventListener('change', updateAvailability)

    return () => {
      pointerQuery.removeEventListener('change', updateAvailability)
      motionQuery.removeEventListener('change', updateAvailability)
    }
  }, [])

  useEffect(() => {
    if (!isEnabled) return undefined

    const animateRing = () => {
      ringPosition.current.x +=
        (targetPosition.current.x - ringPosition.current.x) * 0.18
      ringPosition.current.y +=
        (targetPosition.current.y - ringPosition.current.y) * 0.18

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPosition.current.x}px, ${ringPosition.current.y}px) translate(-50%, -50%)`
      }

      animationFrame.current = requestAnimationFrame(animateRing)
    }

    const handleMouseMove = (event) => {
      targetPosition.current = { x: event.clientX, y: event.clientY }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`
      }
    }

    const handlePointerOver = (event) => {
      const target = event.target
      setIsHovering(Boolean(target instanceof Element && target.closest('a, button')))
    }

    const handlePointerOut = (event) => {
      const target = event.relatedTarget
      setIsHovering(Boolean(target instanceof Element && target.closest('a, button')))
    }

    document.documentElement.classList.add('customCursorEnabled')
    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handlePointerOver)
    document.addEventListener('mouseout', handlePointerOut)
    animationFrame.current = requestAnimationFrame(animateRing)

    return () => {
      document.documentElement.classList.remove('customCursorEnabled')
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handlePointerOver)
      document.removeEventListener('mouseout', handlePointerOut)
      cancelAnimationFrame(animationFrame.current)
    }
  }, [isEnabled])

  if (!isEnabled) return null

  return (
    <>
      <div
        ref={dotRef}
        className={`customCursorDot${isHovering ? ' customCursorDotHover' : ''}`}
        aria-hidden="true"
      />
      <div ref={ringRef} className="customCursorRing" aria-hidden="true" />
    </>
  )
}

export default CustomCursor
