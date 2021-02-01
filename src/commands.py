from discord import Embed, Color
from discord.ext.commands import command, Context, Bot


def setup(bot: Bot):
    bot.add_command(escolar)
    bot.add_command(invite)
    bot.add_command(maestros)


@command()
async def escolar(context: Context):
    embed = Embed(title='Departamento Escolar', color=Color.dark_green())

    embed.add_field(name='Teléfono', value='(81) 8329 4020')

    embed.add_field(name='Extensiones', value=', '.join(['5702', '5704', '5706', '5710']))

    embed.set_image(url='https://media.discordapp.net/attachments/717597571723558962/801136663673569341/FB_IMG_1611038189410.jpg?width=564&height=564')

    await context.send(embed=embed)


@command()
async def invite(context: Context):
    await context.send('https://discord.gg/pXyWC59')


@command()
async def maestros(context: Context):
    embed = Embed(
        title='Recomendaciones de Maestros',
        description='En este documento puedes obtener recomendaciones hechas por alumnos.',
        color=Color.dark_blue(),
        url='https://docs.google.com/document/d/1ubZHGdEOygLfwW7DYHooDauFYxBPPIgdpwl_sYirTi0/edit'
    )

    embed.add_field(
        name='¡Recuerda que tú también puedes aportar a este documento!',
        value='Tus aportaciones serán revisadas por un editor y aprobadas a la brevedad.'
    )

    await context.send(embed=embed)
