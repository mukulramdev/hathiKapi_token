// const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

async function fetchFileFromS3() {
  const url = 'https://gamerji-dharmendra.s3.amazonaws.com/agendas/Board%205_1729513988092.docx';

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Use response.arrayBuffer() instead of response.buffer()
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Option 1: Save the file locally
    const filePath = path.join(__dirname, 'Board_5.docx');
    fs.writeFileSync(filePath, buffer);
    console.log('File downloaded and saved to', filePath);

    // Option 2: Log the file content (may be binary data)
    // console.log(buffer);
  } catch (error) {
    console.error('Error fetching the file:', error);
  }
}

fetchFileFromS3();
