# 1.20.1 fabric kubejs6
Magic change pack for online use

### for mc
Part of the magic command, using ES5 syntax.

### Code snippet
Register Instruction Part，Start registration info command.
```js
let playerLevelSystem = new EnhancedLevelSystem();
//Start Writing
ServerEvents.commandRegistry((event) => {
    const { commands: Commands, arguments: Arguments } = event;
    let types = ["book", "more"]
    let names = ["exp", "lvl"]
    let pattern = /\['(.*?)'/;
    event.register(
        Commands.literal('info')
            .requires(src => src.hasPermission(1))
            .then(Commands.argument('target', Arguments.PLAYER.create(event))
                .then(Commands.argument('book|more', Arguments.STRING.create(event))
                    .executes(run => {
                        const target = Arguments.PLAYER.getResult(run, "target")
                        const type = Arguments.STRING.getResult(run, "book|more")
                        let server = run.source.getServer()
                        let player = run.source.getPlayer()
                        let players = run.source.level.getPlayers().toArray()
                        if (target == undefined || target == null && type == undefined) {
                            server.tell(Text.red('执行失败，可能是参数不完整！').bold())
                        } else if (target == player && type == types[0]) {
                            server.tell(Text.green('执行成功！书本已拿到').bold())
                            server.runCommand(`/execute as ${players[0].match(pattern)[1]} at @s run function test_pack:book`)
                        }
                    })
                )
            )
    )
    event.register(
        Commands.literal('info')
            .requires(src => src.hasPermission(1))
            .then(Commands.argument('target', Arguments.PLAYER.create(event))
                .then(Commands.argument('more|book', Arguments.STRING.create(event))
                    .then(Commands.argument('exp|lvl', Arguments.STRING.create(event))
                        .executes(run => {
                            const target = Arguments.PLAYER.getResult(run, "target")
                            const type = Arguments.STRING.getResult(run, "more|book")
                            const name = Arguments.STRING.getResult(run, "exp|lvl")
                            let player = run.source.getPlayer()
                            let server = run.source.getServer()
                            let players = run.source.level.getPlayers().toArray()
                            if (target == undefined || target == null && type == undefined && name == undefined) {
                                server.tell(Text.red('执行失败，可能参数不完整').bold())
                            } else if (target == player && type == types[1] && name == names[0]) {
                                server.tell([Text.green('执行成功！').bold(),Text.yellow('玩家').bold(),Text.aqua(`${players[0].match(pattern)[1]}`).bold(),Text.green('的当前经验值为：').bold(),Text.blue(`${playerLevelSystem.getExperience().toString()}`).bold()])
                            } else if (target == players[0] && type == types[0] && name == names[1]) {
                                server.tell([Text.green('执行成功！').bold(),Text.yellow('玩家').bold(),Text.aqua(`${players[0].match(pattern)[1]}`).bold(),Text.green('的当前等级为：').bold(),Text.blue(`LV.${playerLevelSystem.getLevel().toString()}`).bold()])
                            }
                        })
                    )
                )
            )
    )
})
```

```js
//Enhanced version of the experience system.
function EnhancedLevelSystem() {
    this.level = 1;
    this.experience = 0;
}

EnhancedLevelSystem.prototype.playLevelUpSound = function () {
    // 在此处添加播放升级成功音效的代码
    //player.playNotifySound('entity.player.levelup', 'players', 10, 1)
    console.info("播放升级成功音效！");
};

EnhancedLevelSystem.prototype.gainExperience = function (amount) {
    this.experience += amount;
    while (this.experience >= 100 * Math.pow(this.level, 2)) {
        this.experience -= 100 * Math.pow(this.level, 2);
        this.level++;
        //this.playLevelUpSound(); // 升级成功后播放音效
    }
};

EnhancedLevelSystem.prototype.completeQuest = function (questType) {
    const experienceRewards = {
        battle: 100,
        exploration: 150,
        crafting: 80,
        gathering: 70
    };

    if (experienceRewards[questType]) {
        this.gainExperience(experienceRewards[questType]);
        return true;
    } else {
        return false;
    }
};

EnhancedLevelSystem.prototype.defeatEnemy = function (enemyType) {
    const experienceRewards = {
        goblin: 50,
        dragon: 300,
        skeleton: 80,
        orc: 120
    };

    if (experienceRewards[enemyType]) {
        this.gainExperience(experienceRewards[enemyType]);
        return true;
    } else {
        return false;
    }
};

EnhancedLevelSystem.prototype.exploreNewArea = function (areaType) {
    const experienceRewards = {
        forest: 200,
        cave: 180,
        desert: 220,
        ruins: 250
    };

    if (experienceRewards[areaType]) {
        this.gainExperience(experienceRewards[areaType]);
        return true;
    } else {
        return false;
    }
};

EnhancedLevelSystem.prototype.completeMilestone = function (milestoneType) {
    const experienceRewards = {
        beginner: 500,
        intermediate: 1000,
        advanced: 1500,
        expert: 2000
    };

    if (experienceRewards[milestoneType]) {
        this.gainExperience(experienceRewards[milestoneType]);
        return true;
    } else {
        return false;
    }
};

EnhancedLevelSystem.prototype.getLevel = function () {
    return this.level;
};

EnhancedLevelSystem.prototype.getExperience = function () {
    return this.experience;
};

EnhancedLevelSystem.prototype.getExperienceToNextLevel = function () {
    return 100 * Math.pow(this.level, 2) - this.experience;
};

/*
var str = "class-m_3222['Redstone2327'/17.l='ServerLevel[新的世界]'.x=31.83.y=-60.00.z=-0.89]";
var pattern = /\['(.*?)'/; // 正则表达式用于匹配单引号中的内容
var result = str.match(pattern)[1];
console.log(result); // 输出 "Redstone2327"
*/
```

### Code snippet
Start registering instructions for VIP and svip.
###### VIP
```js
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
```
###### SVIP
```js
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
```