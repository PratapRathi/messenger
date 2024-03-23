"use client"

import useConversation from "@/app/hooks/useConversation"
import { FullMessageType } from "@/app/types"
import { useEffect, useRef, useState } from "react"
import MessageBox from "@/app/conversations/[conversationId]/components/MessageBox"
import axios from "axios"


interface BodyProps {
  initialMessages: FullMessageType[]
}

const Body: React.FC<BodyProps> = ({initialMessages}) => {
  const [messages, setMessages] = useState(initialMessages);
  const bottomRef = useRef<HTMLDivElement>(null);
  const {conversationId} = useConversation();

  useEffect(()=>{
    axios.post(`/api/conversations/${conversationId}/seen`)
  },[conversationId]);

  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, idx)=>(
        <MessageBox data={message} key={message.id} isLast={idx===messages.length-1} />
      ))}
      <div ref={bottomRef} className="pt-24"/>
    </div>
  )
}

export default Body
