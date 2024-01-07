//可食用的雪球
onEvent('item.registry', event => {
	event.create('eat_snowball').maxStackSize(64).food((food) => {
		food.hunger(3)
			.saturation(3)
			.effect('minecraft:luck', 600, 4, 1)
			.effect('minecraft:hunger', 25, 0, 0.4)
			.displayName('')
		food.eaten(sno => {
			sno.player.tell([Text.white(`${sno.item.id} 味道有点差,不怎么好吃,还冰凉的`)])
		})
	})
})
//可食用的粘液球
onEvent('item.registry', event => {
	event.create('eat_slime_ball').maxStackSize(64).food((food) => {
		food.hunger(5)
			.saturation(5)
			.effect('minecraft:jump_boost', 600, 4, 1)
			.effect('minecraft:nausea', 30, 2, 0.6)
			.effect('minecraft:saturation', 5, 9, 0.2)
			.displayName('')
		food.eaten(smi => {
			smi.player.tell([Text.green(`${smi.item.id} 吃起来有点恶心！`)])
		})
	})
})
//可食用的岩浆膏
onEvent('item.registry', event => {
	event.create('eat_magma_cream').maxStackSize(64).food((food) => {
		food.hunger(7)
			.saturation(7)
			.effect('minecraft:fire_resistance', 600, 4, 1)
			.effect('dragonsurvival:wings_forest', 600, 4, 0.25)
			.effect('minecraft:slow_falling', 600, 5, 0.5)
			.effect('minecraft:instant_damage', 10, 0, 0.1)
			.displayName('')
		food.eaten(mag => {
			mag.player.tell([Text.aqua(`${mag.item.id} 味道好像不太好。`)])
		})
	})
})

//可食用的末影珍珠
onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	//event.create('test_item').displayName('item.kubejs.test_item.name')

	event.create('eat_ender_pearl').maxStackSize(64).food((food) => {
		food.hunger(10)
			.saturation(10)
			.effect('dragonsurvival:lava_vision', 600, 1, 1)
			.effect('dragonsurvival:wings_cave', 600, 2, 0.4)
			.effect('minecraft:glowing', 60, 0, 0.5)
			.fastToEat()
			.meat()
			.displayName('')
		food.eaten(ctx => {
			ctx.player.tell([Text.lightPurple(`${ctx.item.id} 真好吃~`)])
		})
	})
})
//可食用的末影之眼
onEvent('item.registry', event => {
	event.create('eat_ender_eye').maxStackSize(64).food((food) => {
		food.hunger(8)
			.saturation(8)
			.effect('minecraft:speed', 600, 2, 1)
			.effect('minecraft:resistance', 600, 2, 0.5)
			.effect('minecraft:saturation', 10, 5, 0.25)
			.effect('minecraft:glowing', 60, 0, 0.5)
			.displayName('')
		food.eaten(tyx => {
			tyx.player.addXP(500)
			tyx.player.tell([Text.gold(`${tyx.item.id} 味道还不错~`)])
		})
	})
})
//可食用的海洋之心
onEvent('item.registry', event => {
	event.create('eat_heart_of_the_sea').maxStackSize(64).food((food) => {
		food.hunger(10)
			.saturation(10)
			.effect('minecraft:night_vision', 600, 2, 1)
			.effect('minecraft:water_breathing', 600, 2, 1)
			.effect('dragonsurvival:wings_sea', 600, 4, 0.25)
			.effect('dragonsurvival:water_vision', 600, 4, 0.25)
			.effect('minecraft:saturation', 30, 9, 0.25)
			.effect('minecraft:glowing', 60, 0, 0.5)
			.displayName('')
		food.eaten(tyz => {
			tyz.player.addXPLevels(5)
			tyz.player.tell([Text.red(`${tyz.item.id} 味道还不错~`)])
		})
	})
})
//可食用的火狐浏览
onEvent('item.registry', event => {
	event.create('huohui_food').maxStackSize(64).food((food) => {
		food.hunger(3)
			.saturation(3)
			.effect('minecraft:speed', 600, 4, 1)
			.effect('minecraft:invisibility', 200, 4, 0.5)
			.effect('minecraft:fire_resistance', 600, 4, 0.2)
			.effect('minecraft:poison', 300, 0, 0.3)
			.displayName('')
		food.eaten(msg => {
			msg.player.tell([Text.blue(`${msg.item.id} 貌似不太好吃`)])
		})
	})
})
//可食用的火绒安全
onEvent('item.registry', event => {
	event.create('huorong_food').maxStackSize(64).food((food) => {
		food.hunger(3)
			.saturation(3)
			.effect('minecraft:resistance', 600, 4, 1)
			.effect('minecraft:fire_resistance', 600, 4, 1)
			.effect('minecraft:regeneration', 30, 9, 0.2)
			.effect('minecraft:blindness', 30, 0, 0.1)
			.displayName('')
		food.eaten(msg => {
			msg.player.tell([Text.darkBlue(`${msg.item.id} 也不太好吃。`)])
		})
	})
})



