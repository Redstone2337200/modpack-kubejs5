onEvent('server.load', function (event) {
    let board = ["tick", "time"]
    if (event.server.getPlayer(event.player).stages.has('time')) {
        for (let boards of board) {
            event.server.runCommandSilent(`scoreboard objectives add ${boards} dummy`)
            event.server.tell(Text.green('建立成功！').bold())
        }
    } else {
        event.server.tell(Text.red('建立失败！').bold())
    }
    if (event.server.getPlayer().stages.has('on')) {
        event.server.runCommandSilent('scoreboard objectives add ' + board[0] + 'dummy')
        event.server.runCommandSilent('scoreboard objectives add ' + board[1] + 'dummy')
        event.server.runCommandSilent('/scoreboard players set item time 300')
        event.server.tell(Text.green('建立成功！').bold())
    } else {
        event.server.tell(Text.red('建立失败！').bold())
    }
})





onEvent("player.tick", event => {// 监听player.tick事件
    if (event.player.stages.has("time")) {
        event.server.runCommandSilent('/scoreboard players add time tick 1')
        event.server.runCommandSilent('/execute if score time tick matches 20.. at @s run scoreboard players remove item time 1')
        event.server.runCommandSilent('/execute if score time tick matches 20.. at @s run scoreboard players set time tick 0')
        //event.server.runCommandSilent('/execute if score item time matches ..0 at @s run scoreboard players set item time 300')
        event.server.runCommandSilent('/execute if score item time matches ..0 at @s run kill @e[type=item]')
        //event.server.runCommandSilent('/execute if score item time matches ..0 at @s run tellraw @a [{"text":"§b§l清理成功！本次总共清理§6§l"},{},{"text":"§b§l种物品"}]')
        event.server.tell(Text.gold('未完工，请耐心等待').bold())
    }
})