// 监听玩家登录事件 player.logged_in
onEvent('player.logged_in', event => {
  // 检测玩家是否有starting_items阶段
  if (!event.player.stages.has('starting_items') && event.player.op) {
    // 没有则添加该阶段
    event.player.stages.add('starting_items')
    // 给予op玩家初始物品
    event.player.give('minecraft:command_block')
    event.player.give('minecraft:chain_command_block')
    event.player.give('minecraft:repeating_command_block')
    event.player.give('#kubejs:op_create_block')
    event.player.tell([Text.green('§l§f[Server/INFO]§a检测到您是op玩家,所以可以获取op物品')])
    event.player.stages.add('on')
    /*
    event.player.runCommand('scoreboard objectives add vip dummy')
    event.player.runCommand('scoreboard objectives add svip dummy')
    event.player.runCommand('scoreboard objectives add gold dummy')*/
  }
  if (event.player.op && event.player.stages.has('on')) {
    event.server.runCommand('tellraw @a [{"text":"[Server/INFO]§a§l管理员升阶提醒,恭喜","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false},{"selector":"@p","bold":true,"color":"yellow"},{"text":"成功进阶为管理员！","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"green"}]')
    event.player.tell([Text.green('§l§f[Server/INFO]'), "§l§e可以使用!reload或者!remove进行简单的移除和加载操作"])
    event.player.tell([Text.green('§l§f[Server/INFO]'), "§l§e可以使用/info的help部分获取详细的指令格式"])
  } else {
    event.server.runCommand('tellraw @a [{"text":"[Server/INFO]§a§l管理员降阶提醒,","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false},{"selector":"@p","bold":true,"color":"yellow"},{"text":"已降阶为成员","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"color":"gold"}]')
  }
  if (!event.player.stages.has('starting_text') && event.player.op) {
    event.player.stages.add('starting_text')
    event.player.tell([Text.green('===============介绍===============').bold()]);
    event.player.tell([Text.green('龙的冒险：永恒机械·重铸2.0整合包').bold()]);
    event.server.runCommandSilent('tellraw @p [{"text":"§a§l尊敬的冒险家","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false},{"selector":"@p","bold":true,"color":"yellow"},{"text":"§a§l先生,"}]');
    event.player.tell([Text.green('在这个充满龙的世界中,玩家可以选择当龙骑士耀武扬威,\n也可以选择化身为龙,体验龙的生活,\n玩家还可以选择发展科技实现自动化工厂,\n还能以枪为武器,大战巨龙,成为猎龙人,\n这是一个未知的世界,在这个世界,活下去吧！').bold()]);
    event.server.runCommandSilent('tellraw @a [{"text":"§a§lV2.0.3 Powered by ","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false},{"text":"§a§lRedstone233","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false,"clickEvent":{"action":"open_url","value":"https://redstone2337200.github.io/"},"hoverEvent":{"action":"show_text","value":"Click here to enter."}}]');
    event.player.tell([Text.green('Copyright ©2024 Felongkeji™.').bold()]);
    event.player.tell([Text.green('===============介绍===============').bold()]);
  }
  if (event.player.op && !event.player.stages.has('common')) {
    event.player.stages.add('rankexample')
    event.player.stages.remove('common')
  } else {
    event.player.stages.remove('rankexample')
    event.player.stages.add('common')
  }
})

//监听聊天栏信息
// 物品白名单
const whitelist = Ingredient.matchAny([
  'minecraft:diamond', //单个物品
  'minecraft:gold_ingot',//单个物品
  'minecraft:iron_ingot',
  //'@tinkersconstruct', //mod物品示例
  'minecraft:emerald'
])
// 执行一次间隔（注：该值必须大于1)
const minutes = 30;

// ======================================

var lastResult = [];
var totalResult = [];
var lastItemCount = 0;
var totalItemCount = 0;


