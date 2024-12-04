import React from 'react'
import '../stylesheets/SignUp.css'

function SignUp() {
  return (
    <div className='container'>
        <div className="paragraph">
            <h1>Ready to dive into <span>HABOT?</span></h1>
            <p>Signing up with HABOT opens the door to a world of new opportunities
                and potential for business growth. Gain access to a vibrant community
                of like-minded individuals, unlock valuable resources, and take the first
                step towards realizing your entrepreneurial dreams.</p>
            <button>Sign Up Today →</button>
        </div>
        <div className='buttons'>
            <div className="button-container">
                <button>Abudhabhi</button>
                <button>Dubai</button>
                <button>Sharjah & Ajman</button>
            </div>
            <div className="button-container">
                <button>Fujairah</button>
                <button>Ras Al khaimah</button>
                <button>Umm Al Quwain</button>
            </div>
        </div>
    </div>
  )
}

export default SignUp;