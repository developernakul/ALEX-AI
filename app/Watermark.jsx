function Watermark() {
  return (
    <div style={{
      position: 'fixed',
      bottom: '10px',
      right: '10px',
      opacity: 0.5,
      color: '#888',
      fontSize: '1rem',
      zIndex: 9999,
      pointerEvents: 'none'
    }}>
      © Nakul
    </div>
  );
}

export default Watermark;