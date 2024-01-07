// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true


onEvent('recipes', event => { // 监听recipes事件
        // 主体修改内容
        //可食用的雪球
     event.shaped('kubejs:eat_snowball', [
        'SSS',
        'SBS',
        'SSS'
     ], {
        S: 'create:wheat_flour',
        B: 'minecraft:snowball'
    }).id('dragonsadventure:food_snowball')
    //可食用的粘液球
    event.shaped('kubejs:eat_slime_ball', [
        'SSS',
        'SBS',
        'SSS'
     ], {
        S: 'create:wheat_flour',
        B: 'minecraft:slime_ball'
    }).id('dragonsadventure:food_slime_ball')
    //可食用的岩浆膏
    event.shaped('kubejs:eat_magma_cream', [
        'SSS',
        'SBS',
        'SSS'
     ], {
        S: 'create:wheat_flour',
        B: 'minecraft:magma_cream'
    }).id('dragonsadventure:food_magma_cream')
    //火狐浏览方块(无序)
    event.shapeless('kubejs:huohui_block',['kubejs:huohui_food','kubejs:huohui_food','kubejs:huohui_food','kubejs:huohui_food']).id('dragonsadventure:food_huohui')
    //火绒安全方块(无序)
    event.shapeless('kubejs:huorong_block',['kubejs:huorong_food','kubejs:huorong_food','kubejs:huorong_food','kubejs:huorong_food']).id('dragonsadventure:food_huorong')
    //龙息
    event.recipes.minecraft.crafting_shapeless('minecraft:dragon_breath', ['#kubejs:dragon_scale','minecraft:glass_bottle']).id('dragonsadventure:item_dragon_breath')
//有序配方
event.shaped('kubejs:huorong_block', [
        'SSS',
        'SSS',
        'SSS'
     ], {
        S: 'kubejs:huorong_food'
    }).id('dragonsadventure:build_houron_block')
    
    event.shaped('kubejs:huohui_block', [
        'SSS',
        'SSS',
        'SSS'
     ], {
        S: 'kubejs:huohui_food'
    }).id('dragonsadventure:build_huohui_block')
    
    
    //其他配方
    event.smithing('minecraft:golden_apple', 'minecraft:apple', 'minecraft:gold_ingot').id('dragonsadventure:item_golden_apple')
    
    event.smithing('kubejs:ordin_gold_block', 'minecraft:gold_block', 'minecraft:gold_ingot').id('dragonsadventure:build_ordin_gold_block')
    
    event.smithing('kubejs:great_gold_block', 'kubejs:ordin_gold_block', 'minecraft:gold_block').id('dragonsadventure:build_great_gold_block')
    
    event.smithing('kubejs:ultra_gold_block', 'kubejs:great_gold_block', 'kubejs:ordin_gold_block').id('dragonsadventure:build_ultra_gold_block')
    
    event.smithing('minecraft:enchanted_golden_apple', 'minecraft:golden_apple', 'kubejs:ultra_gold_block').id('dragonsadventure:food_enchanted_golden_apple')
})