
import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    if (!message.trim()) return;
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });
      const data = await res.json();
      setResponse(data.reply || '返答がありませんでした');
    } catch (error) {
      setResponse('エラーが発生しました');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>庄内マグナム AI接客</h1>
      <textarea
        rows={4}
        cols={40}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="メッセージを入力してください"
      />
      <br />
      <button onClick={handleSend}>送信</button>
      <div style={{ marginTop: 20 }}>
        <strong>AIの返答：</strong>
        <p>{response}</p>
      </div>
    </div>
  );
}
