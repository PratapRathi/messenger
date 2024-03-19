import React from 'react'
import Sidebar from '@/app/components/sidebar/Sidebar'
import ConversationList from '@/app/conversations/components/ConversationList'
import getConversation from '@/app/actions/getConversation'

const ConversationsLayout = async ({children}: {children: React.ReactNode}) => {

    const conversations = await getConversation();

  return (
    <Sidebar>
        <div className='h-full'>
            <ConversationList initialItems={conversations}/>
            {children}
        </div>
    </Sidebar>
  )
}

export default ConversationsLayout
