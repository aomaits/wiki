const db = require('./connection');
const { Characters, Items, Locations } = require('../models');

db.once('open', async () => {
    //delete all pre-existing characters
    await Characters.deleteMany();

    const characters = await Characters.insertMany([
        {
            name: "Ike Golandish",
            nickname: "Ike of the Forsaken",
            race: "Wood Elf",
            gender: "male",
            age: 131,
            height: "5 feet, 7 inches",
            weight: "185 lbs.",
            description: "As his name implies, Ike of the Forsaken was cast out of the brotherhood of secret assassin monks he once served. He now seeks to regain his status and return to service of the brotherhood of Heiadorry through acts of atonement.",
            alignment: "Chaotic Good",
        },
        {
            name: "Gerard",
            nickname: "Vassemar?",
            race: "Human (variant)",
            gender: "male",
            age: 80,
            height: "6'0",
            weight: "200 lbs.",
            description: "Gerard's shockingly white hair would lead you to believe he's fairly old for a human, and you'd be right...except that he's not exactly human. Gerard doesn't remember much of his past and is out to find out who he is and where he came from. Oh, and it turns out he's exceptionally adept at killing monsters, so maybe some of that along the way",
            alignment: "Lawful Neutral",
        },
        {
            name: "Isla Alaerys",
            nickname: "Isla",
            race: "Wood Elf",
            gender: "female",
            age: 50,
            height: "5 feet, 1 inch",
            weight: "115 lbs.",
            description: "Isla was captured from her home in the Old Forest and sold into slavery. She's trying to find a way back home, and learning a lot about the larger world along the way. She likes plants and animals, and plants and animals like her. They've got a good thing going.",
            alignment: "Neutral Good",
        },
        {
            name: "O'Rik of the Chak'te",
            nickname: "O'Rik",
            race: "Half-Orc",
            gender: "male",
            age: 20,
            height: "6 feet, 4 inches",
            weight: "260 lbs.",
            description: "O'Rik has two objectives right now. The first is freeing himself from slavery, but that's mostly out of necessity. His second and primary goal: revenge. Jealous chief Ju'dic of the Chak'te had his mother burned at the pyre, and O'Rik has vowed to pay back the coward in full.",
            alignment: "Chaotic Neutral",
        },
        {
            name: "Yennika Haivell",
            nickname: "Yen",
            race: "half-elf",
            gender: "female",
            age: 27,
            height: "5 feet, 6 inches",
            weight: "180 lbs.",
            description: "Yen has spent her whole life being cast out, ignored, or avoided. Could it possibly be that this lifelong mistreatment at the hands of others potentially contributed to her sarcastic and sharp demeanor? Maybe?",
            alignment: "Chaotic Good",
        },
        {
            name: "Bexival Underbuckles",
            nickname: "Bex",
            race: "human",
            gender: "male",
            age: 53,
            height: "5 feet, 9 inches",
            weight: "195 lbs.",
            description: "Bex is a cart driver who hauled goods from the port city of Paetha up to the capital of Endorayn, Caerwyn. His most terrifying adventures occurred when he was accompanied by five enslaved adventurers on the Merchant's Way up to Gruhnhal.",
            alignment: "Neutral Good",
        },
    ]);

    console.log('Characters seeded');

    //delete all pre-existing Items
    await Items.deleteMany();

    const items = await Items.insertMany([
        {
            name: "Scroll of Sword Defense",
            description: "After studying the scroll, the user will be able to use their sword to defend themselves or an ally once per day.",
            characterId: characters[1]._id,
        },
        {
            name: "The Passion and the Promise",
            description: "Disguised as a saucy romance novel, the inner drawings of this book explain to the weilder how to warp themselves or allies to a new location every few days.",
            characterId: characters[0]._id,
        },
        {
            name: "Fleeter Feet Moccasins",
            description: "The user can dash or disengage three times per day as a bonus action. So fast!",
            characterId: characters[2]._id,
        },
        {
            name: "Skull Ring",
            description: "This necromantic skull ring can be used to transfer power from the character attacked to its weilder after a successful strike.",
            characterId: characters[3]._id,
        },
        {
            name: "Sacrificial Lamb",
            description: "A small wooden carving of a winged lamb that can come to life. It then becomes a loudly buzzing miniature lamb that bleats constantly. It's annoying and not at all quiet, but it can soak up any damage intended for the wearer of the necklace.",
            characterId: characters[4]._id,
        }
    ])

    console.log('Items seeded');
    
        //delete all pre-existing locations
        await Locations.deleteMany();
    
        const locations = await Locations.insertMany([
            {
                name: "Og's Hole",
                description: "A small settlement in Endorayn. There's not much in this small town except for the Inn called 'The Silly Elf'. The adventurers came across some dwarf teens playing a prank and, less humorously, some Grimlocks.",
                type: "Settlement",
            },
            {
                name: "Gruhnhal",
                description: "Though it's the largest village along the Merchant's Way between Paetha and Caerwyn, it's still a fairly small village. And according to the townsfolk, it's getting smaller every season...",
                type: "Village",
            },
            {
                name: "Muirlaenyra",
                description: "A well-hidden elven settlement in the heart of the forest of Endorayn. Outsiders don't know of its existence- for safety reasons. The adventurers were surprised to have been invited in to speak with the council, but still more questions remain.",
                type: "Village",
            },
        ])
    
        console.log('Locations seeded');

    console.log('Seeding Complete!!');
    process.exit();
});