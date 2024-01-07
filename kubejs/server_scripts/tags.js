onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
	event.add('kubejs:dragonsadventure_gold', [
		'kubejs:ordin_gold_block',
		'kubejs:great_gold_block',
		'kubejs:ultra_gold_block',
		'kubejs:legend_gold_block',
		'kubejs:myth_gold_block'
	])

	event.add('kubejs:dragonsadventure_foods', [
		'kubejs:eat_ender_eye',
		'kubejs:eat_ender_pearl'
	])

	event.add('kubejs:dragonsadventure_cmdb', [
		"minecraft:command_block",
		"minecraft:chain_command_block",
		"minecraft:repeating_command_block"
	])

	event.add('kubejs:op_create_block', [
		'minecraft:bedrock',
		'minecraft:command_block',
		'minecraft:chain_command_block',
		'minecraft:repeating_command_block',
		'minecraft:structure_block',
		'minecraft:structure_void',
		'minecraft:barrier',
		'minecraft:jigsaw'
	])
	
	event.add('kubejs:dragon_scale', [
		'quark:dragon_scale',
		'iceandfire:dragonscales_red',
		'iceandfire:dragonscales_green',
		'iceandfire:dragonscales_bronze',
		'iceandfire:dragonscales_gray',
		'iceandfire:dragonscales_blue',
		'iceandfire:dragonscales_white',
		'iceandfire:dragonscales_sapphire',
		'iceandfire:dragonscales_silver',
		'iceandfire:dragonscales_electric',
		'iceandfire:dragonscales_amythest',
		'iceandfire:dragonscales_copper',
		'iceandfire:dragonscales_black'
	])
})