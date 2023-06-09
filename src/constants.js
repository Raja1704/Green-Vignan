const sheetData = [
  {
    sno: 1,
    CommonName: 'Neem tree',
    ScientificName: 'Azadirachta indica',
    uses: 'The Neem tree is known for its medicinal properties and is widely used in Ayurvedic medicine. Its leaves, bark, and seeds are used to treat a variety of ailments, such as',
    Habitat: 'The Neem tree is native to the Indian subcontinent and can be found in tropical and subtropical regions of Southeast Asia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Neem_%28Azadirachta_indica%29_in_Hyderabad_W_IMG_6976.jpg/640px-Neem_%28Azadirachta_indica%29_in_Hyderabad_W_IMG_6976.jpg'
  },
  {
    sno: 2,
    CommonName: 'Brazilian firetree',
    ScientificName: 'Schizolobium parahyba',
    uses: 'Formerly used for dugout canoes, it is now used for toys, boxes, shoe heels, the inner layers of laminated wood, and paper.The leaves contain water-soluble substances that act as antidotes to the bites of Bothrops snakes.',
    Habitat: 'Atlantic rainforest, most commonly in open, secondary formations, preferring valley bottoms, alluvial plains and near rivers, forming dense groups in hillside depressions',
    url: 'https://aboutcagayandeoro.com/wp-content/uploads/2022/01/272046442_3095393474077008_6189069200896132135_n.jpg?x63394'
  },
  {
    sno: 3,
    CommonName: 'mango tree',
    ScientificName: 'Mangifera indica',
    uses: 'Various parts of plant are used as a dentrifrice, antiseptic, astringent, diaphoretic, stomachic, vermifuge, tonic, laxative and diuretic and to treat diarrhea, dysentery, anaemia, asthma, bronchitis, cough, hypertension, insomnia, rheumatism, toothache, leucorrhoea, haemorrhage and piles.',
    Habitat: 'It is native tropical Asia and has been cultivated in the Indian subcontinent for over 4000 years and is now found naturalized in most tropical countries. Parts used: Roots, bark, leaves, fruits, seeds, flowers and kernels are used',
    url: 'https://5.imimg.com/data5/SELLER/Default/2020/12/LZ/PC/FN/77617377/safeda-mango-plant-1000x1000.jpg'
  },
  {
    sno: 4,
    CommonName: 'Lemon ironbark',
    ScientificName: 'Eucalyptus staigeriana',
    uses: 'Eucalyptus Lemon Ironbark Essential Oil Uses.In an oil burner, air freshener, potpourri, massage oil, kitchen and bathroom cleaning, dishwashing liquid. In a bath, footbath, sauna, vacuum cloth bag, floor washing water, add to clothes washing, bathroom cleaning.',
    Habitat: 'Eucalyptus staigeriana, lemon ironbark or lemon-scented ironbark, is a small rough barked sclerophyll tree that grows naturally in pure stands on hills in the Palmer River region of Cape York, North Queensland,Australia.',        
    url: 'https://images.ekko.world/pictures/5/5043.png'
  },
  {
    sno: 5,
    CommonName: 'dumbcane',
    ScientificName: 'Dieffenbachia seguine',
    uses: 'antidote (counter-irritant) against snakebites,The seed oil is applied on wounds, burns and inflammations.',   
    Habitat: 'It grows in the Palm House in the Oxford Botanic gardens',
    url: 'https://thumbs.dreamstime.com/b/dieffenbachia-dumbcane-isolated-white-background-flower-pot-seguine-also-known-as-species-native-to-tropical-139243170.jpg'
  },
  {
    sno: 6,
    CommonName: 'sappanwood',
    ScientificName: 'Biancaea sappan',
    uses: 'It has antibacterial and anticoagulant properties. It also produces a valuable reddish dye called brazilin, used for dyeing fabric as well as making red paints and inks.',
    Habitat: 'Tod. The native range of this species is Indian Subcontinent to Indo-China. It is a scrambling shrub or tree and grows primarily in the seasonally dry tropical biome.',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Caesalpinia_sappan_%28Sappan_wood%29_W_IMG_3341.jpg'
  },
  {
    sno: 7,
    CommonName: 'Eugania',
    ScientificName: 'Eugania Involucrata',
    uses: "It is used for intestinal problems and it's fruits are used to make jams",
    Habitat: 'It is native to Brazil',
    url: 'https://5.imimg.com/data5/IOS/Default/2021/12/XF/OV/GF/110796818/product-jpeg-1000x1000.png'
  },
  {
    sno: 8,
    CommonName: 'paper mulberry',
    ScientificName: 'Broussonetia papyrifera',
    uses: 'Paper mulberry was introduced for use as a fast-growing, ornamental shade tree. In its native lands, paper mulberry is used in paper making.In Hawaii and other parts of the South Pacific, its bark is used to make cloth.',
    Habitat: 'Its natural habitat is in Asia, where it can be found in places like India, Japan, Indochina, China, Korea, and Burma. It is widely cultivated worldwide and has spread to portions of Africa, the US, and Europe as an invasive plant.',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Murier.jpg'
  },
  {
    sno: 9,
    CommonName: 'Bee Sting Bush',
    ScientificName: 'Azima tetracantha',
    uses: 'Azima tetracantha, a traditional medicinal plant included in the order Brassicales and family Salvadoraceae, is widely used as a dietary supplement in folklore medicines. The plant is also used for the treatment of rheumatism, diarrhea and other inflammatory disorders.',
    Habitat: 'Azima tetracantha occurs from Cape Infanta in South Africa to tropical Africa. In South Africa it is found in the following provinces: Western Cape, Eastern Cape, KwaZulu-Natal and Mpumalanga. It occurs in lowland scrub, forest, mangrove edges, sea-dunes, coastal bushland, not far from the high-water mark.',
    url: 'https://www.theyrenotourgoats.com/wp-content/uploads/2014/08/wildplantain.jpg'
  },
  {
    sno: 10,
    CommonName: 'Cleistocalyx',
    ScientificName: 'Syzygium Nervosum',
    uses: "It's buds are used in tonic drinks",
    Habitat: 'It is native to Tropical Asia and Australia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Cleistocalyx_operculatus_Np_01.JPG/640px-Cleistocalyx_operculatus_Np_01.JPG'
  },
  {
    sno: 11,
    CommonName: 'Guava',
    ScientificName: 'Psidium Guajava',
    uses: 'It is eaten fresh or made in beverages and jams',
    Habitat: 'It is native to Caribbean, Central and South America',
    url: 'https://cdn.shopify.com/s/files/1/0555/8363/7660/files/Urban-plants-thai-guava-pruning.jpg?v=1650892348'        
  },
  {
    sno: 12,
    CommonName: 'Xylia',
    ScientificName: 'Xylia Xylocarpa',
    uses: "It's leaves are used to treat wounds in elephants and it's woodpulp is used for wrapping papers",
    Habitat: 'It is native to South and South East Asia',
    url: 'https://live.staticflickr.com/3640/3392720088_21e942a76a_b.jpg'
  },
  {
    sno: 13,
    CommonName: 'Santa Maria feverfew',
    ScientificName: 'Parthenium Hysterophorous',
    uses: 'It is used to treat stomach aches, tooth aches',
    Habitat: 'It is native to Tropical America',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Parthenium_hysterophorus_L._%284171282018%29.jpg'
  },
  {
    sno: 14,
    CommonName: 'Racosperma',
    ScientificName: 'Acacia Confusa',
    uses: 'It is used to dye, stain clothes and tan leather',
    Habitat: 'It is native to South East Asia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Acacia_covenyi02.jpg'
  },
  {
    sno: 15,
    CommonName: 'Ramie',
    ScientificName: 'Boehmeria Nivea',
    uses: 'It is used in sewing threads, packing materials.',
    Habitat: 'It is native to Eastern Asia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Boehmeria_nivea_kz5.jpg/1200px-Boehmeria_nivea_kz5.jpg'
  },
  {
    sno: 16,
    CommonName: 'citrus family',
    ScientificName: 'Rutaceae',
    uses: 'It is used for obesity and conjestive heart failure',
    Habitat: 'It grows in subtropical and littoral rainforests',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/OrangeBloss_wb.jpg'
  },
  {
    sno: 17,
    CommonName: 'Siamese rough bush',
    ScientificName: 'Streblus Asper',
    uses: 'It has been important in papermaking in Thailand.',
    Habitat: 'It typically grows in lowland and upland forests',
    url: 'https://t4.ftcdn.net/jpg/02/41/50/09/360_F_241500987_LL7WGWxxU4RvFKkJzcE1dtAak7ZqizXt.jpg'
  },
  {
    sno: 18,
    CommonName: 'Clover plant',
    ScientificName: 'Trifolium',
    uses: 'It is used to treat cancer, cough, other respiratory problems',
    Habitat: 'Originating in Europe',
    url: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxNDU5NDY0MzY1OTQ4/four-leaf-clovers-jpg.jpg'
  },
  {
    sno: 19,
    CommonName: 'Araliaceae',
    ScientificName: 'Polyscias Fruticosa',
    uses: 'It is used in neurodegeneration',
    Habitat: 'It grows in tropical areas from India to Ploynesia',
    url: 'https://storage.googleapis.com/powop-assets/kew_profiles/Hedera-helix_fullsize.jpg'
  },
  {
    sno: 20,
    CommonName: 'Spyder plant',
    ScientificName: 'Choleophytum comosum',
    uses: 'Spider plant helps clean indoor air.Spider plants can increase the humidity in your home and are a great natural alternative to a plug-in humidifier.',
    Habitat: 'It does well with average humidity and cool to average temperature, although it can tolerate warmer conditions.',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Hierbabuena_0611_Revised.jpg'
  },
  {
    sno: 21,
    CommonName: 'Indian Almond',
    ScientificName: 'Terminalia catappa',
    uses: 'Improves Digestive Health,Promotes Brain Function.',
    Habitat: 'tropical Asia,It can also be found around rocky shores and mangroves',
    url: 'https://www.nparks.gov.sg/-/media/ffw/migrated/round2/flora/3181/1b8dcbd3dbb340a391d0a7e93382eb44.ashx'
  },
  {
    sno: 22,
    CommonName: 'vetiver',
    ScientificName: 'Chrysopogon zizanioides',
    uses: 'Vetiver is sometimes applied directly to the skin for relieving stress, as well as for emotional traumas and shock, lice, and repelling insects',
    Habitat: 'It grows wild in low, damp sites such as swamps and bogs',
    url: 'https://farmseller.in/wp-content/uploads/2022/01/Vetiver-plant.jpg'
  },
  {
    sno: 23,
    CommonName: 'Bougainvaillea',
    ScientificName: 'Bougainvillea glabra',
    uses: 'The aqueous extract and decoction of this plant have been used as fertility control among the tribal people in many countries.Its flowers are edible and are often used to prepare teas',
    Habitat: 'Native to Brazil, this species has been extensively introduced into tropical, subtropical and warm temperate regions of the world.',
    url: 'https://cdn.britannica.com/22/219522-050-35462DA8/bougainvillea-flowers-bracts-plant.jpg'
  },
  {
    sno: 24,
    CommonName: 'Broad Leaf Lady palm',
    ScientificName: 'Rhapis Excelsa',
    uses: 'It is used as air filtering plant',
    Habitat: 'It grow in Southern China and Taiwan',
    url: 'https://urbanpalms.com/wp-content/uploads/PA-R-EXCE-2-360x480.jpg'
  },
  {
    sno: 25,
    CommonName: 'Longjack plant',
    ScientificName: 'Eurycoma Longifolia',
    uses: 'It is used to improve low testosterone, male fertility',
    Habitat: 'It is native to Indonesia and Malaysia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Tongkat_Ali_%28Eurycoma_longifolia%29_1.jpg'
  },
  {
    sno: 26,
    CommonName: 'tulip tailflower',
    ScientificName: 'Anthurium amnicola',
    uses: 'It has been used extensively in hybridizing small, colorful, pot plants for indoor culture.',
    Habitat: 'With its tulip‑like flowers it was grown in Hawaii for the cut flower industry',
    url: 'https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-bulbs-tulip-diamond-purple-flower-bulbs_391dd456-744e-4f32-953c-0ddf00e2e30f_512x512.jpg?v=1634230568'
  },
  {
    sno: 27,
    CommonName: 'Tadgola',
    ScientificName: 'Borassus flabellifer',
    uses: 'Ice apple may be used as an aperient to relieve constipation and might benefit the digestion process.',        
    Habitat: 'Borassus flabellifer has a growth pattern, very large size, and clean habits that make it an attractive ornamental tree, cultivated for planting in gardens and parks as landscape palm species.',
    url: 'https://indiagardening.b-cdn.net/wp-content/uploads/2020/02/Borassus-flabellifer.jpg'
  },
  {
    sno: 28,
    CommonName: 'Tender coconut plant',
    ScientificName: 'Cocos Nucifera',
    uses: 'It is used as food, fuel, cosmectics',
    Habitat: 'It mostly thrives in sandy soils',
    url: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81Q-0cGRLDL._SL1484_.jpg'
  },
  {
    sno: 29,
    CommonName: 'Bamboo Tree',
    ScientificName: 'B.vulgaris',
    uses: 'It is used in construction,textiles,fuel,etc.',
    Habitat: 'It has a native from South Argentina and the beaches of Chile.',
    url: 'https://dversepoets.files.wordpress.com/2013/04/800px-bamboo_forest.jpg'
  },
  {
    sno: 30,
    CommonName: 'Sunshine Tree',
    ScientificName: 'Senna Surattensis',
    uses: 'It boosts digestion,supports weight loss,relieves asthma attacks,relieves edema,etc',
    Habitat: 'The native is Indian subcontinent to Myanmar.',
    url: 'https://d2seqvvyy3b8p2.cloudfront.net/8b0492cd76753690a8e87aace2ae0325.jpg'
  },
  {
    sno: 31,
    CommonName: 'Jungle geranium',
    ScientificName: 'Ixora coccinea',
    uses: 'It is used in culinary and also heals wounds.',
    Habitat: 'It is a native to southeast Asia',
    url: 'https://cdn.shopify.com/s/files/1/0489/5922/6015/files/2_5b3b6776-02c5-4713-859f-41c4142dfd25_480x480.jpg?v=1666027993'
  },
  {
    sno: 32,
    CommonName: 'Duranta erecta',
    ScientificName: 'Duranta repens',
    uses: 'traditional medicinal plants',
    Habitat: 'native from Florida to Brazil and in the West Indies.',
    url: 'https://www.monaconatureencyclopedia.com/wp-content/uploads/2020/11/1-Duranta-erecta.jpg'
  },
  {
    sno: 33,
    CommonName: 'Caliptranthes',
    ScientificName: 'Myrtacaea',
    uses: 'It is used as food, medicine and for oil',
    Habitat: 'It grows mostly in North America',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Calyptranthes_clusiifolia.jpg'
  },
  {
    sno: 34,
    CommonName: 'Zomoloco Bel plant',
    ScientificName: 'Aegle marmelos',
    uses: 'Aegle marmelos possesses antidiarrhoeal, antimicrobial, antiviral, radioprotective, anticancer, chemopreventive, antipyretic, ulcer healing, antigenotoxic, diuretic, antifertility and anti-inflammatory properties',
    Habitat: 'Aegle marmelos is native across the Indian subcontinent and Southeast Asia, and is cultivated throughout Sri Lanka, Tamilnadu, Thailand, and Malaysia.',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Aegle_marmelos_bhel_goldenApple_JapaneseBbitterOrange_stoneApple_WoodApple_03.jpg/360px-Aegle_marmelos_bhel_goldenApple_JapaneseBbitterOrange_stoneApple_WoodApple_03.jpg'      
  },
  {
    sno: 35,
    CommonName: "Wilkes' Copperleaf",
    ScientificName: 'Acalypha wilkesiana',
    uses: "Wilkes' Copperleaf is mostly grown as an ornamental plant for its colorful leaves, which come in various shades of red, green, yellow, and purple. Some traditional medicines also use the plant for treating various ailments such as fever, diarrhea, and skin diseases.",
    Habitat: 'Acalypha wilkesiana is native to tropical regions of the Pacific Islands and Melanesia. It prefers a warm and humid climate, and grows well in moist, well-drained soil. It is often grown in gardens, parks, and as a houseplant.',  
    url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/10/03080111/Acalypha-FEATURE-compressed.jpg'       
  },
  {
    sno: 36,
    CommonName: 'bladder campion',
    ScientificName: 'Silene vulgaris',
    uses: 'The leaves of Bladder Campion are edible, and they are used in salads and many other dishes in some Mediterranean countries',
    Habitat: 'It is fairly common in Britain, but is mostly found in the south of England in meadows and fields, and along roadside verges, dry banks, and hedgerows.',
    url: 'https://www.healthbenefitstimes.com/9/uploads/2019/03/Facts-about-Bladder-campion-702x459.jpg'
  },
  {
    sno: 37,
    CommonName: 'MINIATURE BEARDED IRIS',
    ScientificName: 'Iris Suaveolens',
    uses: 'It can be used as an expectorant , diuretic and for the treatment of children dentition.',
    Habitat: 'It is a plant species of iris genus.',
    url: 'https://www.wrightmanalpines.com/sites/default/files/styles/juicebox_medium/public/product_pics/Iris_suaveolens_v._rubromarginata__I007__04.jpg'
  },
  {
    sno: 38,
    CommonName: 'Milkwood tree',
    ScientificName: 'Sideroxylon inerme',
    uses: 'It is used in treatment of malaria, jaundice, cancer',
    Habitat: 'It is native to Southern China',
    url: 'https://www.healingorchids.com/images/africantree/trees/milkwoodtreeflower-480.jpg'
  },
  {
    sno: 39,
    CommonName: 'spotted wintergreen',
    ScientificName: 'Chimaphila maculata',
    uses: 'it is used to treat diabetes as well as general stomach trouble, arthritis, backache, neuritis, rheumatism, bladder problems, as a diuretic, an astringent and as a pain …',
    Habitat: 'tends to grow in undisturbed habitats in leaf and needle mulch and on decomposing logs.',
    url: 'http://1.bp.blogspot.com/_iGZiQ1bPbT4/THbv82Kd_3I/AAAAAAAADRU/OQfCUDkS1tw/s1600/P5305669-web11.jpg'
  },
  {
    sno: 40,
    CommonName: 'Golden Thryallis',
    ScientificName: 'Galphimia glauca',
    uses: 'Ornamental shrub, low-maintenance, yellow racemes and glittering foliage 123',
    Habitat: 'Well-drained soil, sunny and sheltered space',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRonyGVKd0UdMRXSFVz4tC27ILwp2haKm4J5HepaVF-Legd_aQQGixyPxTWuhr7s-jsjns&usqp=CAU'
  },
  {
    sno: 41,
    CommonName: 'Green Paradise',
    ScientificName: 'Plumera Spp',
    uses: 'Medicinal plant',
    Habitat: 'dry scrub forests , warm climates around the world especially southern and southeastern Asia',
    url: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61PdczvKheL._SL1024_.jpg'
  },
  {
    sno: 42,
    CommonName: 'Cycad Plants',
    ScientificName: 'Cycad Plants',
    uses: 'Ornamental plant',
    Habitat: 'Dry, hot sites in the scrublands of eastern India 6',
    url: 'https://cdn.britannica.com/05/118905-050-96D2830E/Cone-leaves-cycad.jpg'
  },
  {
    sno: 43,
    CommonName: 'Rudraksha Tree',
    ScientificName: 'Elaeocarpus ganitrus',
    uses: 'Medicinal plant, religious significance',
    Habitat: 'Himalayan region, Nepal, India, Indonesia',
    url: 'https://wildroots.in/wp-content/uploads/2021/01/wildrootsrudraksh.jpg'
  },
  {
    sno: 44,
    CommonName: 'Pterospermum',
    ScientificName: 'Pterospermum acerifolium',
    uses: 'Ornamental plant, medicinal plant',
    Habitat: 'Tropical and subtropical regions of the world',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxgUxvOXzLfjuud_kMPidKx-Ba3GpThkZoPg&usqp=CAU'
  },
  {
    sno: 45,
    CommonName: 'Calamansi',
    ScientificName: 'Citrus × microcarpa',
    uses: 'It is very commonly used as a condiment in dishes like pancit or lugaw, or in the basic sawsawan (dip) of calamansi juice and soy sauce/fish sauce used for fish, spring rolls, dumplings and various savoury dishes.',
    Habitat: 'It is native to the Philippines, Borneo, Sumatra, and Sulawesi (Indonesia, Malaysia, and Brunei) in Southeast Asia; as well as southern China and Taiwan in East Asia.',
    url: 'https://cdn.shopify.com/s/files/1/2000/3817/products/20210810_100526_grande.jpg?v=1628567764'       
  },
  {
    sno: 46,
    CommonName: 'blumea',
    ScientificName: 'Blumea balsamifera',
    uses: 'Its primary uses are as a diuretic (or "water pill") and to treat symptoms of the common cold.',
    Habitat: 'Blumea is a genus of flowering plants of the family Asteraceae.',
    url: 'https://lh5.googleusercontent.com/-Tzb8AKRf6WM/T4mu9qpBuXI/AAAAAAAADdo/H4LcdzkPUTQ/s1600/DSCN2058.jpg'
  },
  {
    sno: 47,
    CommonName: 'Rosy Trumpet Tree',
    ScientificName: 'Tabebuia Rosea',
    uses: 'Reduces fever and pain To treat tonsil inflamations',
    Habitat: 'Terrestial, common in moist or rather dry forest.',
    url: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/911ydpm6d9L._SL1440_.jpg'
  },
  {
    sno: 48,
    CommonName: 'Cuban Pink',
    ScientificName: 'Tabebuia Pallida',
    uses: 'Used in traditional medicines Decoction of the cortex is recommended for anemia',
    Habitat: 'Forests and forests edges, tropical hammocks',
    url: 'https://media.istockphoto.com/id/1350676008/photo/pink-orchid-flower-isolated-on-black-background.jpg?s=612x612&w=0&k=20&c=vGrkOV7mCK4EaFlKGdGFg0tw_Vi8cFOVhRM6yrbIQ64='
  },
  {
    sno: 49,
    CommonName: 'asthma plant',
    ScientificName: 'Euphorbia hirta',
    uses: 'Euphorbia hirta is often used traditionally for female disorders, respiratory ailments (cough, coryza, bronchitis, and asthma),',
    Habitat: 'Euphorbia hirta (sometimes called asthma-plant) is a pantropical weed, originating from the tropical regions of the Americas. It is a hairy herb that grows in open grasslands, roadsides and pathways.',
    url: 'https://1.bp.blogspot.com/-mBNTzFPBHV8/YLtsm2o76bI/AAAAAAAAVqM/4WPqmGLOJTcg4jK-jPDW3lq-uHZQ4uLUwCLcBGAsYHQ/s2048/Dudhia%252C%2BAsthma_plant%252C%2BEuphorbia_hirta_01.JPG'
  },
  {
    sno: 50,
    CommonName: 'Plum Tree',
    ScientificName: 'Prunus Domestica',
    uses: 'Reduces heart diseases , blood sugar and anxiety 2. Constipation relief and rich in antioxidants',
    Habitat: 'Higher hills in Srinagar to Jaipur . It prefers temperature climate',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFyp73jJbrkXNXuRkVOxTNcct0C5ZmiLuSuA&usqp=CAU'
  },
  {
    sno: 51,
    CommonName: 'Yellow bells',
    ScientificName: 'Tecoma Stans',
    uses: 'Used in diabetics Digestive problems and Stomach pain',
    Habitat: 'Weed of roadsides, riparian zones, open woodlands',
    url: 'https://nurserynisarga.in/wp-content/uploads/2022/08/flower-1.webp'
  },
  {
    sno: 52,
    CommonName: 'Malayan Banyan',
    ScientificName: 'Ficus Microcarpa',
    uses: 'Treatment of ulcers, itching, toothache, leprosy, liver disease Burning Sensations',
    Habitat: 'Tropical or Subtropical species and it requires warm climate',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2naFkIqxU7tzu6Q3L3276GE2M7I3846JWzg&usqp=CAU'
  },
  {
    sno: 53,
    CommonName: 'Chinese ixora',
    ScientificName: 'Chinese ixora hi-res stock',
    uses: "Pharmacological studies suggest that the plant possesses antioxidative, antibacterial, gastroprotective, hepatoprotective, antidiarrhoeal, antinociceptive, antimutagenic, antineoplastic and chemopreventive effects, thus lending scientific support to the plant's ethnomedicinal uses.",
    Habitat: 'in Tropical Asia. Ixora also grows commonly in subtropical climates in the United States, such as Florida where it is commonly known as West Indian jasmine.Other common nameinclude viruchi, kiskaara, kepale, rangan, kheme, ponna, chann tanea, techi, pan, siantan, jarum-jarum/jejarum, jungle flame, jungle geranium, and cruz de Malta, among others',   
    url: 'https://img.freepik.com/premium-photo/chinese-ixora-plant-flower-species-ixora-chinensis_313877-6429.jpg?w=2000'
  },
  {
    sno: 54,
    CommonName: 'southern magnolia',
    ScientificName: 'Magnolia grandiflora',
    uses: 'Horticultural uses, Culinary uses, Traditional medicine, timber, other uses.',
    Habitat: 'The natural range of Magnolia species is a disjunct distribution, with a main center in east and southeast.',
    url: 'https://th.bing.com/th/id/OIP.FO9WxolWmCculJC_gI5KTgHaFj?pid=ImgDet&rs=1'
  },
  {
    sno: 55,
    CommonName: 'Sugar palm',
    ScientificName: 'Arenga pinnata',
    uses: 'The leaves as well as the leaf midribs can be used to weave baskets and marquetry work in furniture.In Indonesia, starch can also be extracted from sugar palms and used in place of rice flour in noodles, cakes, and other dishes.',   
    Habitat: 'Arenga pinnata is economically important feather palm native to tropical Asia, from eastern India East to Malaysia, Indonesia, and the Philippines in the east',
    url: 'https://th.bing.com/th/id/OIP.mJW59oBlKqchAHdFafpuUAAAAA?pid=ImgDet&rs=1'
  },
  {
    sno: 56,
    CommonName: 'wild lime',
    ScientificName: 'Zanthoxylum fagara',
    uses: 'Use it as an accent or specimen, in containers, as a patio tree, as a border or hedge.',
    Habitat: 'Wild lime is a small tree native to south Florida and the Caribbean Basin . It grows as an understory tree in the coastal upland plant communities on the lee side of the dunes in south Florida.',
    url: 'https://cdn.shopify.com/s/files/1/0505/8687/8125/collections/Fragrance_WildLime_1.jpg?v=1677669961&width=1200'
  },
  {
    sno: 57,
    CommonName: 'Phillippine violet',
    ScientificName: 'Barleria cristata',
    uses: 'Ethnomedicinal reports have also supported B. cristata L. as one of the potential traditional medicines in India claimed for the treatment of toothache, anaemia, snake bite, diabetes, lungs disorders, blood diseases and inflammatory conditions.',
    Habitat: 'It is native to a wide area ranging from Southern to India and Myanmar.',
    url: 'https://cdn.shopify.com/s/files/1/0634/0997/9621/products/barleria-cristata-b-dichotoma-philippine-violet-kadiyam-nursery_666x666.jpg?v=1662731486'
  },
  {
    sno: 58,
    CommonName: 'White goosefoot',
    ScientificName: 'Chenopodium album',
    uses: 'Repairs cell.Cures constipation.Aids in weight loss.Purifies blood.Good for hair.Promotes eye health',
    Habitat: 'Roadsides, fields, gardens; plains, valleys (Lesica et al. 2012.',
    url: 'https://www.nature-and-garden.com/wp-content/uploads/sites/4/2022/09/goosefoot.jpg'
  },
  {
    sno: 59,
    CommonName: 'Spider plant',
    ScientificName: 'chlorophytum comosum',
    uses: 'Thick, fleshy roots allow spider plant to tolerate inconsistent watering',
    Habitat: 'these plants native to tropical and subtropical regions of Africa, Asia, and Australia',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAcp-eG4xfuDD_b2mO83ALaCsliGyslbIL_g&usqp=CAU'
  },
  {
    sno: 60,
    CommonName: 'blackboard',
    ScientificName: 'Alstonia scholaris',
    uses: 'Found in the sub-Himalayan tract. It occurs in tropical, subtropical, moist deciduous forests in India.',      
    url: 'https://img.freepik.com/premium-photo/colorful-alstonia-scholaris-leaves-commonly-called-blackboard-tree-natural-background_358675-1213.jpg'
  },
  {
    sno: 61,
    CommonName: 'Henequen',
    ScientificName: 'Agave fourcroydes',
    uses: 'agave syrup and fructans,soaps ,detergents,bug repellent,hair treatements',
    Habitat: 'Agave species are also native to tropical areas of North America, such as Mexico.',
    url: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Henequen.jpg'
  },
  {
    sno: 62,
    CommonName: 'teak',
    ScientificName: 'tectona grandis',
    uses: 'teak leaves can treat constipation,and used as natural laxative',
    Habitat: 'It is found in a variety of habitats and climatic conditions from arid areas with only 500 mm of rain per year to very moist forests.',
    url: 'https://thumbs.dreamstime.com/b/trees-teak-tree-looking-up-sunlight-morning-sky-cloud-183760437.jpg'
  },
  {
    sno: 63,
    CommonName: 'Bottle Palm',
    ScientificName: 'Hyophorbe lagenicaulis',
    uses: 'air purification,used for making oil ,wine,jelly',
    Habitat: 'It is one of three Hyophorbe species which naturally occur in Mauritius, and one of only two that are still extant.',
    url: 'https://4.imimg.com/data4/TT/NG/MY-9672449/kjh-500x500.jpg'
  },
  {
    sno: 64,
    CommonName: 'pomergranate',
    ScientificName: 'punica granatum',
    uses: 'they have rich in fiber and vitamins',
    Habitat: 'modern day iran to northern india',
    url: 'https://imgs.search.brave.com/LxPzEOZimvg9OGWpjFPps6eHdrtBpWvFbyKuuo5Nsfc/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/QjI5MFRxMmw1RUh4/UlpqS1lkclNnSGFF/OCZwaWQ9QXBp'
  },
  {
    sno: 65,
    CommonName: 'White Cheesewood',
    ScientificName: 'Melodorum fruticosum',
    uses: 'evergreen scent',
    Habitat: 'south-east asia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Melodorum_fruticosum.jpg'
  },
  {
    sno: 66,
    CommonName: 'banana shrub',
    ScientificName: 'magnolia figo',
    uses: 'The leaves are used for scenting tea',
    Habitat: 'Broad-leaved evergreen forests, shady slopes and along river banks',
    url: 'https://s3.amazonaws.com/eit-planttoolbox-prod/media/images/Michelia-figo--Forest-and-Kim-Starr--cc-by-2-0.jpg' 
  },
  {
    sno: 67,
    CommonName: 'scarlet jungle flame',
    ScientificName: 'ixora chinesis',
    uses: 'used in the treatment of hiccups,fever.',
    Habitat: 'bangladesh,india,srilanka,vietnam',
    url: 'https://imgs.search.brave.com/iKbLZ8LklpuWxqJ6Rg2fTi0ds5IOzjjO1ctqyDGIlPo/rs:fit:336:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5m/bWlyc292MGJHcmRY/dzdiVzA1SkRnSGFL/YiZwaWQ9QXBp'
  },
  {
    sno: 68,
    CommonName: 'african tulip tree',
    ScientificName: 'spathodea campanulata',
    uses: 'used for reforestation and soil conservation.',
    Habitat: 'tropical dry forests',
    url: 'https://imgs.search.brave.com/YHjAjIo8RYmqdk-uPl-EQs5Ac6TBnl3Nil3DzBsZLsw/rs:fit:706:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/dGpZcDl6YXFHNnFr/YS1pd1NyZ3hRSGFF/LSZwaWQ9QXBp'
  },
  {
    sno: 69,
    CommonName: 'dumb cane',
    ScientificName: 'dieffenbachia segunine',
    uses: 'food,madicine,stimulants and to inflict punishment',
    Habitat: 'mexico and west indies.',
    url: 'https://imgs.search.brave.com/EzSOM8Pjqqotxj_jWoXynZoCsavjw2f9exUOjat9NG4/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/NkYzaS13VkJuTEtK/T0V6QnNFZC1nSGFG/aiZwaWQ9QXBp'
  },
  {
    sno: 70,
    CommonName: 'papaya',
    ScientificName: 'carica papaya',
    uses: 'healthy for skin',
    Habitat: 'naturally distributed forests',
    url: 'https://imgs.search.brave.com/dSVkmRdD8TgBxXt72t-6XZmXRT17HCe_o1MIHvXApmA/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5r/NHNENW5WZkJLV044/T0k2VTZOZmJRSGFF/OCZwaWQ9QXBp'
  },
  {
    sno: 71,
    CommonName: 'Bamboo Palm',
    ScientificName: 'Dypsis lutescens',
    uses: 'Keeping indoor plants like Dypsis Lutescens can significantly improve humidity levels indoors.',
    Habitat: 'is native to moist forest areas in Madagascar. Although endangered in its native habitat,',
    url: 'https://www.gardeningknowhow.com/wp-content/uploads/2012/12/Bamboo-Palm.jpg'
  },
  {
    sno: 72,
    CommonName: 'Frangipani',
    ScientificName: 'Adenium odesum',
    uses: 'Medicinal plants constitute a natural reservoir for medicines worldwide. They serve mainstream therapeutics and are central in folklore medicine. In case of Adenium obesum (Lav, Apocynaceae)',
    Habitat: 'belonging to the tribe Nerieae of the subfamily Apocynoideae of the dogbane family, Apocynaceae. It is native to the Sahel regions south of the Sahara (from Mauritania and Senegal to Sudan)',
    url: 'https://plantura.garden/uk/wp-content/uploads/sites/2/2021/11/frangipani-flower.jpg'
  },
  {
    sno: 73,
    CommonName: 'Russian Olive',
    ScientificName: 'Elaeagnus angustifolia',
    uses: 'Traditionally, Russian olive was used as an anti-ulcer remedy for wound healing or sometimes gastric disorders. E. angustifolia fruits were also famous in Turkish folklore as tonic, antipyretic, kidney disorder healing',
    Habitat: 'Russian olive is native to southern Europe and to central and western Asia. Within this region it occurs primarily on coasts, in riparian areas, and in other relatively moist.',
    url: 'https://www.gardeningknowhow.com/wp-content/uploads/2014/07/russian-olive.jpg'
  },
  {
    sno: 74,
    CommonName: 'weeping fig plant',
    ScientificName: 'FICUS BENJAMINA',
    uses: 'Ficus is a popular medicinal plant in India, which has long been used in Ayurveda, the ancient system of Indian medicine, for various diseases/disorders including diabetes, liver disorders, diarrhea, inflammatory conditions, hemorrhoids, respiratory, and urinary diseases.',
    Habitat: 'The natural habitat of the weeping fig (Ficus benjamina) is forests. Its wide tropical distribution means that these may be tropical rainforests, monsoonal forests or mixed wet forests. In some locations (Jamaica), the species has been seen colonizing roadsides.',
    url: 'https://www.plantvine.com/plants/Ficus-Benjamian-Braided-Large.jpg'
  },
  {
    sno: 75,
    CommonName: 'blue gum',
    ScientificName: 'EUCALYPTUS',
    uses: 'It is found in many lozenges, cough syrups, rubs, and vapor baths throughout the United States and Europe. Herbalists often recommend using fresh leaves in gargles to soothe sore throats and treat bronchitis and sinusitis.',
    Habitat: 'Eucalyptus, (genus Eucalyptus), large genus of more than 660 species of shrubs and tall trees of the myrtle family (Myrtaceae), native to Australia, Tasmania, and nearby islands.',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLxvv05IdrEvhjNpHmrv19kkqAbPSoX7CEg&usqp=CAU'
  },
  {
    sno: 76,
    CommonName: 'SINGAPORE GRAVEYARD FLOWER',
    ScientificName: 'PLUMERIA OBTUSA',
    uses: 'The different parts of the plant are used traditionally to treat various diseases like diabetes mellitus, wounds and skin disease, diuretic, purgative, abortion and also used in cosmetics, aromatherapy, necklaces and as offerings.', 
    Habitat: 'Plumeria obtusa, the Singapore graveyard flower, is a species of the genus Plumeria (Apocynaceae). It is native to the West Indies (including the Bahamas and the Greater Antilles), southern Mexico, Belize, Guatemala, and Florida.',
    url: 'https://live.staticflickr.com/145/433859652_9c3190fc78_b.jpg'
  },
  {
    sno: 77,
    CommonName: 'giant yucca',
    ScientificName: 'Yucca elephantipes',
    uses: 'osteoarthritis, high blood pressure, joint pain, migraine headache, diabetes, and many other condition',       
    Habitat: 'loose, infertile, sandy soil',
    url: 'https://www.gardendesign.com/pictures/images/900x705Max/site_3/giant-yucca-yucca-elephantipes-shutterstock-com_12257.jpg'
  },
  {
    sno: 78,
    CommonName: 'Lacy Lady Aralia',
    ScientificName: 'Evodia hortensis',
    uses: "obesity, headache, high blood pressure, congestive heart failure (CHF), infections caused by viruses, Alzheimer's disease, cancer, and fluid retention.",
    Habitat: 'subtropical and littoral rainforest',
    url: 'https://wildroots.in/wp-content/uploads/2021/07/Untitled-design-2021-07-22T111240.247.jpg'
  },
  {
    sno: 79,
    CommonName: 'paper flower',
    ScientificName: 'Bougainvillea',
    uses: 'used as a traditional medicine for different therapeutic conditions like insecticidal, anti-inflammatory (Markandan et al., 2016), anti-diarrhoeal, anti-ulcer, anti-microbial (Edwin et al., 2007b), and anti-diabetic (Edwin et al., 2006) activities',
    Habitat: 'hot, dry climate',
    url: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61+UrGX9-yS._AC_UF894,1000_QL80_.jpg'     
  },
  {
    sno: 80,
    CommonName: 'Banana',
    ScientificName: 'Musa sp',
    uses: 'Helps to improve heart health,Helps to build lean muscles',
    Habitat: 'humid, tropical regions of Central and South America, Africa, and Southeast Asia',
    url: 'https://minnetonkaorchards.com/wp-content/uploads/2022/06/shutterstock_413084350-1024x683.jpg.webp'
  },
  {
    sno: 81,
    CommonName: 'Bambo',
    ScientificName: 'Bambusoideae',
    uses: 'flooring, roofing designing, and scaffolding), furniture, food, biofuel, fabrics, cloth, paper, pulp, charcoal, ornamental garden planting',
    Habitat: 'tropical and subtropical to mild temperate regions,',
    url: 'https://miro.medium.com/v2/resize:fit:1200/1*-t6X_XyeX9JqPuN03MvwOw.png'
  },
  {
    sno: 82,
    CommonName: 'guggul tree',
    ScientificName: 'balsamodendron',
    uses: 'in the Ayurveda since time immemorial for the treatment of variety of disorders such as inflammation, gout, rheumatism, obesity, and disorders of lipids metabolism.',
    Habitat: 'Occurs in the arid rocky tracts of Rajputana, Khandesh, Berar, Mysore, Sind and Baluchistan',
    url: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/08/guggul-1296x728-header.jpg?w=1155&h=1528'
  },
  {
    sno: 83,
    CommonName: 'Chinese fringetree',
    ScientificName: 'Chionanthus retusus',
    uses: 'Fringetree is traditionally used for liver and gallbladder disorders, like gallstones, and other conditions',  
    Habitat: 'Mixed forests, thickets, riversides; 0–3000 m asl in China',
    url: 'https://buchanansplants.com/wp-content/uploads/2021/09/Chinese-Fringetree.jpg'
  },
  {
    sno: 84,
    CommonName: 'Golden trumpet',
    ScientificName: 'Allamanda cathartica',
    uses: 'Allamanda species have been used in systems of traditional medicine for various purposes',
    Habitat: 'Yellow allamanda (Allamanda cathartica) prefers moist, well-drained, soils in tropical regions.',
    url: 'https://sbbeautiful.org/wp-content/uploads/2021/03/golden-trumpet-tree-photo-david-gress.jpg'
  },
  {
    sno: 85,
    CommonName: 'Pothos',
    ScientificName: 'Philodendron',
    uses: 'can remove pollutants like formaldehyde and clean the air&leaves absorb moisture and gives clean oxygen',      
    Habitat: 'humid tropical forests',
    url: 'https://houseplantauthority.com/wp-content/uploads/2022/03/train-pothos-climb.jpg'
  },
  {
    sno: 86,
    CommonName: 'Jungle Geranium',
    ScientificName: 'Ixora coccinea',
    uses: 't is used as an ornamental plant in gardens and parks. In traditional medicine, it is used to treat various ailments such as fever, skin infections, and inflammation.',
    Habitat: 'It is native to tropical and subtropical areas of Asia and can be found growing in a wide range of habitats, including forests, grasslands, and near water sources.',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Ixora_coccinea.jpg'
  },
  {
    sno: 87,
    CommonName: 'Grass Lily',
    ScientificName: 'Ornithogalum umbellatum',
    uses: 'It is a popular indoor plant due to its ease of care and air-purifying properties. It is also used in traditional medicine to treat coughs and colds.',
    Habitat: 'It is native to South Africa and can be found growing in a variety of habitats, including grasslands, rocky outcrops, and forests. It is commonly cultivated as a houseplant in many parts of the world.',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Ornithogalum_umbellatum-Tci.jpg/300px-Ornithogalum_umbellatum-Tci.jpg'
  },
  {
    sno: 88,
    CommonName: 'Yellow silk cotton tree flowers',
    ScientificName: 'Cochlospermum religiosum',
    uses: 'The flowers are used in traditional medicine for various ailments such as fever, cough, and skin diseases. They are also used in the production of dyes and textiles.',
    Habitat: 'The yellow silk cotton tree is native to tropical regions of Africa and Asia and can be found growing in savannahs, dry forests, and riverbanks.',
    url: 'https://www.toothmountainnursery.com/wp-content/uploads/2020/03/Yellow-cotton-tree.jpg'
  },
  {
    sno: 89,
    CommonName: 'Oriental Arborvitae',
    ScientificName: 'Thuja orientalis',
    uses: 'The wood is used for construction and furniture-making, while the essential oil is used in perfumes and aromatherapy.',
    Habitat: 'Native to China, Korea, and Japan, it can be found in a variety of habitats including forests, mountain slopes, and riverbanks.perfumes and aromatherapy',
    url: 'https://i.pinimg.com/originals/0d/cf/ac/0dcfac44b245becbb97336e3f514855e.jpg'
  },
  {
    sno: 90,
    CommonName: 'Spineless yucca',
    ScientificName: 'Yucca elephantipes',
    uses: 'The plant is used for ornamental purposes and is grown indoors and outdoors. The plant is also used for medicinal purposes1',
    Habitat: 'The plant is native to Central America and is found in Mexico, Belize, Guatemala, and Honduras1.',
    url: 'https://i.pinimg.com/originals/b0/26/08/b02608b5c83a90f63eb834170c1567e2.jpg'
  },
  {
    sno: 91,
    CommonName: 'Acalypha',
    ScientificName: 'Acalypha ‘Mooreana’',
    uses: 'used in the treatment and/or management of diverse ailments such as diabetes, jaundice, hypertension, fever, liver inflammation, schistosomiasis, dysentery',
    Habitat: 'humid conditions, salt tolerant and requires some protection from strong winds',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQytpWPFZkMEjqUCB7RillrPba2olttwZQxEA&usqp=CAU'
  },
  {
    sno: 92,
    CommonName: 'Aralia',
    ScientificName: 'Aralia sp',
    uses: 'used as food plants by the larvae of some Lepidoptera species, including the common emerald (Hemithea aestivaria). There are many colours of aralia flowers. The main flower is whitish aralia. Some species, notably Aralia cordata, are edible and are cultivated for human consumption.',
    Habitat: 'The Ming aralia is widely cultivated in several countries of Southeast Asia and the tropical islands of the Pacific region.',
    url: 'https://wildroots.in/wp-content/uploads/2020/08/Untitled-design-2021-07-22T111905.490.jpg'
  },
  {
    sno: 93,
    CommonName: 'Indian mulberry',
    ScientificName: 'Morinda Tinctoria',
    uses: 'Early studies reported that the extract of leaf, root, and fruits of this plant showed anti-bacterial, analgesic, anti-oxidant, anti-inflammatory, astringent, laxative, sedative, and hypotensive (lowers blood pressure) potentials',  
    Habitat: 'Is a species of flowering plant in the family Rubiaceae, native to southern Asia. Roxb. It is an evergreen shrub or small tree growing to 5–10 m tall.',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB0GI4X1IrvBEGh24znPN_pLDvH4J62Sm37w&usqp=CAU'
  },
  {
    sno: 94,
    CommonName: 'Yellow Azalea',
    ScientificName: 'Rhododendron luteum',
    uses: 'It is widely cultivated in western Europe, used both as an ornamental plant in its own right, and as a rootstock onto which other azalea cultivars are grafted. It is locally naturalised in western and northern Europe',
    Habitat: 'the yellow azalea or honeysuckle azalea, is a species of flowering plant in the heath family Ericaceae, native to southeastern Europe and southwest Asia. In Europe, it occurs from southern Poland and Austria, south through the Balkans, and east to southern Russia; and in Asia, east to the Caucasus.',
    url: 'https://www.rhododendrons.co.uk/images/products/large/275.jpg'
  },
  {
    sno: 95,
    CommonName: 'Australian blackwood',
    ScientificName: 'Acaci Melanoxylon',
    uses: 'Acacia melanoxylon is cultivated in forestry plantings in eastern Africa (including Kenya and Ethiopia), South Africa and Zimbabwe. It is used for lumber, fuelwood and also in amenity plantings.',
    Habitat: 'In tropical Africa, Acacia melanoxylon is found in cool and wet upland regions. It grows best in deep, moist and fertile soils, but grows also on sandy and alluvial soils, and in wet nearly swampy places',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Acacia_melanoxylon.jpg'
  },
  {
    sno: 96,
    CommonName: 'Bush allamanda',
    ScientificName: 'Allamanda Schottii',
    uses: 'Allamanda species have been used in systems of traditional medicine for various purposes. A. cathartica has been used to treat liver tumors, jaundice, splenomegaly, and malaria',
    Habitat: 'Allamanda schottii is found in the south and southeast of Brazil, in the states of Espírito Santo, Minas Gerais, Rio de Janeiro, São Paulo, Paraná and Santa Catarina.',
    url: 'https://www.santhionlineplants.com/wp-content/uploads/2021/01/Allamanda-bush-yellow-Plant-1.jpg'
  },
  {
    sno: 97,
    CommonName: 'BURFLOWER TREE',
    ScientificName: 'Neolamarckia cadamba',
    uses: 'The fruit and inflorescences are reportedly edible by humans.The fresh leaves are fed to cattle',
    Habitat: 'is an evergreen, tropical tree native to South and Southeast Asia.',
    url: 'https://assets-news.housing.com/news/wp-content/uploads/2022/10/02001326/neolamarckia-cadamba-feature-compressed.jpg'
  },
  {
    sno: 98,
    CommonName: 'BEAUTYFLOWER',
    ScientificName: 'Calophyllum inophyllum',
    uses: 'The oils, as well as poultices made from leaves and flowers, are also commonly used for traditional medicine', 
    Habitat: 'Mast wood is notable for its ability to grow to massive sizes in sandy or rocky beaches of island and coastal habitats, as well as its habit sending out arching large trunks over the water where its seeds are dispersed via the currents',
    url: 'https://img.freepik.com/premium-photo/beautiful-red-rose-flowers-summer-time-nature-background-with-flowering-scarlet-roses-inspirational-natural-floral-spring-blooming-garden-park-backdrop-beauty-flower-vintage-retro-art-design_80942-1218.jpg'
  },
  {
    sno: 99,
    CommonName: 'MADDER',
    ScientificName: 'Rubia tinctorum',
    uses: 'It has been used since ancient times as a vegetable red dye for leather, wool, cotton and silk.For dye production, the roots are harvested after two years',
    Habitat: 'It prefers loamy soils (sand and clay soil) with a constant level of moisture.',
    url: 'https://www.healthbenefitstimes.com/9/gallery/indian-madder/Flowers-of-Indian-Madder.jpg'
  },
  {
    sno: 100,
    CommonName: 'WESTINDIAN JASMIN',
    ScientificName: 'Plumeria alba',
    uses: 'medicine to treat many inflammatory and infectious diseases',
    Habitat: 'This species is native to Puerto Rico and the Lesser Antilles, but has been introduced into a number of tropical areas around the world.',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/West_Indian_Jasmine_--_Ixora.jpg'
  },
  {
    sno: 101,
    CommonName: 'exotic marigold',
    ScientificName: 'mozette exotic marigold',
    uses: 'Homemade Skin Treatment. Digestive-Soothing Tea. Immune-Boosting Formula',
    Habitat: 'Marigolds are native to subtropical America and have been cultivated in Mexico for over 2,000 years',       
    url: 'https://gardenerspath.com/wp-content/uploads/2021/05/Marigold-Flower-Tagetes-Growing-Guides-Tips-and-Information-FB.jpg'
  },
  {
    sno: 102,
    CommonName: 'Pink Trumpet Vine',
    ScientificName: 'Podranea ricasoliana',
    uses: 'Garden Use-The showy pink trumpet vine works well in tropical gardens, either sprawling across the ground as a ground cover or draping over trellises, fences, and hedges as ornamentation.',
    Habitat: 'Podranea ricasoliana is native to south tropical Africa, in Malawi, Mozambique and Zimbabwe, and to southern Africa, in South Africa, in Eastern Cape Province and KwaZulu-Natal (Malan and Notten, 2002).',
    url: 'https://wateruseitwisely.com/wp-content/uploads/2021/03/Pink-Trumpet-Vine-3.jpg'
  },
  {
    sno: 103,
    CommonName: 'Gluta',
    ScientificName: 'Gluta travancorica',
    uses: 'Glutathione is essential for the immune system’s proper functioning and is vital in building and repairing tissue. It acts as an important antioxidant, which helps protect your body from damage to cells caused by free radicals.',    
    Habitat: 'Gluta velutina grows naturally in Burma, Thailand, Vietnam, Sumatra, Peninsular Malaysia, Borneo and Java. Its habitat is tidal rivers and it is often found with the species Barringtonia conoidea and Pandanus helicopus.',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5JNspG1b8KStH8xjkJbUU31ZFSHS6FrPDVbahO1URg3Y0E8E-e0VmPzGVQWB3B0Yc0rA&usqp=CAU'
  },
  {
    sno: 104,
    CommonName: 'Watery rose Apple',
    ScientificName: 'Syzygium aqueum',
    uses: 'Fever treatment, Detoxify the liver, Cures any skin conditions',
    Habitat: 'Tropical South East Asia like India, Malaysia',
    url: 'https://m.andrafarm.com/_andra_farm/gambar_kelompok/a125-4.jpg'
  },
  {
    sno: 105,
    CommonName: 'Crotons',
    ScientificName: 'Codiaeum variegatum',
    uses: 'treatment of cancer, constipation, diabetes, digestive problems, dysentery, external wounds, fever, hypercholesterolemia, hypertension, inflammation, intestinal worms, malaria, pain, ulcers and weight-loss.',
    Habitat: 'Croton does best in fertile, well-drained, moist soil. They need bright, indirect light when grown indoors. Outdoors they thrive in partial shade, and in cool climates can tolerate full sun if kept moist (and are acclimated first when moved from inside).',
    url: 'https://cdn.britannica.com/96/219696-050-6D3495AB/Croton-plant-leaves.jpg'
  },
  {
    sno: 106,
    CommonName: 'Polyalthia longifolia',
    ScientificName: 'Monoon longifolium',
    uses: 'The leaves are used for ornamental decoration during festivals.The tree can be pruned into various shapes and maintained in required sizes.',
    Habitat: 'It is native to southern India and Sri Lanka, but has been widely introduced elsewhere in tropical Asia.',  
    url: 'https://www.caretransplanters.com.au/images/sub-tropical/architectural-trees/resized/Polyalthia-longifolia-Mast-Tree.jpg'
  },
  {
    sno: 107,
    CommonName: 'Peacock flower',
    ScientificName: 'Caesalpinia pulcherrima',
    uses: 'The leaves, flower, bark, and seeds of C. pulcherrima were used by American Indians in traditional medicine as abortifacients and for suicide',
    Habitat: 'native to the tropics and subtropics of the Americas. It could be native to the West Indies,[3] but its exact origin is unknown due to widespread cultivation.',
    url: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/7113aEqB1uL._SL1500_.jpg'
  },
  {
    sno: 108,
    CommonName: 'Bismarck palm tree',
    ScientificName: 'Bismarckia nobilis',
    uses: 'Attractive and can grow both indoor & outdoor',
    Habitat: 'The Bismarck Palm is native to the island of Madagascar near the east coast of Africa.',
    url: 'https://www.gardeningknowhow.com/wp-content/uploads/2017/07/bismark.jpg'
  },
  {
    sno: 109,
    CommonName: 'Moses in the cradle',
    ScientificName: 'Tradescantia spathacea',
    uses: 'a houseplant,primarily used for its decorative value',
    Habitat: 'It is native to Belize, Guatemala, and southern Mexico',
    url: 'https://www.aquastore.in/image/cache/catalog/aquastore.in/1.Storeimages/6.Plants/indoor/Moses-In-The-Cradle%20Bicolor-600x600.jpg'
  },
  {
    sno: 110,
    CommonName: 'White bhuhneia purpurea',
    ScientificName: 'strawberry begonia',
    uses: 'Orchid tree, Bauhinia purpurea, is a tropical, evergreen small tree or shrub up to 4 - 10 m tall and 2 m across. It has an erect and slender stem, crooked branches, green leaves, and large, purple and orchid like flowers',
    Habitat: 'auhinia purpurea is a small to medium-size deciduous tree growing to 17 feet (5.2 m) tall. The leaves are 10–20 centimetres (3.9–7.9 in) long and broad, rounded, and bilobed at the base and apex. The flowers are conspicuous, pink, and fragrant, with five petals. The fruit is a pod 30 centimetres (12 in) long, containing 12 to 16 seeds',
    url: 'https://t3.ftcdn.net/jpg/03/33/82/78/360_F_333827840_GZYSHTT3cLZwwbVjKD8cTYXOGeuV2b88.jpg'
  },
  {
    sno: 111,
    CommonName: 'Bougainvillea spectabilis',
    ScientificName: 'great bougainvillea',
    uses: 'Bougainvillea spectabilis has been reported to have anti-inflammatory, anti-bacterial, anti-viral, anti-tumor, anti-hypercholestrolemic, anti-hyperlipidemic, and anti-fertility properties',
    Habitat: 'Bougainvillea spectabilis is native to Brazil, Peru, Bolivia, and Chubut Province, Argentina, but it has been introduced in many other areas. Bougainvillea spectabilis can grow in hardiness zones 10-11, preferring full sun , dry conditions, and fertile soil. It can be propagated from stem and root cuttings.',
    url: 'https://www.jardineriaon.com/wp-content/uploads/2019/03/Caracteristicas-Buganvilla-spectabilis.jpg'
  },
  {
    sno: 112,
    CommonName: 'Tasmanian flax lily',
    ScientificName: 'Dianella tasmanica',
    uses: 'Flax lily, Dianella tasmanica, is a spreading perennial with flat, glossy green leaves. This grass-like foliage plant is often used as a groundcover, border plant, or even as an accent plant, to bring color and texture into the landscape. This fast-growing plant also works well in containers.',
    Habitat: 'asoutheastern Australia',
    url: 'https://www.smgrowers.com/imagedb/Dianella_tasmainca.jpg'
  },
  {
    sno: 113,
    CommonName: 'Zedi orange Mari gold',
    ScientificName: 'mari gold',
    uses: 'Marigolds are native to Mexico, but the sunny annuals have become incredibly popular and are grown in countries around the world. Although they are appreciated primarily for their beauty, you may not have considered the many surprising marigold benefits for gardens. Read on to learn about ways to use marigold plants in the gard',
    Habitat: 'Webmarigold, (genus Tagetes), genus of about 50 species of annual herbs of the aster family (Asteraceae), native to southwestern North America, tropical America, and South America. The name marigold also refers to the pot marigold (genus Calendula) and unrelated',
    url: 'https://nurtureplant.in/wp-content/uploads/2019/09/giant-double-600x600.jpg'
  },
  {
    sno: 114,
    CommonName: 'Ficus variegata',
    ScientificName: 'red stem fig',
    uses: 'he wood, light and whitish, is used for inner coverings, cases, handicrafts and in the fabrication of the plywood, as well as fuel. The dried fruits are at times consumed with rice by some local populations; leaves and bark are used in the traditional medicine, in particular for dysentery.',
    Habitat: 'icus variegata or Common Red Stem fig (scientific name: Ficus variegata) is native to India, southern China, Indonesia and Malaysia and is a deciduous trees of the family Moraceae. It inhabits the humid forest of the tropical region. The trunk is light gray brown, the leaves are green and heart-shaped',
    url: 'https://nurserya2z.com/wp-content/uploads/2020/12/mangomeadows-nursery-plants-ficus-triangularis-variegata-plant-16968860106892_600x600.jpg'
  },
  {
    sno: 115,
    CommonName: 'bonsai',
    ScientificName: 'penjing',
    uses: "Bonsai plants are beneficial to one's health. It aids in the treatment of coughs, weariness, sore throats, and exhaustion.",
    Habitat: 'Tropical Bonsai may be kept on a sunny windowsill year-round. During the summer they love to be outside, but they will also do well indoors. The air inside the house is very dry, so the use of a pebble tray or frequent misting is important.',
    url: 'https://a-z-animals.com/media/2022/10/shutterstock_2163655781.jpg'
  },
  {
    sno: 116,
    CommonName: 'Siamese cassia',
    ScientificName: 'senna siamea.',
    uses: 'used in intercropping systems, windbreaks, and shelterbelts..It is also used as a shade tree in cocoa, coffee, and tea plantations.',
    Habitat: 'lowland forests and river banks',
    url: 'https://content.eol.org/data/media/8f/3a/24/611.10292.jpg'
  },
  {
    sno: 117,
    CommonName: 'mangium, black wattle',
    ScientificName: 'acacia mangium.',
    uses: 'it is also used for soil protection.used in commercial plantations to provide products such as pulp, firewood, charcoal',
    Habitat: 'areas of high rainfall in northern Australia, New Guinea and some adjacent islands',
    url: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91kegNLIOCL._SL1500_.jpg'
  },
  {
    sno: 118,
    CommonName: 'Yellow bells',
    ScientificName: 'Tecoma gaudi gaudi.',
    uses: 'used in traditional medicine.Used to cure digestive problems,stomach pain.',
    Habitat: 'native to the Americas.',
    url: 'https://nurserynisarga.in/wp-content/uploads/2022/08/flower-1.webp'
  },
  {
    sno: 119,
    CommonName: 'Gargoulette palm kernel',
    ScientificName: 'Hyophorbe lagenicaulis',
    uses: 'The Palm kernel is the edible seed of the oil palm tree. The fruit yields two distinct oils—Palm Oil derived from the outer parts of the fruit, and palm kernel oil derived from the kernel. The kernels yield an oil (approx.. 45-50%) which is much in demand for the manufacture of cattle food, soaps',
    Habitat: 'While habitat destruction may destroy the last remaining palms in the wild, the survival of the species is assured due to its plantation as a specimen of the tropics and subtropics',
    url: 'https://i.etsystatic.com/10534964/r/il/108165/2426121705/il_fullxfull.2426121705_f24w.jpg'
  },
  {
    sno: 120,
    CommonName: 'Cascabela thevetia',
    ScientificName: 'Thevetia peruviana',
    uses: 'in Cultivation and biological pest control',
    Habitat: 'in pastures, in savanna and in riparian zones (banks of watercourses).',
    url: 'https://www.nationbloom.com/products/cascabela-thevetia-bitti-peach-plant-by-nationbloom.jpg'
  },
  {
    sno: 121,
    CommonName: 'Hibiscus',
    ScientificName: 'Hibiscus tiliaceus',
    uses: "The inner bark of the sea hibiscus (Hibiscus tiliaceus), also called 'hau', is used in Polynesia for making rope, and the wood for making canoe floats",
    Habitat: 'It is widely cultivated as an ornamental plant in the tropics and subtropics, but its native range is Vanuatu',
    url: 'https://www.hindustantimes.com/web-stories/amazing-health-benefits-of-hibiscus-5508/assets/1.jpeg'
  },
  {
    sno: 122,
    CommonName: 'Alternanthera',
    ScientificName: 'Amaranthaceae',
    uses: 'It is used as a local medicine often in mixtures with other medicinal plants, to treat hepatitis, tight chest, bronchitis, asthma and other lung troubles',
    Habitat: 'rivers, lakes, ponds and irrigation canals, as well as many terrestrial habitats',
    url: 'https://wildroots.in/wp-content/uploads/2021/01/Untitled-design-53.jpg'
  },
  {
    sno: 123,
    CommonName: 'uvaia fruit',
    ScientificName: 'eugenia pyitormis',
    uses: 'its fruits present considerable amounts of antioxidants nd vitamin C when compared to other fruits.It is usually eaten fresh,made into juices or jellies.',
    Habitat: 'Eugenia pyriformis is a plant of family Myrtaceae fund primarily in Brazil.Its native species of razil,occuring primarily in states of Parana,Rio Grande do Sul,Santa Catarina and Sao Paulo.',
    url: 'https://www.floralondrina.com.br/img/products/muda-de-uvaia-eugenia-pyriformis_1_1200.jpg'
  },
  {
    sno: 124,
    CommonName: 'katong',
    ScientificName: 'wallichila duisticha',
    uses: 'the pith from the stems is eaten in times f famine.Short lived getting to about 15 years old then flowering for 4-5 years before dying.This is a hapaxanthic genus',
    Habitat: 'It has very short life about 15 years Low mountain valley of Sikkim and north India Himalayas',
    url: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41uOwHNZCyL._SX450_.jpg'
  },
  {
    sno: 125,
    CommonName: 'Christ thron',
    ScientificName: 'Euphorbia milii',
    uses: 'The latex of some crown of thron species has been used for arrow poisons and to stupefy fish for cature.Euphoriba plants are also used as food by the larave of some lepidoptera',
    Habitat: 'Crown of thorns starfish are large marine invertrbrates ehich feed on coroal as adults.They occur naturally throughout the Indo Pacific region on coral reefs from Red Sea to west coast of Americas.',
    url: 'https://i.etsystatic.com/24066289/r/il/88e5cc/4059578267/il_570xN.4059578267_jfpm.jpg'
  },
  {
    sno: 126,
    CommonName: 'Cape Honeysuckle',
    ScientificName: 'Tecoma Capensis',
    uses: 'It is often planted specifically to attract birds and butterflies.It is used to relieve pain and sleeplessness.',
    Habitat: 'The species occurs naturally in South Africa Eswatini and southern Mozambique.It is cultovated in other areas of world suc as in South eat ASia,Hawai,Florida and Calfornia.',
    url: 'https://www.thespruce.com/thmb/SG6jQgf0HFyeOjKzOdr4dt-H5ww=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cape-honeysuckle-growing-tips-3269216-07-6bc4ac9858fb44b29293b0cc874d14fd.jpg'
  },
  {
    sno: 127,
    CommonName: 'Paper Flower',
    ScientificName: 'Bouginvillea Flowers',
    uses: 'The aqueous extract and decoction of this plant have been used as fertility control among tribal people in many countries.It has been shown to posses anticancer,antidiabetic,antihepatotoix,anti inflammatory',
    Habitat: 'Ougainvillea is best suited to hot dry climate and should be watered deeply.It is awoody climber with curved throns that sprawls and needs to be tired.',
    url: 'https://plantura.garden/uk/wp-content/uploads/sites/2/2022/06/purple-bougainvillea.jpg'
  }
]
export default sheetData;