const Command = require("../../structures/Command.js");


class Invite extends Command {
  constructor(...args) {
    super(...args, {
      description: "Invite me to your server!",
      aliases: ["inv"]
    });
  }

  async run(msg, args) { // eslint-disable-line no-unused-vars
    return msg.send(this.client.embed(this.client.user)
      .setTitle("Invite TCH Discord to your server")
      .setDescription("You can invite me to your server using the following link:\n\n[Invite Link](https://discord.com/oauth2/authorize?client_id=794077887556222996&scope=bot&permissions=6442450943)\n[Join Komunitas TCH](https://discord.gg/C7kgHCRYMW)\n[Upvote TCH (Soon)](https://top.gg/bot)"));
  }
}

module.exports = Invite;
