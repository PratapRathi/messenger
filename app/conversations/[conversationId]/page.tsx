
interface IParams {
    conversationId: string;
}

const conversationId = async ({ params }: { params: IParams }) => {
    return (
        <div>
            ConversationId!
        </div>
    )
}


export default conversationId;