#!/bin/bash

# Send message to Gemini agent in tmux window
# Usage: send-gemini-message.sh <session:window> <message>

if [ $# -lt 2 ]; then
    echo "Usage: $0 <session:window> <message>"
    echo "Example: $0 agentic-seek:3 'Hello Gemini!'"
    exit 1
fi

WINDOW="$1"
shift  # Remove first argument, rest is the message
MESSAGE="$*"

# Send the message
tmux send-keys -t "$WINDOW" "$MESSAGE"

# Wait 5 seconds for UI to register
sleep 5

# Send Enter to submit
tmux send-keys -t "$WINDOW" Enter

echo "Message sent to $WINDOW: $MESSAGE"