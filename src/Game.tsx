import * as React from 'react';
import { useContext, useState  } from "react";
import { useParams } from 'react-router-dom';
import { FirebaseContainer, FirebaseContext } from "./index";

import { Word } from "./Word";

const getDocs = (docs: any[]) => docs.map((doc: any) => doc.data())
  .sort((a, b) => a.time > b.time ? 1 : -1);

interface WordData {
  author: string;
  word: string;
  time: Date;
}

export const Game = () => {
  const [words, setWords] = useState<WordData[]>([]);
  const [inputValue, setInputValue] = useState('');
  const firebase = useContext<FirebaseContainer>(FirebaseContext);
  const { storyId } = useParams();

  const wordCollection = firebase.firestore.collection('stories')
    .doc(storyId)
    .collection('words');

  wordCollection
    .onSnapshot(snap => setWords(getDocs(snap.docs)));

  const onSubmit = (e: any) => {
    e.preventDefault();
    const currentValue = inputValue;
    setInputValue('')
    wordCollection.add({ author: 'Brendan', word: currentValue, time: new Date() })
  }

  const onChangeInput = (e: any) => setInputValue(e.target.value);

  return (
    <div>
      <h1>Welcome to {storyId}</h1>
      { words.map(({ word, author }: WordData, i) => <Word key={i} word={word} author={author}/>)}

      <form onSubmit={onSubmit}>
        <input value={inputValue} name="word" placeholder="type something..." onChange={onChangeInput}/>

      </form>


    </div>
  )
}
