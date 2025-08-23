export default function BlogPost({ title, author, content }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', marginBottom: '20px' }}>
      <h3>{title}</h3>
      <p><strong>작성자:</strong> {author}</p>
      <p>{content}</p>
    </div>
  );
}