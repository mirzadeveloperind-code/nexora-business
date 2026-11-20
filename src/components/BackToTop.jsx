function BackToTop() {
  return (
    <button
      className="back-to-top"
      onClick={() => window.scrollTo({
        top: 0,
        behavior: "smooth"
      })}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}

export default BackToTop;