import React from 'react'
import Sidebar from '@/app/components/sidebar/Sidebar'
import getUsers from '@/app/actions/getUsers'
import UserList from '@/app/users/components/UserList';

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
    const users = await getUsers();
    return (
        <Sidebar>
            <div className='h-full'>
                <UserList items={users} />
                {children}
            </div>
        </Sidebar>
    )
}

export default UserLayout
