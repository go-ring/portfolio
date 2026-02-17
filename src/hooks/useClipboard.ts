import { useState, useCallback } from 'react';

export function useClipboard(timeout = 1000) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      if (!navigator?.clipboard) {
        console.warn('Clipboard API not available');
        return;
      }
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
    } catch (error) {
      console.error('Failed to copy text', error);
      setCopied(false);
    }
  }, [timeout]);

  return { copied, copyToClipboard };
}
