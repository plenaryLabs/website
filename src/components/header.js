import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="logo"> 
            <Link>
              <svg width="37" height="62" viewBox="0 0 37 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <rect x="37.1997" y="24.8" width="12.4" height="37.2" rx="6.2" transform="rotate(90 37.1997 24.8)" fill="#3772FF"/>
                <g filter="url(#filter0_d)">
                <rect width="12.4" height="62" rx="6.2" fill="#DF2935"/>
                </g>
                <circle cx="22.3199" cy="14.88" r="12.4" fill="#FDCA40"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.7623 24.8C27.6896 26.3572 25.1131 27.28 22.3211 27.28C19.529 27.28 16.9525 26.3572 14.8799 24.8L29.7623 24.8Z" fill="#2DC2BD"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4112 22.3362C10.8471 20.261 9.91992 17.6788 9.91992 14.88C9.91992 12.0812 10.8471 9.49906 12.4112 7.42386V22.3362Z" fill="#EE7A3B"/>
                </g>
                <defs>
                <filter id="filter0_d" x="0" y="-1" width="19.4" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feMorphology radius="5" operator="erode" in="SourceAlpha" result="effect1_dropShadow"/>
                <feOffset dx="6"/>
                <feGaussianBlur stdDeviation="3"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
                <clipPath id="clip0">
                <rect width="37" height="62" fill="white"/>
                </clipPath>
                </defs>
              </svg>
              <span>Plenary</span>
            </Link>
          </div>
          <div className="navigation">
            <nav>
              <Link>
                Menu
              </Link>
            </nav>
          </div>  
        </div>
      </div>
    </header>
  )
}

export default Header


