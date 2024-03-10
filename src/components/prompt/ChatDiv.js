import React from 'react';
import ChatBox from './ChatBox';
import { useSelector } from 'react-redux';

const ChatDiv = () => {
  const qna = useSelector(state => state.history.history);
  // console.log(qna);
  return (
    <div className="flex-col absolute bottom-28 top-14 px-16 w-full overflow-y-auto">
      {qna.map((item) => (
        <div className='flex'>
          {item.user && <ChatBox message={item.user} heading={"Prompt"} initialColor={"blue"} alignment={"end"}/>}
          {item.ai && <ChatBox message={item.ai} heading={"Response"} initialColor={"gray"} alignment={"start"}/>}
        </div>
      ))}
    </div>
  );
};

export default ChatDiv;
