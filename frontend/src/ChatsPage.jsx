import { MultiChatSocket, MultiChatWindow, useMultiChatLogic, useSingleChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'd63b09ee-eee6-4870-aa18-be4521fb9e7b',
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