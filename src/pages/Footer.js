import React from 'react'

function Footer() {
    return (
        <div>
            <div className='mt-6 flex -z-30 bottom-0 flex-col items-center justify-center w-full bg-gray-800 h-16 text-white text-sm'>
                <div className="text-center mt-4">
                    <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                    <p><a href="/terms" className="hover:underline">Terms of Service</a> | <a href="/privacy" className="hover:underline">Privacy Policy</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer