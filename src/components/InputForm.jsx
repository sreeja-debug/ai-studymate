
function InputForm({ input, setInput, onGenerate, loading }) {
  return (
    <div className="input-section">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your notes or topic..."
        rows="8"
      />

      <button onClick={onGenerate} disabled={loading}>
        {loading ? "Generating..." : "Generate Study Material"}
      </button>
    </div>
  );
}

export default InputForm;