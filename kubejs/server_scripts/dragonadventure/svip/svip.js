onEvent('command.registry', event => {
    const { commands: Commands, arguments: Arguments } = event;
    let admin = event.player.op
    event.register(
        Commands.literal("vip")
            .requires(src => src.hasPermission(2))
            .then(Commands.argument('target', Arguments.PLAYER.create(event))
                .then(Commands.argument('add|remove', Arguments.STRING.create(event))
                    .then(Commands.argument('op|def', Arguments.STRING.create(event))
                        .then(Commands.argument('bool', Arguments.BOOLEAN.create(event))
                            .executes(run => {
                                const target = Arguments.player.getResult(run, "target");
                                const on = Arguments.STRING.getResult(run, "add|remove");
                                const lvl = Arguments.STRING.getResult(run, "op|def");
                                const bool = Arguments.BOOLEAN.getResult(run, "bool");
                                let types = ["add", "remove"]
                                let types1 = ["op", "def"]
                                let tags = ["opvip", "defvip", "defsvip", "opsvip", "vip"]
                                let player = event.player
                                if (target == null || target == undefined && on == undefined && lvl == undefined || lvl == null && bool == false || bool == true) {
                                    event.server.tell(Text.red('执行失败！').bold())
                                }
                                for (let type of types) {
                                    if (target != null || target != undefined && on == type && lvl != undefined || lvl != null && bool == false) {
                                        event.server.tell(Text.red('执行失败，可能参数不完整！').bold())
                                    }
                                }
                                tags.forEach(tag => {
                                    if (target != null || target != undefined && !player.stages.has('svipm') && !player.stages.has(tag) && on == types[0] && lvl == types1[0] && bool == true && !admin) {
                                        player.stages.add('svipm')
                                        event.server.tell(Text.green(`执行成功！已将玩家${player}加入普通超会行业。`).bold())
                                    } else if (target != null || target != undefined && player.stages.has('svipm') && !player.stages.has(tag) && on == types[1] && lvl == types1[1] && bool == true && !admin) {
                                        player.stages.remove('svipm')
                                        event.server.tell(Text.green(`执行成功！已将玩家${player}移除普通超会行业。`).bool())
                                    }
                                    if (target != null || target != undefined && !player.stages.has('svipo') && !player.stages.has(tag) && on == types[0] && lvl == types1[0] && bool == true && !admin) {
                                        player.stages.add('svipm')
                                        event.server.tell(Text.green(`执行成功！已将玩家${player}加入管理超会行业。`).bold())
                                    } else if (target != null || target != undefined && player.stages.has('svipo') && !player.stages.has(tag) && on == types[1] && lvl == types1[1] && bool == true && !admin) {
                                        player.stages.remove('svipm')
                                        event.server.tell(Text.green(`执行成功！已将玩家${player}移除管理超会行业。`).bool())
                                    }
                                });
                            })
                        )
                    )
                )
            )
    )
})


onEvent('player.chat', function (event) {
    let input = event.message.trim();//获取聊天信息
    let id = event.player;
    if (event.player.stages.has('svipm') && !event.player.op) {
        event.server.tell([Text.aqua('[MVP+]').bold(), Text.green(`${id}`).bold(), Text.white('>>').bold(), Text.blue(`${input}`).bold()]);
        event.cancel();
    } else {
        event.server.tell([Text.green('[普通玩家+]').bold(), Text.white(`${id}`).bold(), Text.green('>>').bold(), Text.white(`${input}`).bold()]);
        event.cancel();
    }
    if (event.player.stages.has('svipo') && event.player.op) {
        event.player.runCommand(`tellraw @a [{"text":"§l§a[MVP++]","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false},{"selector":"@p"},{"text":"§f>> ${input}","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false}]`);
        event.cancel();
    } else {
        event.server.runCommandSilent(`tellraw @a [{"text":"§l[普通玩家++]","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false},{"selector":"@p"},{"text":"§f>> ${input}","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false}]`);
        event.cancel();
    }
})