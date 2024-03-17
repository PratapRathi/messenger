import React from 'react'
import Sidebar from '@/app/components/sidebar/Sidebar'

const UserLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Sidebar>
            <div className='h-full'>
                {children}
            </div>
        </Sidebar>
    )
}

export default UserLayout
