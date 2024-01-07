onEvent("command.registry", event => {
    const {
        commands: Commands,
        arguments: Arguments
    } = event;
    //var players = [] = event.server.getPlayers()
    event.register(
        Commands.literal("info")
            .requires(src => src.hasPermission(1))
            .then(Commands.argument('target', Arguments.PLAYER.create(event))
                .then(Commands.argument('version|help|name|description', Arguments.STRING.create(event))
                    .then(Commands.argument('bool', Arguments.BOOLEAN.create(event))
                        .executes(run => {
                            const target = Arguments.PLAYER.getResult(run, "target");
                            const type = Arguments.STRING.getResult(run, "version|help|name|description");
                            const bool = Arguments.BOOLEAN.getResult(run, "bool");
                            let types = ["version", "help", "name", "description"]
                            if (target == null || target == undefined && type == null && bool == false || bool == true) {
                                event.server.tell(Text.red('执行失败！').bold())
                            } else if (target != null || target != undefined && type == types[0] && bool == true) {
                                event.server.tell(Text.green('执行成功！').bold())
                                //event.server.tell([Text.green('===============介绍===============').bold()]);
                                //event.server.tell([Text.green('龙的冒险：永恒机械·重铸2.0整合包').bold()]);
                                //event.server.runCommandSilent('tellraw @p [{"text":"§a§l尊敬的冒险家","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false},{"selector":"@p","bold":true,"color":"yellow"},{"text":"§a§l先生,"}]');
                                //event.server.tell([Text.green('在这个充满龙的世界中,玩家可以选择当龙骑士耀武扬威,\n也可以选择化身为龙,体验龙的生活,\n玩家还可以选择发展科技实现自动化工厂,\n还能以枪为武器,大战巨龙,成为猎龙人,\n这是一个未知的世界,在这个世界,活下去吧！').bold()]);
                                event.server.runCommandSilent('tellraw @p [{"text":"§a§lV2.0.3 Powered by ","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false},{"text":"§a§lRedstone233","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"clickEvent":{"action":"open_url","value":"https://redstone2337200.github.io/"},"hoverEvent":{"action":"show_text","value":"Click here to enter."}}]');
                                event.server.tell([Text.green('Copyright ©2024 Felongkeji™.').bold()]);
                                //event.server.tell([Text.green('===============介绍===============').bold()]);
                            } else if (target != null || target != undefined && type == types[1] && bool == true) {
                                event.server.tell(Text.green('执行成功！').bold())
                                //event.server.tell([Text.green('===============介绍===============').bold()]);
                                event.server.tell([Text.green('龙的冒险：永恒机械·重铸2.0整合包').bold()]);
                                //event.server.runCommandSilent('tellraw @p [{"text":"§a§l尊敬的冒险家","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false},{"selector":"@p","bold":true,"color":"yellow"},{"text":"§a§l先生,"}]');
                                //event.server.tell([Text.green('在这个充满龙的世界中,玩家可以选择当龙骑士耀武扬威,\n也可以选择化身为龙,体验龙的生活,\n玩家还可以选择发展科技实现自动化工厂,\n还能以枪为武器,大战巨龙,成为猎龙人,\n这是一个未知的世界,在这个世界,活下去吧！').bold()]);
                                //event.server.runCommandSilent('tellraw @p [{"text":"§a§lV2.0.0 Powered by ","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false},{"text":"§a§lRedstone233","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"clickEvent":{"action":"open_url","value":"https://redstone2337200.github.io/"},"hoverEvent":{"action":"show_text","value":"Click here to enter."}}]');
                                event.server.tell([Text.green('Copyright ©2024 Felongkeji™.').bold()]);
                                //event.server.tell([Text.green('===============介绍===============').bold()]);
                            } else if (target != null || target != undefined && type == types[2] && bool == true) {
                                event.server.tell(Text.green('执行成功！').bold())
                                event.server.tell([Text.green('===============介绍===============').bold()]);
                                event.server.tell([Text.green('龙的冒险：永恒机械·重铸2.0整合包').bold()]);
                                event.server.runCommandSilent('tellraw @p [{"text":"§a§l尊敬的冒险家","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false},{"selector":"@p","bold":true,"color":"yellow"},{"text":"§a§l先生,"}]');
                                event.server.tell([Text.green('在这个充满龙的世界中,玩家可以选择当龙骑士耀武扬威,\n也可以选择化身为龙,体验龙的生活,\n玩家还可以选择发展科技实现自动化工厂,\n还能以枪为武器,大战巨龙,成为猎龙人,\n这是一个未知的世界,在这个世界,活下去吧！').bold()]);
                                event.server.runCommandSilent('tellraw @p [{"text":"§a§lV2.0.3 Powered by ","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false},{"text":"§a§lRedstone233","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"clickEvent":{"action":"open_url","value":"https://redstone2337200.github.io/"},"hoverEvent":{"action":"show_text","value":"Click here to enter."}}]');
                                event.server.tell([Text.green('Copyright ©2024 Felongkeji™.').bold()]);
                                event.server.tell([Text.green('===============介绍===============').bold()]);
                            } else if (target != null || target != undefined && type == types[3] && bool == true) {
                                event.server.tell(Text.green('================格式===============').bold());
                                event.server.tell(Text.green('/book <玩家选择器> <书本类型>¹ <布尔值>').bold());
                                event.server.tell(Text.green('/info <玩家选择器> <信息类型>² <布尔值>').bold());
                                event.server.tell(Text.green('/copyright <玩家选择器> <物品ID> <获取数量> <布尔值>').bold());
                                event.server.tell(Text.green('/robot <功能名称>³ <布尔值>').bold());
                                event.server.tell(Text.green('/cleartime <冷却时间> <布尔值>').bold());
                                event.server.tell(Text.green('数据类型：').bold());
                                event.server.tell([Text.green('①书本类型可为：').bold(), Text.green('\nbook和info').bold()]);
                                event.server.tell([Text.green('②信息类型可为：').bold(), Text.green('\nversion、help、name和description').bold()]);
                                event.server.tell([Text.green('③功能名称可为：').bold(), Text.green('\nremind和autoclear').bold()]);
                                event.server.tell(Text.green('================格式===============').bold())
                            }
                        }
                        )
                    )
                )
            )
    )
})