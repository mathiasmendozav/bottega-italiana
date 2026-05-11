import { useState } from 'react'

const FALLBACK_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23E9DFC8' width='400' height='400'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Jost, sans-serif' font-size='24' fill='%23C89B3C'%3EBottega Italiana%3C/text%3E%3C/svg%3E`

export default function ImgBox({ src, alt = '', style = {}, ...props }) {
  const [error, setError] = useState(false)

  return (
    <img
      src={error ? FALLBACK_SVG : src}
      alt={alt}
      onError={() => setError(true)}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        ...style,
      }}
      {...props}
    />
  )
}