function clearLag(server) {
  lastResult = [];
  lastItemCount = 0;
  server.getEntities("@e[type=item]").forEach(entity => {
    if (!whitelist.test(entity.item.id)) {
      lastResult.push([entity.item.id, entity.item.count]);
      totalResult.push([entity.item.id, entity.item.count]);
      lastItemCount += entity.item.count;
      entity.kill();
    }
  });
  lastResult.sort();
  totalResult.sort();
  server.tell([Text.lightPurple('[扫地机器人]'), `本次共清除 ${lastItemCount} 个物品`]);
  server.tell([Text.lightPurple('[扫地机器人]'), "在聊天框中输入 !clearLag last  来获取本次详细信息"]);
  server.tell([Text.lightPurple('[扫地机器人]'), "在聊天框中输入 !clearLag total 来获取全部详细信息"]);
}

function countResult(result, event) {
  if (result != []) {
    result.forEach((singleResult, index) => {
      event.server.tell([Text.lightPurple(`第 ${index + 1} 项 `), `${singleResult[0]} , 个数为 ${singleResult[1]}`])
    })
  }
}

onEvent('server.load', function (event) {
  event.server.scheduleInTicks(100, event.server, function (callback0) {
    callback0.data.tell([Text.lightPurple('[扫地机器人]'), `加载成功,使用 !clearlag help 查看帮助`]);
  })
  event.server.schedule((minutes - 1) * MINUTE, event.server, function (callback1) {
    callback1.data.tell([Text.lightPurple('[扫地机器人]'), "1分钟后将清理地面掉落物"]);
    callback1.data.schedule(MINUTE, callback1.data, function (callback2) {
      clearLag(callback2.data);
    })
    callback1.reschedule();
  })
})

// 聊天事件,只有有OP权限的文件才能执行查询/扫地
onEvent('player.chat', function (event) {
  let input = event.message.trim();
  switch (input) {
    case "!clearlag last":
      if (event.player.op) {// 判断玩家权限
        countResult(lastResult, event);
      } else {
        event.player.tell([Text.lightPurple('[扫地机器人]'), "你没有权限这样做"]);
      }
      break;
    case "!clearlag total":
      if (event.player.op) {
        countResult(totalResult, event);
      } else {
        event.player.tell([Text.lightPurple('[扫地机器人]'), "你没有权限这样做"]);
      }
      break;
    case "!clearlag help":
      event.player.tell([Text.lightPurple('[扫地机器人]'), "扫地机器人 by Wudji@mcbbbs.net. Powered by KubeJS"]);
      event.player.tell([Text.lightPurple('[扫地机器人]'), "在聊天框中输入 !clearLag last  来获取本次详细信息"]);
      event.player.tell([Text.lightPurple('[扫地机器人]'), "在聊天框中输入 !clearLag total 来获取全部详细信息"]);
      event.player.tell([Text.lightPurple('[扫地机器人]'), "在聊天框中输入 !clearLag 立即清除掉落物"]);
      break;
    case "!clearlag":
      if (event.player.op) {
        clearLag(event.server);
      } else {
        event.player.tell([Text.lightPurple('[扫地机器人]'), "你没有权限这样做"]);
      }
      break;
  }
})


