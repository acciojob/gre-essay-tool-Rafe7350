 const textArea = document.getElementById('evaluatedText');
 const wordCount = document.getElementById('wordCount');

 textArea.addEventListener('input', () => {
  const text = textArea.value;
  const count = text.trim().split(/\s+/).length;
     wordCount.textContent = count;
 });
   