//介绍部分(普通物品)
onEvent('item.tooltip', tooltip => {
	//可食用的雪球
	tooltip.add('kubejs:eat_snowball', [
		[Text.white('[食物功能]')],
		[Text.green('+100%获取幸运Ⅴ')],
		[Text.red('+40%获取饥饿Ⅰ')],
		[Text.green('+6饥饿值')],
		[Text.green('+6饱和度')],
		[Text.white('食物品级 '), Text.white('普通')]
	])
	//可食用的粘液球
	tooltip.add('kubejs:eat_slime_ball', [
		[Text.white('[食物功能]')],
		[Text.green('+100%获取跳跃提升Ⅴ')],
		[Text.green('+20%概率获取饱和Ⅲ')],
		[Text.red('+60%概率产生反胃Ⅹ')],
		[Text.green('+10饥饿值')],
		[Text.green('+10饱和度')],
		[Text.white('食物品级 '), Text.green('稀有')]
	])
	//可食用的岩浆膏
	tooltip.add('kubejs:eat_magma_cream', [
		[Text.white('[食物功能]')],
		[Text.green('+100%获得火焰抗性Ⅴ')],
		[Text.green('+25%概率获取丛林翅膀Ⅴ')],
		[Text.green('+50%概率获取缓降Ⅵ')],
		[Text.red('+10%概率受到伤害Ⅰ')],
		[Text.green('+14饥饿值')],
		[Text.green('+14饱和度')],
		[Text.white('食物品级 '), Text.aqua('罕见')]
	])
	//可食用的末影之眼
	tooltip.add('kubejs:eat_ender_eye', [
		["[食物功能]"],
		["§a+100%获取速度Ⅲ"],
		["§a+50%概率获取抗性提升Ⅲ"],
		["§a+25%概率获取饱和Ⅵ"],
		["§a+50%概率获取发光Ⅰ"],
		["§a+16饱和度"],
		["§a+16饥饿值"],
		["§a+500经验值"],
		["食物品级 §5史诗"]
	])
	//可食用的末影珍珠
	tooltip.add('kubejs:eat_ender_pearl', [
		["[食物功能]"],
		["§a+100%获取岩浆夜视Ⅱ"],
		["§a+40%概率获取洞穴翅膀Ⅲ",],
		["§a+50%概率获取发光Ⅰ"],
		["§a+20饱和度"],
		["§a+20饥饿值"],
		["食物品级 §6传奇"]
	])
	//可食用的海洋之心
	tooltip.add('kubejs:eat_heart_of_the_sea', [
		["[食物功能]"],
		["§a+100%获取夜视Ⅲ"],
		["§a+100%概率水下呼吸Ⅲ"],
		["§a+25%概率获取饱和Ⅴ"],
		["§a+25%概率获得海洋翅膀Ⅴ"],
		["§a+25%概率获得海洋夜视Ⅹ"],
		["§a+50%概率获取发光Ⅰ"],
		["§a+20饱和度"],
		["§a+20饥饿值"],
		["§a+5级经验值"],
		["食物品级 §c神话"]
	])
	//火狐浏览
	tooltip.add('kubejs:huohui_food', [
		[Text.white('[食物功能]')],
		[Text.green('+100%获取速度Ⅴ')],
		[Text.green('+50%获取隐身Ⅴ')],
		[Text.green('+20%获取火焰抗性Ⅴ')],
		[Text.red('+30%获取中毒Ⅰ')],
		[Text.green('+6饥饿值')],
		[Text.green('+6饱和度')],
		[Text.white('食物品级 '), Text.aqua('罕见')]
	])
	//火绒安全
	tooltip.add('kubejs:huorong_food', [
		[Text.white('[食物功能]')],
		[Text.green('+100%获取抗性提升Ⅴ')],
		[Text.green('+50%获取火焰抗性Ⅴ')],
		[Text.green('+20%获取生命恢复Ⅹ')],
		[Text.red('+10%获取失明Ⅰ')],
		[Text.green('+6饥饿值')],
		[Text.green('+6饱和度')],
		[Text.white('食物品级 '), Text.lightPurple('史诗')]
	])
})

//介绍部分(方块物品)
onEvent('item.tooltip', tooltip => {
	tooltip.add('minecraft:gold_block', [
		[Text.white('[方块功能]')],
		[Text.green('就是很普通很普通的金块')],
		[Text.yellow('合成材料')],
		[Text.white('方块品质 普通')]
	])
	tooltip.add('kubejs:ordin_gold_block', [
		[Text.white('[方块功能]')],
		[Text.green('比普通金块的质量更好一些的一级材料')],
		[Text.yellow('分类 '), Text.green('合成材料')],
		[Text.white('方块品质 '), Text.green('稀有')]
	])
	tooltip.add('kubejs:great_gold_block', [
		[Text.white('[方块功能]')],
		[Text.green('比一级材料质量更好的二级材料')],
		[Text.yellow('分类 '), Text.green('合成材料')],
		[Text.white('方块品质 '), Text.aqua('罕见')]
	])
	tooltip.add('kubejs:ultra_gold_block', [
		[Text.white('[方块功能]')],
		[Text.green('比二级材料质量更好一些的三级材料')],
		[Text.yellow('分类 '), Text.green('合成材料')],
		[Text.white('方块品质 '), Text.lightPurple('史诗')]
	])
	tooltip.add('kubejs:legend_gold_block', [
		[Text.white('[方块功能]')],
		[Text.green('比三级材料质量更好的四级材料')],
		[Text.yellow('分类 '), Text.green('合成材料')],
		[Text.white('方块品质 '), Text.gold('传说')]
	])
	tooltip.add('kubejs:myth_gold_block', [
		[Text.white('[方块功能]')],
		[Text.green('比四级材料质量更好的五级材料')],
		[Text.yellow('分类 '), Text.green('合成材料')],
		[Text.white('方块品质 '), Text.red('神话')]
	])
	tooltip.add('kubejs:huorong_block', [
		[Text.white('[方块功能]')],
		[Text.green('一种坚硬的建筑材料')],
		[Text.yellow('分类 '), Text.green('建筑材料')],
		[Text.white('方块品质 '), Text.gold('传说')]
	])
	tooltip.add('kubejs:huohui_block', [
		[Text.white('[方块功能]')],
		[Text.green('没有火绒安全的材料坚硬')],
		[Text.yellow('分类 '), Text.green('建筑材料')],
		[Text.white('方块品质 '), Text.lightPurple('史诗')]
	])
})