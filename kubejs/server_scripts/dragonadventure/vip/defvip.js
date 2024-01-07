onEvent('command.registry', event => {
    const { commands: Commands, arguments: Arguments } = event;
    event.register(
        Commands.literal("defvip")
            .requires(src => src.hasPermission(2))
            .then(Commands.argument('target', Arguments.PLAYER.create(event))
                .then(Commands.argument('add|remove', Arguments.STRING.create(event))
                    .then(Commands.argument('lvl', Arguments.INTEGER.create(event))
                        .then(Commands.argument('bool', Arguments.BOOLEAN.create(event))
                            .executes(run => {
                                const target = Arguments.player.getResult(run, "target");
                                const on = Arguments.STRING.getResult(run, "add|remove");
                                const lvl = Arguments.INTEGER.getResult(run, "lvl");
                                const bool = Arguments.BOOLEAN.getResult(run, "bool");
                                let types = ["add", "remove"]
                                let tags = ["opvip", "vip", "defsvip", "opsvip", "svip"]
                                let player = event.player
                                for (const type of types) {
                                    tags.forEach(tag => {
                                        if (target == null || target == undefined && on == undefined && lvl <= 0 && bool == false || bool == true) {
                                            event.server.tell(Text.red('执行失败！').bold())
                                        } else if (target != null || target != undefined && on == type && lvl <= 1 && bool == false) {
                                            event.server.tell(Text.red('执行失败，可能参数不完整！').bold())
                                        } else if (target != null || target != undefined && !player.stages.has('defvip') && !player.stages.has(tag) && on == types[0] && lvl <= 1 && bool == true) {
                                            event.server.tell(Text.green(`执行成功!恭喜玩家${player}成功晋升至普通会员。`).bold())
                                            player.stages.add('defvip')
                                        } else if (target != null || target != undefined && player.stages.has('defvip') && !player.stages.has(tag) && on == types[1] && lvl <= 1 && bool == true) {
                                            event.server.tell(Text.green(`执行成功！已将普通会员玩家${player}移出了普通会员行列。`).bold())
                                            player.stages.remove('defvip')
                                        }
                                    })
                                }
                            }
                            )
                        )
                    )
                )
            )
    )
})

onEvent('player.chat', function (event) {
    let input = event.message.trim();//获取聊天信息
    let id = event.player;
    if (event.player.stages.has('defvip') && !event.player.op) {
        event.server.tell([Text.aqua('[VIP+]').bold(), Text.green(`${id}`).bold(), Text.white('>>').bold(), Text.blue(`${input}`).bold()]);
        event.cancel();
    } else {
        event.server.tell([Text.green('[普通玩家+]').bold(), Text.white(`${id}`).bold(), Text.green('>>').bold(), Text.white(`${input}`).bold()]);
        event.cancel();
    }
})