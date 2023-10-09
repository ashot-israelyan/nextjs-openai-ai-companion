import { FC, ReactNode } from 'react';

const ChatLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="mx-auto max-w-4xl h-full w-full">
      {children}
    </div>
  );
};

export default ChatLayout;
