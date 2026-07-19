// ===========================
// AI ASSISTANT — CLAUDE API
// ===========================

const AI_MODEL = 'claude-sonnet-4-20250514';

const systemPrompt = `You are ConnectAI, the friendly AI assistant for ConnectImpact — a platform that helps people combat loneliness and social isolation by finding local communities, volunteering opportunities, events, and skill exchanges.

Your personality:
- Warm, encouraging, and genuine
- You help people overcome social anxiety
- You never suggest social media — only real-world connections
- You give short, specific, actionable advice (2-4 sentences max)
- Use 1-2 emojis per message naturally
- Ask one follow-up question per response to learn more about the user

Your capabilities:
- Recommend local hobby groups and communities
- Suggest volunteer opportunities based on skills/interests
- Generate conversation starters / ice breakers
- Create event ideas from natural language prompts
- Check in on user mood and suggest activities
- Suggest skill exchange partners
- Provide motivational support for social anxiety

When generating events, structure them like:
Event Title: [name]
Date/Time: [suggestion]  
Location: [type of venue]
Description: [2 sentences]
Tags: [3-5 tags]

Stay focused on real human connection, community building, and wellbeing.`;

let conversationHistory = [];
let isTyping = false;

async function sendMessage(userMessage) {
  if (!userMessage.trim() || isTyping) return;
  
  addMessage(userMessage, 'user');
  conversationHistory.push({ role: 'user', content: userMessage });
  
  document.getElementById('user-input').value = '';
  setTypingState(true);

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: AI_MODEL,
        max_tokens: 1000,
        system: systemPrompt,
        messages: conversationHistory
      })
    });

    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    const data = await response.json();
    const aiMessage = data.content[0].text;

    conversationHistory.push({ role: 'assistant', content: aiMessage });
    setTypingState(false);
    addMessage(aiMessage, 'ai');

  } catch (err) {
    setTypingState(false);
    const fallback = getFallbackResponse(userMessage);
    addMessage(fallback, 'ai');
  }
}

function getFallbackResponse(msg) {
  const lower = msg.toLowerCase();
  if (lower.includes('lonely') || lower.includes('isolated') || lower.includes('alone')) {
    return "I hear you, and I want you to know that feeling is completely valid 💙 Many people feel this way. The first step is often the hardest — what's one small interest or hobby you've always wanted to explore with others? I can find the perfect community for you right now.";
  }
  if (lower.includes('event') || lower.includes('create') || lower.includes('meetup')) {
    return "Love the initiative! 🎉 Creating a community event is a powerful way to connect people. Tell me the theme, vibe, or activity you have in mind — I'll generate a full event description, title, and suggested location for you!";
  }
  if (lower.includes('volunteer') || lower.includes('help') || lower.includes('cause')) {
    return "Volunteering is one of the most meaningful ways to connect with others 🌿 We have opportunities in education, environment, animal welfare, elderly care, and more. What cause speaks to your heart? I'll find verified NGOs near you that need your exact skills.";
  }
  if (lower.includes('skill') || lower.includes('learn') || lower.includes('teach')) {
    return "Skill exchange is such a beautiful concept — everyone has something to teach! ✨ What skill do you most want to share, and what would you love to learn in return? I'll find you a perfect exchange partner nearby.";
  }
  if (lower.includes('anxious') || lower.includes('nervous') || lower.includes('scared') || lower.includes('shy')) {
    return "It's completely okay to feel nervous about meeting new people — that's a human feeling 💙 Let me suggest starting small: a book club or walking group where you share a common activity first, so conversation flows naturally. What interests you most? I'll find a low-pressure group nearby.";
  }
  return "I'm here to help you build real, meaningful connections! 🌟 I can help you find local communities, volunteer opportunities, events, or skill exchanges near you. What kind of connection are you looking for today?";
}

function addMessage(text, sender) {
  const messagesEl = document.getElementById('chat-messages');
  if (!messagesEl) return;

  const wrap = document.createElement('div');
  wrap.className = `chat-bubble-wrap ${sender === 'user' ? 'user-wrap' : 'ai-wrap'}`;

  const bubble = document.createElement('div');
  bubble.className = `chat-bubble ${sender === 'user' ? 'user-bubble' : 'ai-bubble'}`;
  bubble.innerHTML = formatMessage(text);

  if (sender === 'ai') {
    const avatar = document.createElement('div');
    avatar.className = 'chat-ai-avatar';
    avatar.innerHTML = `<div class="orb-mini-sm"></div>`;
    wrap.appendChild(avatar);
  }

  wrap.appendChild(bubble);
  messagesEl.appendChild(wrap);
  messagesEl.scrollTop = messagesEl.scrollHeight;

  // Animate in
  wrap.style.opacity = '0';
  wrap.style.transform = 'translateY(10px)';
  requestAnimationFrame(() => {
    wrap.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    wrap.style.opacity = '1';
    wrap.style.transform = 'translateY(0)';
  });
}

function formatMessage(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br/>')
    .replace(/(Event Title:|Date\/Time:|Location:|Description:|Tags:)/g, '<span class="msg-label">$1</span>');
}

function setTypingState(state) {
  isTyping = state;
  const indicator = document.getElementById('typing-indicator');
  const sendBtn = document.getElementById('send-btn');
  if (indicator) indicator.style.display = state ? 'flex' : 'none';
  if (sendBtn) {
    sendBtn.disabled = state;
    sendBtn.innerHTML = state
      ? '<div class="spinner"></div>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
  }
}

function handleSend() {
  const input = document.getElementById('user-input');
  if (input && input.value.trim()) sendMessage(input.value.trim());
}

function sendQuickPrompt(prompt) {
  document.getElementById('user-input').value = prompt;
  sendMessage(prompt);
}

// Export
window.AIAssistant = { sendMessage, sendQuickPrompt, handleSend };
