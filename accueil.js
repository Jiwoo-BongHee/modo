const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Je suis prêt à accueillir les nouveaux")
})

client.on("message", message => {
    if(message.content === "test t bo"){
        message.channel.send(":oui:")
    }

    if(message.content.startsWith("?MP")){
        if (message.member.roles.has("358283335652605972")){
            if (!message.channel.id === "358287182991065088") return;
            mention = message.mentions.members.first()
            if (!mention){
                return message.channel.send("merci de saisir un utilisateur valide !")
            }

            if (mention.roles.has("358281312790118400")){
                mention.addRole("358285283147513876")
                message.channel.send("J'ai mis le rôle \"a été MP\" à cette personne, fais ton travail maintenant")
            }
        }

        else {
            message.channel.send("ptdr t ki")
        }
    }

    if (message.content.startsWith("?membres")){
        if (!message.channel.id === "358287182991065088") return;
        if (message.member.roles.has("358283335652605972")){
        mention = message.mentions.members.first()
        if (!mention){
            return message.channel.send("merci de saisir un utilisateur valide !")
        }

        if (mention.roles.has("358281312790118400")) {
            mention.addRole("389490952257142784")
            mention.addRole("358281649307254784")
            mention.removeRole("358281312790118400")
            mention.removeRole("358285283147513876")
            mention.removeRole("385913394697601025")
            message.channel.send("Cette personne est membre, bo jeu.")
        }
        }
    }

    if (message.content.startsWith("?mutem")){
        mention = message.mentions.members.first()

        if (!mention){
            return message.channel.send("merci de saisir un utilisateur valide !")
        }

        if (message.member.roles.has("358283335652605972" || "358283729007017984" || "358283853682442243")){
            mention.addRole("358283504783458305")
        }

    }

    if (message.content.startsWith("?demutem")){
        mention = message.mentions.members.first()

        if (!mention){
            return message.channel.send("merci de saisir un utilisateur valide !")
        }

        if (message.member.roles.has("358283335652605972" || "358283729007017984" || "358283853682442243")){
            mention.removeRole("358283504783458305")
        }

    }
})

client.login("Mzk2MDMxMTY0OTEwOTI3ODcz.DSbgSA.jL6SQ5yfVJH_Tv9RZq-VSMFzNx8")