import React from 'react'
import { FaSignInAlt } from 'react-icons/fa'

export default function SignInButton() {
  return (
    <button className='flex justify-between items-center gap-1 text-white bg-green-600 px-3 py-2 rounded-sm'>
       <FaSignInAlt /> Sign In
    </button>
  )
}
