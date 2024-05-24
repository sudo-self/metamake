function updateOGPreview() {
                  const ogTitle = document.getElementById('ogTitle').value || 'Your Website Title';
                  const ogDescription = document.getElementById('ogDescription').value || 'Your Website Description';
                  const ogURL = document.getElementById('ogURL').value || 'https://your-website-url.com';
                  const ogKeywords = document.getElementById('ogKeywords').value || 'Keyword1, Keyword2, Keyword3';
                  const previewCode = document.getElementById('previewCode');
                  const pwaButton = document.getElementById('pwaButton');
                  const ogImagePreview = document.getElementById('ogImagePreview');
      
                  let code = `&nbsp;<span class="code-meta">&lt;meta</span> <span class="code-property">charset</span>=<span class="code-content">"UTF-8"</span><span class="code-meta">&gt;</span><br>`;
                  code += `&nbsp;&nbsp;<span class="code-meta">&lt;meta</span> <span class="code-property">name</span>=<span class="code-content">"viewport"</span> <span class="code-property">content</span>=<span class="code-content">"width=device-width, initial-scale=1.0"</span><span class="code-meta">&gt;</span><br>`;
                  code += `&nbsp;&nbsp;&nbsp;<span class="code-meta">&lt;meta</span> <span class="code-property">property</span>=<span class="code-content">"og:type"</span> <span class="code-property">content</span>=<span class="code-content">"website"</span><span class="code-meta">&gt;</span><br>`;
                  code += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-meta">&lt;meta</span> <span class="code-property">property</span>=<span class="code-content">"og:title"</span> <span class="code-property">content</span>=<span class="code-content">"${ogTitle}"</span><span class="code-meta">&gt;</span><br>`;
                  code += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-meta">&lt;meta</span> <span class="code-property">property</span>=<span class="code-content">"og:description"</span> <span class="code-property">content</span>=<span class="code-content">"${ogDescription}"</span><span class="code-meta">&gt;</span><br>`;
                  code += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-meta">&lt;meta</span> <span class="code-property">property</span>=<span class="code-content">"og:url"</span> <span class="code-property">content</span>=<span class="code-content">"${ogURL}"</span><span class="code-meta">&gt;</span><br>`;
                  code += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-meta">&lt;meta</span> <span class="code-property">name</span>=<span class="code-content">"keywords"</span> <span class="code-property">content</span>=<span class="code-content">"${ogKeywords}"</span><span class="code-meta">&gt;</span><br>`;
      
                  if (pwaButton.classList.contains('active')) {
                      code += `&nbsp;<span class="code-meta">&lt;!---Progressive Web APP---></span><br>`;
                      code += `&nbsp;&nbsp;<span class="code-meta">&lt;meta</span> <span class="code-property">name</span>=<span class="code-content">"mobile-web-app-capable"</span> <span class="code-property">content</span>=<span class="code-content">"yes"</span><span class="code-meta">&gt;</span><br>`;
                      code += `&nbsp;&nbsp;&nbsp;<span class="code-meta">&lt;meta</span> <span class="code-property">name</span>=<span class="code-content">"apple-touch-fullscreen"</span> <span class="code-property">content</span>=<span class="code-content">"yes"</span><span class="code-meta">&gt;</span><br>`;
                      code += `&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-meta">&lt;meta</span> <span class="code-property">name</span>=<span class="code-content">"theme-color"</span> <span class="code-property">content</span>=<span class="code-content">"#000000"</span><span class="code-meta">&gt;</span><br>`;
                      code += `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="code-meta">&lt;link</span> <span class="code-property">rel</span>=<span class="code-content">"manifest"</span> <span class="code-property">href</span>=<span class="code-content">"manifest.json"</span><span class="code-meta">&gt;</span><br>`;
                  }
      
                  previewCode.innerHTML = code;
              }
      
              // Function to copy the code to clipboard
              function copyToClipboard() {
                  const previewCode = document.getElementById('previewCode');
                  const codeToCopy = previewCode.innerText;
                  const tempTextArea = document.createElement('textarea');
                  tempTextArea.value = codeToCopy;
                  document.body.appendChild(tempTextArea);
                  tempTextArea.select();
                  document.execCommand('copy');
                  document.body.removeChild(tempTextArea);
                  alert('Meta tags were added to clipboard. Head over to your project HTML and place them directly under the <head> tag in your HTML.');
              }
      
              function downloadHTML() {
                  const previewCode = document.getElementById('previewCode').innerText;
                  const blob = new Blob([previewCode], { type: 'text/html' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'index.html';
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                  URL.revokeObjectURL(url);
                  alert('HTML template is ready to go!');
              }
      
              // Function to toggle Progressive Web App inclusion
              function togglePWA() {
                  const pwaButton = document.getElementById('pwaButton');
                  pwaButton.classList.toggle('active');
                  updateOGPreview();
              }
      
              // Add event listeners to update preview on input change
              const inputFields = document.querySelectorAll('.input-container input, .input-container textarea');
              inputFields.forEach(inputField => {
                  inputField.addEventListener('input', updateOGPreview);
              });
      
              // Initial update of preview
              updateOGPreview();
 
      < /body> <
      footer >
        <
        p >
        <
        a class = "github-button"
      href = "https://github.com/sudo-self"
      data - color - scheme = "no-preference: light; light: light; dark: dark;"
      data - size = "large"
      aria - label = "Follow @sudo-self on GitHub" > MetaMaker < /a> <
        a class = "github-button"
      href = "https://github.com/sudo-self/"
      data - color - scheme = "no-preference: light; light: light; dark: dark;"
      data - icon = "octicon-star"
      data - size = "large"
      aria - label = "Star sudo-self/metamaker on GitHub" > Star < /a> <
        /p>