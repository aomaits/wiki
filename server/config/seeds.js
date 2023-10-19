const db = require('./connection');
const { Character, Item, Location } = require('../models');

db.once('open', async () => {
    //delete all pre-existing villagers
    await Character.deleteMany();

    const characters = await Character.insertMany([
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
            name: "Isla Silentstep",
            nickname: "Isla",
            race: "Wood Elf",
            gender: "female",
            age: 50,
            height: "5 feet, 1 inch",
            weight: "115 lbs.",
            description: "Isla was captured from her home in the Old Forest and sold into slavery. She's trying to find a way back home, and learning a lot about the larger world along the way. She likes plants and animals. Plants and animals like her. They've got a good thing going.",
            alignment: "Neutral Good",
        },
        {
            name: "O'Rik",
            nickname: "",
            race: "",
            gender: "male",
            age: 131,
            height: "5 feet, 7 inches",
            weight: "185 lbs.",
            description: "As his name implies, Ike of the Forsaken was cast out of the brotherhood of secret assassin monks he once served. He now seeks to regain his status and return to service of the brotherhood of Heiadorry through acts of atonement.",
            alignment: "Chaotic Good",
        },
        {
            name: "Yen",
            nickname: "",
            race: "",
            gender: "male",
            age: 131,
            height: "5 feet, 7 inches",
            weight: "185 lbs.",
            description: "As his name implies, Ike of the Forsaken was cast out of the brotherhood of secret assassin monks he once served. He now seeks to regain his status and return to service of the brotherhood of Heiadorry through acts of atonement.",
            alignment: "Chaotic Good",
        },
        {
            name: "Bex",
            nickname: "N/A",
            race: "human",
            gender: "male",
            age: 53,
            height: "5 feet, 9 inches",
            weight: "195 lbs.",
            description: "Bex is a cart driver who hauled goods from the port city of Paetha up to the capital of Endorayn, Caerwyn. His most terrifying adventures occurred when he was accompanied by five enslaved adventurers on the Merchant's Way up to Gruhnhal.",
            alignment: "Neutral Good",
        },
    ]);

    console.log('Villagers seeded');

    //delete all pre-existing comments
    await Comment.deleteMany();

    const comments = await Comment.create([
        {
            body: "I got you!",
            authorId: villagers[1]._id,
            // requestId: request[0]._id,
        }
    ])

    console.log('Comments seeded');
    
        //delete all pre-existing requests
        await Request.deleteMany();
    
        const request = await Request.create([
            {
                title: "Carpool Request - Tuesday",
                body: "I need someone to drop Kevin and Sara off at school on Tuesday",
                crayons: 2,
                authorId: villagers[0]._id,
                isComplete: false,
                isClaimed: true,
                comments: comments[0]._id,
                response: {
                    claimId: villagers[1]._id,
                }
            },
            {
                title: "Carpool Request - Wednesday",
                body: "I need someone to drop Kevin and Sara off at school on Tuesday",
                crayons: 4,
                authorId: villagers[1]._id,
                isComplete: false,
                isClaimed: true,
                comments: comments[0]._id,
                response: {
                    claimId: villagers[0]._id,
                }
            }
        ])
    
        console.log('Request seeded');

    //delete all pre-existing villages
    await Village.deleteMany();

    const village = await Village.create([
        {
            name: "Big Village",
            zipcode: "44608",
            admin:
                villagers[0]._id,
            // villagers:
            //     [
            //         villagers[0]._id,
            //         villagers[1]._id,
            //     ],
            requests:
                [
                    request[0]._id
                ]
        }
    ]);

    console.log('Village seeded');

    console.log('Seeds Completed!!');
    process.exit();
});