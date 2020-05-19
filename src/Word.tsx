import * as React from 'react';

interface IWordProps {
  word: string;
  author: string;
}

export const Word: React.FC<IWordProps> = ({ word, author}) => {
  return (
    <span>
      <span className={author}>{ word }</span>{' '}
    </span>
  )
}
