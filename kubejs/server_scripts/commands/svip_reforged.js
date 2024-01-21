ServerEvents.commandRegistry((event) => {
    const { commands: Commands, arguments: Arguments } = event;
    let pattern = /\['(.*?)'/;
    event.register(
        Commands.literal('svip')
            .requires(src => src.hasPermission(2))
            .then(Commands.argument('target', Arguments.PLAYER.create(event))
                .then(Commands.argument('value', Arguments.BOOLEAN.create(event))
                    .executes(run => {
                        const target = Arguments.PLAYER.getResult(run, "target")
                        const value = Arguments.BOOLEAN.getResult(run, "value")
                        let player = run.source.getPlayer()
                        let server = run.source.getServer()
                        let players = run.source.level.getPlayers().toArray()
                        if (target == undefined || target == null && value == true || value == false) {
                            server.tell(Text.red('执行失败，可能是参数不完整').bold())
                        } else if (target == players[0] && value == true && !player.stages.has("vip")) {
                            player.stages.add('svip')
                            server.tell([Text.green('执行成功！已将玩家').bold(),Text.blue(`${players[0].match(pattern)[1]}`).bold(),Text.green('加入超级会员组').bold()])
                        } else if (target == player && value == false) {
                            player.stages.remove('svip')
                            server.tell([Text.green('执行成功！已将玩家').bold(),Text.blue(`${players[0].match(pattern)[1]}`).bold(),Text.green('移出超级会员组').bold()])
                        }
                    })
                )
            )
    )
})