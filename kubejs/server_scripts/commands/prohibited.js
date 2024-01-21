ServerEvents.commandRegistry((event) => {
    const {commands:Commands,arguments:Arguments} = event;
    event.register(
        Commands.literal('prohibited')
            .requires(src => src.hasPermission(2))
            .then(Commands.argument('value',Arguments.BOOLEAN.create(event))
                .executes(run => {
                    const value = Arguments.BOOLEAN.getResult(run,"value")
                    let player = run.source.getPlayer()
                    let server = run.source.getServer()
                    if (value == undefined || value == null && player.op) {
                        server.tell(Text.red('执行失败').bold())
                    } else if(value == true && !player.stages.has('chat') && player.op) {
                        server.tell(Text.green('执行成功！已开启违禁词检测。').bold())
                        player.stages.add('chat')
                    } else if (value == false && player.stages.has('chat') && player.op) {
                        server.tell(Text.green('执行成功！已关闭违禁词检测。').bold())
                        player.stages.remove('chat')
                    }
                })
            )
    )
})