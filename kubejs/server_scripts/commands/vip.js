ServerEvents.commandRegistry((event) => {
    const { commands: Commands, arguments: Arguments } = event;
    let pattern = /\['(.*?)'/;
    //let player = event.player
    event.register(
        Commands.literal('vip')
            .requires(src => src.hasPermission(2))
            .then(Commands.argument('target', Arguments.PLAYER.create(event))
                .then(Commands.argument('value', Arguments.BOOLEAN.create(event))
                    .executes(run => {
                        const target = Arguments.PLAYER.getResult(run, "target")
                        const value = Arguments.BOOLEAN.getResult(run, "value")
                        let player = run.source.getPlayer()
                        let players = run.source.level.getPlayers().toArray()
                        let server = run.source.getServer()
                        if (target == null || target == undefined && value == true || value == false) {
                            server.tell(Text.red('执行失败！').bold())
                        } else if (target == player && value == true && !player.stages.has('svip')) {
                            server.tell(Text.green(`执行成功！已将玩家${players[0].match(pattern)[1]}加入普通特权!`).bold())
                            //event.addGameStage('vip')
                            player.stages.add('vip')
                        } else if (target == players[0] && value == false) {
                            server.tell(Text.green(`执行成功！已将玩家${players[0].match(pattern)[1]}移出普通特权!`).bold())
                            //event.removeGameStage('vip')
                            player.stages.remove('vip')
                        }
                    }
                )
            )
        )
    )
})