onEvent('command.registry', event => {
    const { commands: Commands, arguments: Arguments } = event;
    event.register(
        Commands.literal("robot")
            .requires(src => src.hasPermission(1))
            .then(Commands.argument('remind|autoclear', Arguments.STRING.create(event))
                .then(Commands.argument('bool', Arguments.BOOLEAN.create(event)))
                .executes(run => {
                    const function1 = Arguments.STRING.getResult(run, "remind|autoclear");
                    const bool = Arguments.BOOLEAN.getResult(run, "bool");
                    let type = ["remind", "autoclear"]
                    if (function1 == null || function1 == undefined && bool == false || bool == true) {
                        event.server.tell(Text.red('执行失败！').bold())
                    } else if (function1 == type[0] && bool == true) {
                        event.server.getPlayer().stages.add('on')
                        event.server.tell(Text.green('执行成功！').bold())
                    } else if (function1 == type[0] && bool == false) {
                        event.server.getPlayer().stages.remove('on')
                        event.server.tell(Text.green('执行失败！').bold())
                    } else if (function1 == type[1] && bool == true) {
                        event.server.getPlayer().stages.add('time')
                        event.server.tell(Text.green('执行成功！').bold())
                    } else if (function1 == type[1] && bool == false) {
                        event.server.getPlayer().stages.remove('time')
                        event.server.tell(Text.green('执行失败！').bold())
                    }
                }
            )
        )
    )
})