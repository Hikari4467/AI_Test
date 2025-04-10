
import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) {
      setResponse('メッセージが空です');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });

      if (!res.ok) {
        setResponse(`エラー: ${res.status}`);
        return;
      }

      const data = await res.json();
      setResponse(data.reply || 'AIからの返答がありません');
    } catch (error) {
      setResponse('通信エラーが発生しました');
    } finally {
      setLoading(false);
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
      <button onClick={handleSend} disabled={loading}>
        {loading ? '送信中...' : '送信'}
      </button>
      <div style={{ marginTop: 20 }}>
        <strong>AIの返答：</strong>
        <p>{response}</p>
      </div>
    </div>
  );
}
