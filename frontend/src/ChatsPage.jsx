import { MultiChatSocket, MultiChatWindow, useMultiChatLogic, useSingleChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'e3e453c9-9ed0-43e9-914e-3605eb94bea0',
        props.user.username,
        props.user.secret);
    return (
    <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%' }}/>
    </div>
    )
}

export default ChatsPage