function huh() {
    const huh = document.getElementById('bigtext');
    const text = "riviox";
    let result = "";
    
    for (let i = 0; i < text.length; i++) {
      const letter = text[i];
      const randomCaps = Math.random() < 0.5;
      if (Math.random() < 0.001) {
        result = "RIP Ur mouse";
      } else {
        result += randomCaps ? letter.toUpperCase() : letter.toLowerCase();
      }
    }
  
    huh.innerHTML = result;
}