onEvent('player.chat', function (event) {
  let input = event.message.trim();//获取聊天信息
  if (event.player.stages.has("rankexample") && event.player.op) {
    //event.server.tell([Text.blue('[MVP++]').bold(), "<" + `${event.player.name}` + ">" + `${input}`]);
    event.server.runCommandSilent(`tellraw @a [{"text":"§l§b[MVP++]","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false},{"selector":"@p"},{"text":"§f>> ${input}","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false}]`);
    event.cancel();
  } else {
    //event.server.tell([Text.white('[普通玩家++]'), "<" + `${event.player.name}` + ">" + `${input}`]);
    event.server.runCommandSilent(`tellraw @a [{"text":"§l[普通玩家++]","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false},{"selector":"@p"},{"text":"§f>> ${input}","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false}]`);
    event.cancel();
  }
  if (event.player.stages.has("common") && !event.player.op) {
    //event.server.tell([Text.green('[VIP++]').bold(), "<" + `${event.player.name}` + ">" + `${input}`])
    event.server.runCommandSilent(`tellraw @a [{"text":"§l§a[VIP++]","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false},{"selector":"@p"},{"text":"§f>> ${input}","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false}]`);
    event.cancel();
  }

  //其他方式
  /*
  event.server.runCommandSilent(`execute as @a[scores={vip=1..,svip=0}] at @s run tellraw @a [{"text":"§l§a[VIP++]","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false},{"selector":"@s"},{"text":"§f>> ${input}","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false}]`);
  event.server.runCommandSilent(`execute as @a[scores={vip=0,svip=1..}] at @s run tellraw @a [{"text":"§l§b[MVP++]","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false},{"selector":"@s"},{"text":"§f>> ${input}","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false}]`);
  event.server.runCommandSilent(`execute as @a[scores={vip=0,svip=0}] at @s run tellraw @a [{"text":"§l§f[普通玩家++]","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false},{"selector":"@s"},{"text":"§f>> ${input}","bold":true,"italic":false,"underlined":false,"strikethrough":false,"obfuscated":false}]`);*/
})

onEvent('player.chat', function (event) {
  let input = event.message.trim();//获取聊天信息
  let id = event.player;
  if (event.player.stages.has("rankexample") && event.player.op) {
    event.server.tell([Text.gold('[MVP+]').bold(), Text.darkPurple(`${id}`).bold(), Text.aqua('>>').bold(), Text.gold(`${input}`).bold()]);
    event.cancel();
  } else {
    event.server.tell([Text.green('[普通玩家+]').bold(), Text.white(`${id}`).bold(), Text.green('>>').bold(), Text.white(`${input}`).bold()]);
    event.cancel();
  }
  if (event.player.stages.has('common') && event.player.op) {
    event.server.tell([Text.aqua('[VIP+]').bold(), Text.green(`${id}`).bold(), Text.white('>>').bold(), Text.blue(`${input}`).bold()]);
    event.cancel();
  } else {
    event.server.tell([Text.green('[普通玩家+]').bold(), Text.white(`${id}`).bold(), Text.green('>>').bold(), Text.white(`${input}`).bold()]);
    event.cancel();
  }
})

onEvent('player.chat', function (event) {
  // 检测如果聊天内容为“kubejs教程” 执行命令, 忽略大小写
  if (event.message.trim().equalsIgnoreCase('Test')) {
    // 将事件推迟1刻，否则服务器信息将会显示在玩家信息之前
    event.server.scheduleInTicks(1, event.server, function (callback) {
      // 对每个人说以下内容，颜色为绿色。聊天信息为[Server]
      callback.data.tell(text.green('这里是测试信息'))
      // 下面这个设置了聊天信息为红色的[Test]
      callback.data.tell([Text.red('[TestFunc]'), text.green('这里是测试信息')])
    })
  }
})

onEvent('player.chat', function (event) {
  let input = event.message.trim();
  switch (input) {
    case "!reload":
      if (event.player.op && !event.player.stages.has('starting_items')) {
        event.player.give('kubejs:eat_ender_pearl')
        event.player.give('kubejs:eat_ender_eye')
        event.player.tell([Text.aqua('获取成功!')])
      } else {
        event.player.tell([Text.red('获取失败!')])
      }
      break;
    case "!remove":
      if (event.player.stages.has('starting_items')) {
        event.player.stages.remove('starting_items')
        event.player.tell([Text.green('删除starting_items标签成功!')])
      } else {
        event.player.tell([Text.red('删除失败！没有标签或不存在这个标签')])
      }
      if (event.player.stages.has('starting_text')) {
        event.player.stages.remove('starting_text')
        event.player.tell([Text.green('删除starting_text标签成功！')])
      }
      break;
    default:
      break;
  }
})

