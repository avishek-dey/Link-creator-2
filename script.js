document.getElementById('linkForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const taskLinkValue = document.getElementById('taskLink').value;
  const khLinkValue = document.getElementById('khLink').value;

  // Replace 'YOUR_REBRANDLY_API_KEY' with your actual Rebrandly API key
  const apiKey = '059b39384328481e98270a4388b53941';
  
  try {
      // Use Promise.all to wait for both API calls to complete
      const [taskShortenedLink, khShortenedLink] = await Promise.all([
          shortenLinkWithRebrandly(taskLinkValue, apiKey),
          shortenLinkWithRebrandly(khLinkValue, apiKey)
      ]);

      const taskResultElement = document.getElementById('taskResult');
      const khResultElement = document.getElementById('khResult');

      taskResultElement.innerHTML = `Task link - <a href="https://${taskShortenedLink}" target="_blank">${taskShortenedLink}</a>`;
      khResultElement.innerHTML = `KH link - <a href="https://${khShortenedLink}" target="_blank">${khShortenedLink}</a>`;

      // Clear the input fields
      document.getElementById('taskLink').value = '';
      document.getElementById('khLink').value = '';
  } catch (error) {
      console.error('Error occurred while shortening links:', error);
      alert('Error occurred while shortening links. Please try again later.');
  }
});

// Rest of the code remains the same...


async function shortenLinkWithRebrandly(link, apiKey) {
  const apiUrl = 'https://api.rebrandly.com/v1/links';

  try {
      const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'apikey': apiKey,
          },
          body: JSON.stringify({
              destination: link,
          }),
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data && data.shortUrl) {
          return data.shortUrl;
      } else {
          throw new Error('Rebrandly API response did not contain a shortened link');
      }
  } catch (error) {
      console.error('Error occurred while shortening link:', error);
      throw error;
  }
}

function copyResultToClipboard() {
  const taskResultText = document.getElementById('taskResult').textContent;
  const khResultText = document.getElementById('khResult').textContent;

  const combinedResult = taskResultText + '\n' + khResultText;

  const tempElement = document.createElement('textarea');
  tempElement.value = combinedResult;
  document.body.appendChild(tempElement);
  tempElement.select();
  document.execCommand('copy');
  document.body.removeChild(tempElement);

  alert('Result data copied to clipboard!');
}
