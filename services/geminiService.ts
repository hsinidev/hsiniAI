
import { GoogleGenAI } from "@google/genai";

const getAIClient = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const runChat = async (prompt: string, isThinkingMode: boolean): Promise<string> => {
  const ai = getAIClient();
  const modelName = isThinkingMode ? 'gemini-2.5-pro' : 'gemini-2.5-flash';
  
  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: `You are a helpful assistant for a digital products affiliate website. Your goal is to answer user questions about technology, digital marketing, AI, and the products featured on the site. Keep your answers concise and helpful. User question: "${prompt}"`,
      ...(isThinkingMode && {
        config: {
          thinkingConfig: { thinkingBudget: 32768 }
        }
      })
    });
    
    // Fix: Access the 'text' property directly from the response object.
    return response.text;
  } catch (error) {
    console.error("Gemini API call failed:", error);
    return "I'm sorry, I encountered an error while processing your request. Please try again later.";
  }
};