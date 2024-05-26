async function connectNames() {
  const name1 = document.getElementById('name1').value;
  const name2 = document.getElementById('name2').value;
  
  try {
    const response = await fetch('/connect-names', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name1, name2 })
    });
    
    const data = await response.json();
    document.getElementById('result').innerText = data.message;
  } catch (error) {
    console.error('Error fetching connectNames:', error);
  }
}
