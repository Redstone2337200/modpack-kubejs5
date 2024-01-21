let playerLevelSystem = new EnhancedLevelSystem();

ServerEvents.commandRegistry((event) => {
    const { commands: Commands, arguments: Arguments } = event;
    let types = ["exp", "lvl", "nee"]
    let pattern = /{(.*)}/;
    event.register(
        Commands.literal('modpack')
            .requires(src => src.hasPermission(1))
            .then(Commands.argument('target', Arguments.PLAYER.create(event))
                .then(Commands.argument('exp|lvl|nee', Arguments.STRING.create(event))
                    .executes(run => {
                        const target = Arguments.PLAYER.getResult(run, "target")
                        const type = Arguments.STRING.getResult(run, "exp|lvl|nee")
                        let player = run.source.getPlayer()
                        let server = run.source.getServer()
                        let players = run.source.level.getPlayers().toArray()
                        if (target == null || target == undefined && type == undefined) {
                            server.tell(Text.red('执行失败，可能参数不完整').bold())
                        } else if (target == players[0] && type == types[0]) {
                            server.tell([Text.green('执行成功！').bold(),Text.yellow('玩家').bold(),Text.aqua(`${player.name.match(pattern)[1]}`).bold(),Text.green('的当前经验值为：').bold(),Text.blue(`${playerLevelSystem.getExperience().toString()}`).bold()])
                        } else if (target == player && type == types[1]) {
                            server.tell([Text.green('执行成功！').bold(),Text.yellow('玩家').bold(),Text.aqua(`${player.name.match(pattern)[1]}`).bold(),Text.green('的当前等级为：').bold(),Text.blue(`LV.${playerLevelSystem.getLevel().toString()}`).bold()])
                        } else if (target == players[0] && type == types[2]) {
                            server.tell([Text.green('执行成功！').bold(),Text.yellow('玩家').aqua(`${player.name.match(pattern)[1]}`).bold(),Text.green('距离下次升级还缺：').bold(),Text.blue(`${playerLevelSystem.getExperienceToNextLevel().toString()}`).bold(),Text.green('经验').bold()])
                        }
                    })
                )
            )
    )
})

//加强版经验系统
function EnhancedLevelSystem() {
    this.level = 1;
    this.experience = 0;
}

EnhancedLevelSystem.prototype.playLevelUpSound = function (player) {
    // 在此处添加播放升级成功音效的代码
    player.playNotifySound('entity.player.levelup', 'players', 10, 1)
    console.log("播放升级成功音效！");
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
// 使用加强版等级经验系统进行各种操作
let playerLevelSystem = new EnhancedLevelSystem();
playerLevelSystem.gainExperience(800);
playerLevelSystem.completeQuest("exploration");
playerLevelSystem.defeatEnemy("dragon");
playerLevelSystem.exploreNewArea("ruins");
playerLevelSystem.completeMilestone("advanced");

console.log("当前等级：" + playerLevelSystem.getLevel());
console.log("当前经验：" + playerLevelSystem.getExperience());
console.log("距离下一等级所需经验：" + playerLevelSystem.getExperienceToNextLevel());
*/