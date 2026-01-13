export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f8f8f8",
        color: "#666",
        fontSize: "0.875rem",
        marginTop: "auto",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <p>
        Recipe Master - Powered by AI using huggingface.co,
        mistral-7b-instruct-v0.1 | Built with React & Vite
      </p>
    </footer>
  );
}
