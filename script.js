//your JS code here. If required.
// ✅ Function to introduce a delay using Promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ✅ Async function to handle the delay and display the message
async function displayMessage() {
    const text = document.getElementById('text').value;
    const delayTime = document.getElementById('delay').value;
    const output = document.getElementById('output');

    if (!text || !delayTime) {
        alert('Please enter both message and delay!');
        return;
    }

    // ✅ Clear previous output
    output.innerHTML = '';

    try {
        console.log(`Waiting for ${delayTime} ms...`);
        await delay(Number(delayTime)); // Wait for the specified delay
        output.innerHTML = text; // Display the message after delay
        console.log(`Displayed message: "${text}"`);
    } catch (error) {
        console.error('Error:', error);
        output.innerHTML = 'An error occurred!';
    }
}

// ✅ Event Listener for button click
document.getElementById('btn').addEventListener('click', displayMessage);
