export default function WhatsAppButton() {
    const phone = "5511999999999"; // <-- seu número com DDI
    const message = "Olá! Quero saber mais sobre os sites.";
  
    return (
      <a
        href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
      >
        💬
      </a>
    );
  }
  