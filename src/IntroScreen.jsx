export default function IntroScreen({ onStart }) {
  return (
    <div className="intro-screen" onClick={onStart}>
      <h1>CriC-Quiz</h1>
      <p>Click anywhere to start</p>
    </div>
  );
}
