import axios from 'axios';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
//lund
  const callGroqAPI = async () => {
    setResponse("Loading...");
    console.log("Calling Groq with:", input);
//choot
    try {
      const res = await axios.post(
        'https://api.groq.com/openai/v1/chat/completions',
        {
          model: "llama3-70b-8192", // You can also try "llama3-70b-8192"
          messages: [{ role: "user", content: input }],
          max_tokens: 512,
          temperature: 0.7
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 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`
          }
        }
      );

      console.log("Groq responded:", res.data);
      const reply = res.data.choices[0].message.content;
      setResponse(reply);
    } catch (err) {
      console.error("Groq Error:", err.response?.data || err.message);
      setResponse("Error: " + (err.response?.data?.error?.message || err.message));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Groq Chatbot</Text>
      <TextInput
        style={styles.input}
        placeholder="Ask me anything..."
        value={input}
        onChangeText={setInput}
      />
      <Button title="Ask" onPress={callGroqAPI} />
      <ScrollView style={styles.result}>
        <Text>{response}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, backgroundColor: '#fff' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: { borderColor: '#ccc', borderWidth: 1, padding: 10, marginBottom: 10 },
  result: { marginTop: 20 }
});
