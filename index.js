// Load environment variables from .env
require('dotenv').config();

// Import the OpenAI SDK
const OpenAI = require("openai");

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Use the key from .env
});

async function askGPT() {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4", // or "gpt-3.5-turbo"
      messages: [
        { role: "user", content: "What is the capital of France?" },
      ],
    });

    console.log("GPT Says:", response.choices[0].message.content);
  } catch (err) {
    console.error("Error contacting OpenAI:", err.message);
  }
}

// Call the function
askGPT();
