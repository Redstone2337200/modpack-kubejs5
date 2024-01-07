onEvent('ponder.tag', event => {
//龙炎锻炉
    event.createTag('kubejs:dragonforge_fire_make','iceandfire:dragonforge_fire_core_disabled',"龙炎锻炉","如何制作一个龙炎锻炉", [
        "iceandfire:dragonforge_fire_brick",
        "iceandfire:dragon_bone_block",
        "iceandfire:dragonforge_fire_core_disabled",
        "iceandfire:dragonforge_fire_input"
    ]);
    //龙霜锻炉
    event.createTag('kubejs:dragonforge_ice_make','iceandfire:dragonforge_ice_core_disabled',"龙霜锻炉","如何制作一个龙霜锻炉", [
        "iceandfire:dragonforge_ice_brick",
        "iceandfire:dragon_bone_block",
        "iceandfire:dragonforge_ice_core_disabled",
        "iceandfire:dragonforge_ice_input"
    ]);
    //龙霆锻炉
    event.createTag('kubejs:dragonforge_lightning_make','iceandfire:dragonforge_lightning_core_disabled',"龙霆锻炉","如何制作一个龙霆锻炉", [
        "iceandfire:dragonforge_lightning_brick",
        "iceandfire:dragon_bone_block",
        "iceandfire:dragonforge_lightning_core_disabled",
        "iceandfire:dragonforge_lightning_input"
    ]);
});