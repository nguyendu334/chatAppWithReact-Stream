import { LoadingErrorIndicator, Chat, Channel, ChannelHeader, ChannelList, Window, MessageList } from 'stream-chat-react';
import { MessageInput } from 'stream-chat-react/dist/components';
import { useLoggedInAuth } from './../context/AuthContext';


export function Home() {
    const { user, streamChat } = useLoggedInAuth()
    if(streamChat == null) return <LoadingErrorIndicator />

    return (<Chat client={streamChat}>
        <ChannelList />
        <Channel>
            <Window>
                <ChannelHeader />
                <MessageList />
                <MessageInput />
            </Window>
        </Channel>
    </Chat>
)}