export default function Card({ title, body }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <p>{body}</p>
      <br/>
      <p>This a new body that I can see on the cards.</p>
    </article>
  );
}
