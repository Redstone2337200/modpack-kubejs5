onEvent("command.registry", event => {
    const {
        commands: Commands,
        arguments: Arguments
    } = event;
    event.register(
        Commands.literal("pos")
            .requires(src => src.hasPermission(1))
            .then(Commands.argument('target', Arguments.PLAYER.create(event))
                .then(Commands.argument('block|entity', Arguments.STRING.create(event))
                    .then(Commands.argument('bool', Arguments.BOOLEAN.create(event))
                        .executes(run => {
                            const target = Arguments.PLAYER.getResult(run, "target");
                            const type = Arguments.STRING.getResult(run, "block|entity");
                            const bool = Arguments.BOOLEAN.getResult(run, "bool");
                            let player = event.player
                            let pos = player.rayTrace(1000);
                            target = player
                            let types = ["block", "entity"]
                            if (target == "example")
                                return 0;
                            if (type == null && bool == false) {
                                event.server.tell(Text.red('执行失败！').bold())
                            } else if (type == types[0] && bool == true && pos.type == types[0]) {
                                event.server.tell(Text.green('执行成功！').bold())
                                player.tell([Text.gold(`你当前看到的为：${pos.block.id}方块，且`).bold(), Text.blue(`方块的坐标为[X:${player.getDistance(pos.hitX)}，Y:${player.getDistance(pos.hitY)}，Z:${player.getDistance(pos.hitZ)}]`).bold()])
                                player.tell(Text.aqua(`离当前位置[${player.getDistance(pos.hitX, pos.hitY, pos.hitZ).toFixed(1)}]格`).bold())
                            } else if (type == types[1] && bool == true && pos.type == types[1]) {
                                event.server.tell(Text.green('执行成功！').bold())
                                player.tell([Text.gold(`你当前看到的实体为：${pos.entity.id}，且`).bold(), Text.blue(`实体的坐标为[X:${player.getDistance(pos.hitX)}，Y:${player.getDistance(pos.hitY)}，Z:${player.getDistance(pos.hitZ)}]`).bold()])
                                player.tell(Text.aqua(`离当前位置[${player.getDistance(pos.hitX, pos.hitY, pos.hitZ).toFixed(1)}]格`).bold())
                            }
                        }
                        )
                    )
                )
            )
    )
})
/*
onEvent('item.right_click', event => {
    let player = event.player;
    let target = player.rayTrace(1000);
    if (target.type == "block" && player.mainHandItem.id == "minecraft:compass") {
        let prop = target.block.properties.toString();
        // 把信息告诉玩家
        player.tell(`你刚才看的方块是：${target.block.id}，距离当前位置${player.getDistance(target.hitX, target.hitY, target.hitZ).toFixed(1)}格，方块属性：${prop}`);
        // 复制指令(TextJS)
        player.tell(Text.of("[点此复制/setblock指令]").bold().click(`copy:/setblock ~ ~ ~ ${target.block}`));
        // 为物品添加冷却
        // player.addItemCooldown("minecraft:compass", 1000);
    }
})*/
