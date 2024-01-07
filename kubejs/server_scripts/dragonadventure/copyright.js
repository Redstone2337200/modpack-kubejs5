onEvent("command.registry", event => {
    const {
        commands: Commands,
        arguments: Arguments
    } = event;
    //var players = [] = event.server.getPlayers()
    event.register(
        Commands.literal("copyright")
            .requires(src => src.hasPermission(1))
            .then(Commands.argument('target', Arguments.PLAYERS.create(event))
                .then(Commands.argument('item', Arguments.ITEM_STACK.create(event))
                    .then(Commands.argument('count', Arguments.INTEGER.create(event))
                        .then(Commands.argument('bool', Arguments.BOOLEAN.create(event))
                            .executes(run => {
                                const target = Arguments.PLAYERS.getResult(run, "target");
                                const item = Arguments.ITEM_STACK.getResult(run, "item");
                                const count = Arguments.INTEGER.getResult(run, "count");
                                const bool = Arguments.BOOLEAN.getResult(run, "bool");
                                if (target == null || target == undefined && item == undefined && count == null && bool == false || bool == true) {
                                    event.server.tell(Text.red('执行失败，可能是参数不全').bold())
                                } else if (target != null || target != undefined && item != undefined && count <= 1 && bool == true) {
                                    event.player.give(`${item}`)
                                    event.server.tell(Text.green(`执行成功，成功将${item}*1给予玩家${event.player}`).bold())
                                } else if (target != null || target != undefined && item != undefined && count <= 2 && bool == true) {
                                    event.player.give(`${count}x ${item}`)
                                    event.server.tell(Text.green(`执行成功！成功将${item}*${count}给予玩家${event.player}`).bold())
                                }
                            }
                            )
                        )
                    )
                )
            )
    )
})