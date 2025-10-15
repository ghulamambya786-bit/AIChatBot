 // DOM Elements
        const chatWindow = document.getElementById('chatWindow');
        const userInput = document.getElementById('userInput');
        const sendButton = document.getElementById('sendButton');

        // Bot responses databases
        const botResponses = {
            greetings: ["Hello!", "Hi there!", "Hey! How can I help you?", "Greetings!"],
            howAreYou: ["I'm doing great, thanks for asking!", "I'm just a bot, but I'm functioning perfectly!", "All systems are operational!"],
            name: ["I'm your friendly AI assistant!", "You can call me ChatBot.", "I'm an AI created to help you."],
            help: ["I can answer simple questions, tell you about myself, or just chat!", "Try asking me about my capabilities or just say hello!"],
            default: ["I'm not sure I understand. Can you rephrase that?", "That's interesting! Tell me more.", "I'm still learning. Could you try asking differently?"],
            thanks: ["You're welcome!", "Happy to help!", "Anytime!"],
            goodbye: ["Goodbye! Have a great day!", "See you later!", "Bye! Come back anytime!"]
        };

        // Function to add a message to the chat window
        function addMessage(message, isUser) {
            // Create message container
            const messageDiv = document.createElement('div');
            messageDiv.className = isUser ? 'message user-message' : 'message bot-message';
            
            // Create message bubble
            const bubble = document.createElement('div');
            bubble.className = isUser ? 'message-bubble user-bubble' : 'message-bubble bot-bubble';
            bubble.textContent = message;
            
            // Append bubble to message container
            messageDiv.appendChild(bubble);
            
            // Append message to chat window
            chatWindow.appendChild(messageDiv);
            
            // Scroll to the bottom of the chat window
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }

        // Function to get bot response based on user input
        function getBotResponse(userMessage) {
            // Convert user message to lowercase for easier matching
            const lowerCaseMessage = userMessage.toLowerCase();
            
            // Check for greetings
            if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hey')) {
                return botResponses.greetings[Math.floor(Math.random() * botResponses.greetings.length)];
            }
            
            // Check for "how are you"
            if (lowerCaseMessage.includes('how are you')) {
                return botResponses.howAreYou[Math.floor(Math.random() * botResponses.howAreYou.length)];
            }
            
            // Check for name inquiry
            if (lowerCaseMessage.includes('name') || lowerCaseMessage.includes('who are you')) {
                return botResponses.name[Math.floor(Math.random() * botResponses.name.length)];
            }
            
            // Check for help request
            if (lowerCaseMessage.includes('help') || lowerCaseMessage.includes('what can you do')) {
                return botResponses.help[Math.floor(Math.random() * botResponses.help.length)];
            }
            
            // Check for thanks
            if (lowerCaseMessage.includes('thank')) {
                return botResponses.thanks[Math.floor(Math.random() * botResponses.thanks.length)];
            }
            
            // Check for goodbye
            if (lowerCaseMessage.includes('bye') || lowerCaseMessage.includes('goodbye') || lowerCaseMessage.includes('see you')) {
                return botResponses.goodbye[Math.floor(Math.random() * botResponses.goodbye.length)];
            }
            
            // Default response if no matches found
            return botResponses.default[Math.floor(Math.random() * botResponses.default.length)];
        }

        // Function to handle sending a message
        function sendMessage() {
            // Get user input and trim whitespace
            const message = userInput.value.trim();
            
            // Only proceed if message is not empty
            if (message) {
                // Add user message to chat
                addMessage(message, true);
                
                // Clear input field
                userInput.value = '';
                
                // Simulate typing delay before bot responds
                setTimeout(() => {
                    // Get and add bot response
                    const botResponse = getBotResponse(message);
                    addMessage(botResponse, false);
                }, 1000);
            }
        }

        // Event listener for send button click
        sendButton.addEventListener('click', sendMessage);

        // Event listener for Enter key press in input field
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        // Focus on input field when page loads
        window.addEventListener('load', () => {
            userInput.focus();
        });