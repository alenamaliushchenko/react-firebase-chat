import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/List"
import ChatList from "./components/list/chatList/ChatList"
const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>
      <ChatList/>
    </div>
  )
}

export default App