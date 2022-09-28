import { useState } from 'react';
import copy from 'copy-to-clipboard';

export function useHook() {
  const [isCopy, setIsCopy] = useState(false);

  function handleCopy(text) {
    console.log(text);
    if (typeof text === 'String' || typeof text === 'number') {
      copy(text.toString());
      setIsCopy(true);
    } else {
      setIsCopy(false);
    }
  }
  return [isCopy, handleCopy];
}
