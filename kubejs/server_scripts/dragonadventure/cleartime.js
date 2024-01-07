onEvent('command.registry', event => {
    const { commands: Commands, arguments: Arguments } = event;
    event.register(
        Commands.literal("cleartime")
            .requires(src => src.hasPermission(1))
            .then(Commands.argument('time', Arguments.INTEGER.create(event))
                .then(Commands.argument('bool', Arguments.BOOLEAN.create(event)))
                .executes(run => {
                    const time = Arguments.INTEGER.getResult(run, "time");
                    const bool = Arguments.BOOLEAN.getResult(run, "bool");
                    if (time <= 0 && bool == false || bool == true) {
                        event.server.tell(Text.red('执行失败！').bold())
                    } else if (time >= 1 && time <= 120 && bool == true) {
                        let score = time * 60
                        event.server.runCommandSilent(`/scoreboard players set item time ${score}`)
                        event.server.tell(Text.green(`执行成功！已将时间设定为${score}`).bold())
                    } else if (time >= 121 && bool == true) {
                        event.server.tell([Text.red(`执行失败！您设定的时间${score}太大了，超过了1~120的范围。`).bold()])    
                    }
                }
            )
        )
    )
})