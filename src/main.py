from dotenv import load_dotenv
from discord.ext.commands import Bot, Context
from discord.ext.commands.errors import CommandNotFound
from os import getenv


load_dotenv()

token = getenv('TOKEN', None)

if token is None:
    raise EnvironmentError('Please provide a discord token in your .env file')


class BecarioBot(Bot):
    async def on_ready(self):
        print('I\'m online!')

    async def on_command_error(self, context: Context, exception):
        if isinstance(exception, CommandNotFound):
            return

        await super().on_command_error(context, exception)


bot = BecarioBot(command_prefix='!')

bot.load_extension('commands')

bot.run(token)
