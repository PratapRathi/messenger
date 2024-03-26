import React from 'react'
import Sidebar from '@/app/components/sidebar/Sidebar'
import ConversationList from '@/app/conversations/components/ConversationList'
import getConversation from '@/app/actions/getConversation'
import getUsers from '@/app/actions/getUsers'

const ConversationsLayout = async ({ children }: { children: React.ReactNode }) => {
  const conversations = await getConversation();
  const users = await getUsers();
  return (
    <Sidebar>
      <div className='h-full'>
        <ConversationList users={users} initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  )
}

export default ConversationsLayout
