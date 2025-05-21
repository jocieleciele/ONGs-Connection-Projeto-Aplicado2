// Doacao form submission
document.getElementById('doacao-form')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitButton = e.target.querySelector('button[type="submit"]');
    submitButton.disabled = true;
  
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
  
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/doacoes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) throw new Error('Erro na submissão da doação');
  
      alert('Doação registrada com sucesso! Você receberá instruções para finalizar o pagamento.');
      e.target.reset();
    } catch (error) {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao registrar a doação. Tente novamente.');
    } finally {
      submitButton.disabled = false;
    }
  });