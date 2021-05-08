const mongoose = require('mongoose');
const Product = require('./models/product');


const products = [
    {
        name: 'Iphone 12',
        img: 'https://images.unsplash.com/photo-1604671748253-e683240e7efa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
        price: 100000,
        desc: 'The iPhone 12 and iPhone 12 Mini (stylized as iPhone 12 mini) are smartphones designed, developed, and marketed by Apple Inc. They are the fourteenth-generation, lower-priced iPhones, succeeding the iPhone 11. They were unveiled at a virtually held Apple Special Event at Apple Park in Cupertino, California on October 13, 2020, alongside the higher-end iPhone 12 Pro and iPhone 12 Pro Max flagships. Pre-orders for the iPhone 12 started on October 16, 2020, and the phone became available in most countries on October 23, 2020.'
    },
    {
        name: 'Macbook Air',
        img: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hY2Jvb2slMjBhaXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 120000,
        desc: 'The MacBook is a brand of Macintosh laptop computers designed and marketed by Apple Inc. that use Apple macOS operating system since 2006. It replaced the PowerBook and iBook brands during the Mac transition to Intel processors, announced in 2005. The current lineup consists of the MacBook Air (2008–present) and the MacBook Pro (2006–present). Two different lines simply named "MacBook" existed from 2006 to 2012 and 2015 to 2019.',
    },
    {
        name: 'Rolex Watch',
        img: 'https://images.unsplash.com/photo-1605101232508-283d0cd4909e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9sZXh8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 280000,
        desc: 'Rolex SA (/ˈroʊlɛks/) is a luxury watch manufacturer based in Geneva, Switzerland.[3] Originally founded as Wilsdorf and Davis by Hans Wilsdorf and Alfred Davis in London, England in 1905, the company registered Rolex as the brand name of its watches in 1908, and became Rolex Watch Co. Ltd. in 1915.[4][5][6][7] After World War I, the company moved its base of operations to Geneva due to the unfavorable economic situation in the post-war United Kingdom, and in 1920, Hans Wilsdorf registered Montres Rolex SA in Geneva as the new company name, which eventually became Rolex SA in later years.[3][5][8][9] Since 1960, the company has been owned by the Hans Wilsdorf Foundation, a private family trust.[6][10][11]',
    },
    {
        name: 'Drone v-5',
        img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZHJvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 95000,
        desc:'DJI camera drones contain the best drone technology for every type of user and shooting scenario. If you are looking for a beginner drone, professional drone, or simply want to upgrade to the latest technology, it’s time to discover the best DJI camera drones. DJI Air 2S is a powerful all-in-one camera drone designed for creators on the move. It offers a 1-inch CMOS sensor, 5.4K video recording, an innovative MasterShots feature, 12km 1080p video transmission, four-directional obstacle sensing, and more. DJI Air 2S is the perfect way to turn any adventure into a stunning visual creation.',
    },
    {
        name: 'OnePlus 9',
        img: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-75824/oneplus9pro_1200px-1024x768.jpg',
        price: 75000,
        desc: '50W Wireless Warp Charge | Smart 120 Hz | Snapdragon 888 Power. Hasselblad Camera for Ultra Wide & Ultra Clear Photos. Night Mode. Adaptive Display. Ultra-high Video Res. Never Settle. Latest Camera. Hyper Touch. Premium Smartphone. 50W Wireless Warp Charge | Smart 120 Hz | Snapdragon 888 Power. Hasselblad Camera for Ultra Wide & Ultra Clear Photos. Night Mode. Adaptive Display. Ultra-high Video Res. Never Settle. Latest Camera. Hyper Touch. Premium Smartphone. 50W Wireless Warp Charge | Smart 120 Hz | Snapdragon 888 Power. Hasselblad Camera for Ultra Wide & Ultra Clear Photos. Night Mode. Adaptive Display. Ultra-high Video Res. Never Settle. Latest Camera. Hyper Touch. Premium Smartphone.',
    },
    {
        name: 'Smart Watch',
        img: 'https://images.unsplash.com/photo-1617201142945-917a62a56d29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 450000,
        desc: 'A smartwatch is a wearable computer in the form of a watch; modern smartwatches provide a local touchscreen interface for daily use, while an associated smartphone app provides for management and telemetry (such as long-term biomonitoring). While early models could perform basic tasks, such as calculations, digital time telling, translations, and game-playing, 2010s smartwatches have more general functionality closer to smartphones, including mobile apps, a mobile operating system and WiFi/Bluetooth connectivity. Some smartwatches function as portable media players, with FM radio and playback of digital audio and video files via a Bluetooth headset.' 
    },
    {
        name: 'Boat Headphone',
        img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 22000,
        desc: 'Headphones are a pair of small loudspeaker drivers worn on or around the head over a users ears. They are electroacoustic transducers, which convert an electrical signal to a corresponding sound. Headphones let a single user listen to an audio source privately, in contrast to a loudspeaker, which emits sound into the open air for anyone nearby to hear. Headphones are also known as earspeakers, earphones[1] or, colloquially, cans.[2] Circumaural  and supra-aural over the ear headphones use a band over the top of the head to hold the speakers in place. Another type, known as earbuds or earpieces[1] consist of individual units that plug into the users ear canal. A third type are bone conduction headphones, which typically wrap around the back of the head and rest in front of the ear canal, leaving the ear canal open.'
    }, 
    {
        name: 'Air Conditioner',
        img: 'https://images.unsplash.com/photo-1436473849883-bb3464c23e93?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWlyJTIwY29uZGl0aW9uZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        price: 56000,
        desc: 'Air conditioning (also A/C, air conditioner) is the process of removing heat and controlling the humidity as well as removing dust in some cases of the air within a building or vehicle to achieve a more comfortable interior environment. This may be achieved using powered devices , by passive cooling or by ventilative cooling. Air conditioning is a member of a family of systems and techniques that provide heating, ventilation and air conditioning (HVAC). Air conditioning (also A/C, air conditioner) is the process of removing heat and controlling the humidity as well as removing'
    },
   {
       name: 'LED tv', 
       img: 'https://images.unsplash.com/flagged/photo-1572609239482-d3a83f976aa0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVkJTIwdHZ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
       price: 124000,
       desc: 'elevision became available in crude experimental forms in the late 1920s, but it would still be several years before the new technology would be marketed to consumers. After World War II, an improved form of black-and-white TV broadcasting became popular in the United Kingdom and United States, and television sets became commonplace in homes, businesses, and institutions. During the 1950s, television was the primary medium for influencing public opinion.[1] In the mid-1960s, color broadcasting was introduced in the US and most other developed countries. The availability of multiple types of archival storage media such as Betamax and VHS tapes, high-capacity hard disk drives, DVDs, flash drives, high-definition Blu-ray Discs, and cloud digital video recorders has enabled viewers to watch pre-recorded material—such as movies—at home on their own time schedule. For many reasons, especially the convenience of remote retrieval, the storage of television and video programming now also occurs on the cloud (such as the video on demand service by Netflix). '
   }
]





const seedDB = async () => {
     await  Product.insertMany(products);
     console.log("DB Seeded");
}

module.exports = seedDB;





