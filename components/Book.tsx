import React, { useState } from 'react'

interface BookProps {
  title: string
  author: string
  color?: string
  textColor?: string
  active: boolean
  url?: string
}

const Book: React.FC<BookProps> = ({ 
  title, 
  author,
  color = '#E49273',
  textColor = '#000000',
  active,
  url
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const totalPages = 36

  const handleClick = () => {
    if (active && url) {
      window.open(url, '_blank')
    } else if (!active) {
      window.open('https://docs.google.com/forms/d/e/1FAIpQLScnIN3PpINW2HX3UN9oMIc5xUBAWYg5bY9FyAMimXCo2mWt1A/viewform?usp=header', '_blank')
    }
  }

  return (
    <div 
      className={`relative inline-block w-40 h-48 ${url || !active ? 'cursor-pointer' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{ 
        perspective: '900px',
      }}
    >
      <div 
        className="absolute inset-0 transition-transform duration-500 ease-in-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isHovered ? 'rotateY(-20deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Pages including cover */}
        <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
          {[...Array(totalPages)].map((_, index) => {
            const isCover = index === totalPages - 1;
            const topVariation = isCover ? 0 : Math.random() * 0.4 + 0.8;
            const bottomVariation = isCover ? 0 : Math.random() * 0.4 + 0.8;
            const rightVariation = isCover ? 0 : Math.random() * 0.3 + 0.85;

            return (
              <div 
                key={index}
                className={`absolute rounded-r-sm shadow-sm ${isCover ? 'rounded-md' : ''}`}
                style={{
                  left: isCover ? '0' : `${index * 0.7}%`,
                  top: isCover ? '0%' : `${1 * topVariation}%`,
                  bottom: isCover ? '0%' : `${1 * bottomVariation}%`,
                  right: isCover ? '0%' : `${1 * rightVariation}%`,
                  transformOrigin: 'left',
                  transform: `rotateY(-${index * 0.5}deg) translateZ(${isCover ? 4 : 0.1 * index}px)`,
                  backgroundColor: isCover ? color : 'white',
                  zIndex: index,
                }}
              >
                {isCover && (
                  <>
                    {/* Book binding lighting effect */}
                    <div 
                      aria-hidden="true"
                      className="absolute left-0 top-0 bottom-0 w-[12%] rounded-l-md mix-blend-overlay"
                      style={{
                        backgroundColor: color,
                        background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.25) 25%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.25) 75%, rgba(255,255,255,0) 100%)'
                      }}
                    />
                    {/* Cover content */}
                    <div className="flex flex-col justify-between h-full p-4 ml-[12%]">
                      <h1 className="text-md font-semibold leading-tight" style={{ color: textColor }}>
                        {title}
                      </h1>
                      <div className="text-xs opacity-70" style={{ color: textColor }}>
                        {author}
                      </div>
                    </div>
                    {!active && (
                      <div className="absolute inset-x-0 bottom-0 h-8 flex items-center justify-center bg-black bg-opacity-75 rounded-b-md">
                        <span className="text-white text-xs font-semibold">Join Waitlist</span>
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Back cover */}
        <div 
          className="absolute inset-0 rounded-md shadow-md"
          style={{
            backgroundColor: color,
            transform: 'rotateY(180deg) translateZ(5px)',
            backfaceVisibility: 'visible',
            zIndex: totalPages,
          }}
        />
      </div>
    </div>
  )
}

export default Book

