"use client"

import React from 'react'
import { signOut } from 'next-auth/react'

const Users = () => {
    return (
        <>
            <div>
                Hello Users!
            </div>
            <button onClick={() => { signOut() }}>Sign Out</button>
        </>
    )
}

export default Users
