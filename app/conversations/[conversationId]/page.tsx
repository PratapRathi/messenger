import getConversationByID from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";
import EmptyState from "@/app/components/EmptyState";
import Header from "@/app/conversations/[conversationId]/components/Header";

interface IParams {
    conversationId: string;
}


const conversationId = async ({ params }: { params: IParams }) => {

    const conversation = await getConversationByID(params.conversationId);
    const messages = await getMessages(params.conversationId);

    if (!conversation) {
        return (
            <div className="h-full lg:pl-80">
                <div className="flex flex-col h-full">
                    <EmptyState />
                </div>
            </div>
        )
    }

    return (
        <div className="h-full lg:pl-80">
            <div className="flex flex-col h-full">
                <Header conversation={conversation}/>
            </div>
        </div>
    )
}


export default conversationId;