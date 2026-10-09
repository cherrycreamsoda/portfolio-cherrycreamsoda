import { useCallback, useEffect, useRef, useState } from 'react'
import './PageScrollbar.css'

const MIN_THUMB_HEIGHT = 48

function getScrollMetrics() {
  const { documentElement } = document
  const viewportHeight = window.innerHeight
  const contentHeight = documentElement.scrollHeight
  const maxScroll = Math.max(contentHeight - viewportHeight, 0)
  const trackHeight = Math.max(viewportHeight - 16, 0)
  const thumbHeight = Math.max(
    (viewportHeight / contentHeight) * trackHeight,
    MIN_THUMB_HEIGHT,
  )
  const maxThumbOffset = Math.max(trackHeight - thumbHeight, 0)
  const thumbOffset = maxScroll
    ? (window.scrollY / maxScroll) * maxThumbOffset
    : 0

  return { contentHeight, thumbHeight, thumbOffset, trackHeight }
}

function PageScrollbar() {
  const [metrics, setMetrics] = useState(getScrollMetrics)
  const [isDragging, setIsDragging] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const hideTimeout = useRef(null)

  const showScrollbar = useCallback(() => {
    setIsVisible(true)
    window.clearTimeout(hideTimeout.current)
    hideTimeout.current = window.setTimeout(() => {
      setIsVisible(false)
    }, 5000)
  }, [])

  useEffect(() => {
    const updateMetrics = () => setMetrics(getScrollMetrics())

    updateMetrics()
    const handleScroll = () => {
      updateMetrics()

      if (window.scrollY === 0) {
        window.clearTimeout(hideTimeout.current)
        setIsVisible(false)
      } else {
        showScrollbar()
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateMetrics)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateMetrics)
      window.clearTimeout(hideTimeout.current)
    }
  }, [showScrollbar])

  useEffect(() => {
    if (!isDragging) return undefined

    const handlePointerMove = (event) => {
      const maxThumbOffset = metrics.trackHeight - metrics.thumbHeight
      const maxScroll = metrics.contentHeight - window.innerHeight
      const nextOffset = Math.min(
        Math.max(event.clientY - 8 - metrics.thumbHeight / 2, 0),
        maxThumbOffset,
      )

      window.scrollTo({
        top: maxThumbOffset ? (nextOffset / maxThumbOffset) * maxScroll : 0,
      })
    }

    const stopDragging = () => setIsDragging(false)

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', stopDragging)
    document.body.classList.add('pageScrollbarDragging')

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', stopDragging)
      document.body.classList.remove('pageScrollbarDragging')
    }
  }, [isDragging, metrics])

  if (metrics.contentHeight <= window.innerHeight) return null

  const handleTrackPointerDown = (event) => {
    if (event.target !== event.currentTarget) return

    const maxThumbOffset = metrics.trackHeight - metrics.thumbHeight
    const maxScroll = metrics.contentHeight - window.innerHeight
    const nextOffset = Math.min(
      Math.max(event.clientY - 8 - metrics.thumbHeight / 2, 0),
      maxThumbOffset,
    )

    window.scrollTo({
      top: maxThumbOffset ? (nextOffset / maxThumbOffset) * maxScroll : 0,
      behavior: 'smooth',
    })
  }

  return (
    <div
      className={`pageScrollbar${isVisible ? ' pageScrollbarVisible' : ''}`}
      aria-hidden="true"
      onPointerDown={handleTrackPointerDown}
    >
      <div
        className="pageScrollbarThumb"
        style={{
          height: `${metrics.thumbHeight}px`,
          transform: `translateY(${metrics.thumbOffset}px)`,
        }}
        onPointerDown={(event) => {
          event.stopPropagation()
          showScrollbar()
          setIsDragging(true)
        }}
      />
    </div>
  )
}

export default PageScrollbar
