"use client"
import GroupChatModal from '@/app/conversations/components/GroupChatModal'
import ConversationBox from '@/app/conversations/components/ConversationBox'
import useConversation from '@/app/hooks/useConversation'
import { FullConversationType } from '@/app/types'
import { MdOutlineGroupAdd } from 'react-icons/md'
import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import { User } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { pusherClient } from '@/app/libs/pusher'
import { find } from 'lodash'

interface ConversationListProps {
    initialItems: FullConversationType[],
    users: User[]
}

const ConversationList: React.FC<ConversationListProps> = ({ initialItems, users }) => {
    const session = useSession();
    const [items, setItems] = useState(initialItems);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();
    const { conversationId, isOpen } = useConversation();

    const pusherKey = useMemo(() => {
        return session?.data?.user?.email;
    }, [session?.data?.user?.email]);

    useEffect(() => {
        if (!pusherKey) return;
        pusherClient.subscribe(pusherKey);

        const newConversationHandler = (conversation: FullConversationType) => {
            setItems((current) => {
                if (find(current, conversation.id)) return current;
                return [conversation, ...current];
            })
        }

        const updateConversationHandler = (conversation: FullConversationType) => {
            setItems((current) => current.map((currentConversation) => {
                if (currentConversation.id === conversation.id) {
                    return { ...currentConversation, messages: conversation.messages }
                }
                return currentConversation;
            }))
        }

        const removeConversationHandler = (conversation: FullConversationType) => {
            setItems((current)=>{
                return [...current.filter((convo)=> convo.id !== conversation.id)]
            })
            if(conversationId === conversation.id){
                router.push("/conversations");
            }
        }

        pusherClient.bind("conversation-new", newConversationHandler);
        pusherClient.bind("conversation:update", updateConversationHandler);  
        pusherClient.bind("conversation:remove", removeConversationHandler);  

        return () => {
            pusherClient.unsubscribe(pusherKey);
            pusherClient.unbind("conversation-new", newConversationHandler);
            pusherClient.unbind("conversation:update", updateConversationHandler);
            pusherClient.bind("conversation:remove", removeConversationHandler);  
        }
    }, [pusherKey, conversationId, router]);

    return (
        <>
            <GroupChatModal users={users} onClose={() => setIsModalOpen(false)} isOpen={isModalOpen} />
            <aside className={clsx(`
            fixed inset-y-0  pb-20 lg:pb-0 lg:left-20 lg:w-80 
            lg:block overflow-y-auto  border-r  border-gray-200`,
                isOpen ? "hidden" : "block w-full left-0"
            )}>
                <div className="px-5">
                    <div className="flex justify-between mb-4 pt-4">
                        <div className="text-2xl font-bold text-neutral-800">Messages</div>
                        <div onClick={() => setIsModalOpen(true)} className="rounded-full p-2 cursor-pointer transition bg-gray-100 text-gray-600 hover:opacity-75">
                            <MdOutlineGroupAdd size={20} />
                        </div>
                    </div>
                    {items.map((item) => (
                        <ConversationBox key={item.id} data={item} selected={conversationId === item.id} />
                    ))}
                </div>
            </aside>
        </>
    )
}

export default ConversationList
