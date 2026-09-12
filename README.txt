BOOYAH BATTLE — TELEGRAM TOURNAMENT WEBSITE

WHAT THIS PROJECT DOES
Instagram link -> tournament page -> player fills form -> your Telegram bot sends the registration.

DEPLOYMENT (FREE OPTION)
1. Create a Telegram bot with BotFather and copy the bot token.
2. Create a Telegram group/channel/chat where you want registrations.
3. Add the bot there and send at least one message in that chat.
4. Get your chat ID (use a trusted Telegram bot/tool or Telegram API method).
5. Upload this folder to a GitHub repository.
6. Import the repository into Vercel.
7. In Vercel Project Settings -> Environment Variables add:
   TELEGRAM_BOT_TOKEN = YOUR_BOT_TOKEN
   TELEGRAM_CHAT_ID = YOUR_CHAT_ID
8. Redeploy.
9. Put your Vercel website link in Instagram bio/story.

IMPORTANT
- Never put your Telegram bot token inside index.html or public JavaScript.
- This starter sends registrations directly to Telegram but does not store them in a database.
- For paid tournaments, add your payment verification flow only after you have a safe, legal payment setup.
- Customize tournament names, entry fees and slots inside index.html.

NEXT UPGRADE
A proper version can add:
- Admin panel
- Tournament creation from phone
- Automatic slot numbers
- Registration database
- Payment-status buttons
- Match room ID/password release
- Player registration link in Telegram
