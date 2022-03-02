import { createSlice } from '@reduxjs/toolkit'

export const cardSlice = createSlice({
    name: 'card',
    initialState: {
        items:[
            {
                id:1,
                title:"elma",
                image:"https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30056606/30056606_0_MC/8796653944882_1530714400351.jpg",
                check:false
            },
            {
                id:2,
                title:"elma",
                image:"https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30056606/30056606_0_MC/8796653944882_1530714400351.jpg",
                check:false
            },
            {
                id:3,
                title:"armut",
                image:"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27020005/27020005-d69d93-1650x1650.jpg",
                check:false
            },
            {
                id:4,
                title:"armut",
                image:"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27020005/27020005-d69d93-1650x1650.jpg",
                check:false
            },
            {
                id:5,
                title:"çilek",
                image:"https://termodizayn.com/img/uploads/muhafazakosullari/icerik/48-ilek.jpg",
                check:false
            },
            {
                id:6,
                title:"çilek",
                image:"https://termodizayn.com/img/uploads/muhafazakosullari/icerik/48-ilek.jpg",
                check:false
            },
            {
                id:7,
                title:"muz",
                image:"https://www.cagri.com/Uploads/UrunResimleri/buyuk/muz-yerli-kg-4498-8.jpg",
                check:false
            },
            {
                id:8,
                title:"muz",
                image:"https://www.cagri.com/Uploads/UrunResimleri/buyuk/muz-yerli-kg-4498-8.jpg",
                check:false
            },
            {
                id:9,
                title:"mandalina",
                image:"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27281001/mandalina-kg-68d84e-1650x1650.jpg",
                check:false
            },
            {
                id:10,
                title:"mandalina",
                image:"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27281001/mandalina-kg-68d84e-1650x1650.jpg",
                check:false
            },
            {
                id:11,
                title:"portakal",
                image:"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27304007/portakal-kg-72075c-1650x1650.jpg",
                check:false
            },
            {
                id:12,
                title:"portakal",
                image:"https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/27304007/portakal-kg-72075c-1650x1650.jpg",
                check:false
            },
            {
                id:13,
                title:"kedi",
                image:"https://www.whiskas.com.tr/Content/img/home/article-kitten.png",
                check:false
            },
            {
                id:14,
                title:"kedi",
                image:"https://www.whiskas.com.tr/Content/img/home/article-kitten.png",
                check:false
            },
            {
                id:15,
                title:"köpek",
                image:"https://iaftm.tmgrup.com.tr/65f129/1200/627/0/36/855/483?u=https://iftm.tmgrup.com.tr/2021/12/07/kopek-bakimi-nasil-yapilir-ev-kopekleri-nasil-beslenir-evde-kopek-bakmak-zor-mu-1638862993469.jpeg",
                check:false
            },
            {
                id:16,
                title:"köpek",
                image:"https://iaftm.tmgrup.com.tr/65f129/1200/627/0/36/855/483?u=https://iftm.tmgrup.com.tr/2021/12/07/kopek-bakimi-nasil-yapilir-ev-kopekleri-nasil-beslenir-evde-kopek-bakmak-zor-mu-1638862993469.jpeg",
                check:false
            },
            {
                id:17,
                title:"maymun",
                image:"https://natgeo.igte.ch/wp-content/uploads/2019/12/3846_m.jpg",
                check:false
            },
            {
                id:18,
                title:"maymun",
                image:"https://natgeo.igte.ch/wp-content/uploads/2019/12/3846_m.jpg",
                check:false
            },
            {
                id:19,
                title:"köpek balığı",
                image:"https://i2.milimaj.com/i/milliyet/75/1200x675/6149be6286b24721e4d312aa.jpg",
                check:false
            },
            {
                id:20,
                title:"köpek balığı",
                image:"https://i2.milimaj.com/i/milliyet/75/1200x675/6149be6286b24721e4d312aa.jpg",
                check:false
            },
            {
                id:21,
                title:"ağaç",
                image:"https://www.anadoluhayat.com.tr/img_content/agac4.jpg",
                check:false
            },
            {
                id:22,
                title:"ağaç",
                image:"https://www.anadoluhayat.com.tr/img_content/agac4.jpg",
                check:false
            },
            {
                id:23,
                title:"deve",
                image:"https://www.yabanihayvanlar.com/wp-content/uploads/2021/04/deve.jpg",
                check:false
            },
            {
                id:24,
                title:"deve",
                image:"https://www.yabanihayvanlar.com/wp-content/uploads/2021/04/deve.jpg",
                check:false
            },
            {
                id:25,
                title:"ceviz",
                image:"https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30026755/30026755_0_MC/8796461924402_1528879480897.jpg",
                check:false
            },
            {
                id:26,
                title:"ceviz",
                image:"https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30026755/30026755_0_MC/8796461924402_1528879480897.jpg",
                check:false
            },
            {
                id:27,
                title:"kivi",
                image:"https://st.myideasoft.com/idea/gb/09/myassets/products/593/mv-kivi-3132-27702-jpg.jpeg?revision=1615275461",
                check:false
            },
            {
                id:28,
                title:"kivi",
                image:"https://st.myideasoft.com/idea/gb/09/myassets/products/593/mv-kivi-3132-27702-jpg.jpeg?revision=1615275461",
                check:false
            },
            {
                id:29,
                title:"masa",
                image:"https://evidea.akinoncdn.com/products/2021/01/25/54109/98822fbc-e467-4e0c-bc07-eb6045aa05bc_size616x616_cropTop.jpg",
                check:false
            },
            {
                id:30,
                title:"masa",
                image:"https://evidea.akinoncdn.com/products/2021/01/25/54109/98822fbc-e467-4e0c-bc07-eb6045aa05bc_size616x616_cropTop.jpg",
                check:false
            },
            {
                id:31,
                title:"ev",
                image:"https://www.hepsiemlak.com/emlak-yasam/wp-content/uploads/2018/09/ev-satisi-icin-ilan-aciklamasina-neler-yazilmalidir-4.jpg",
                check:false
            },
            {
                id:32,
                title:"ev",
                image:"https://www.hepsiemlak.com/emlak-yasam/wp-content/uploads/2018/09/ev-satisi-icin-ilan-aciklamasina-neler-yazilmalidir-4.jpg",
                check:false
            },
            {
                id:33,
                title:"araba",
                image:"https://cdn-nq.toyzzshop.com/product/600x600/719a0_Maxx_Wheels_Isikli_Spor_Araba_12_cm..jpg",
                check:false
            },
            {
                id:34,
                title:"araba",
                image:"https://cdn-nq.toyzzshop.com/product/600x600/719a0_Maxx_Wheels_Isikli_Spor_Araba_12_cm..jpg",
                check:false
            },
            {
                id:35,
                title:"tekne",
                image:"https://n11scdn.akamaized.net/a1/1024/spor-outdoor/bot-ve-tekne/isatek-hobby-boat-465-konsollu-fiber-tekne__1579024385236220.jpg",
                check:false
            },
            {
                id:36,
                title:"tekne",
                image:"https://n11scdn.akamaized.net/a1/1024/spor-outdoor/bot-ve-tekne/isatek-hobby-boat-465-konsollu-fiber-tekne__1579024385236220.jpg",
                check:false
            },
        ],
        selectedItems:[],
        point:0
    },
    reducers: {
        turnCard: (state,action) => {
            const {id} = action.payload
            state.items.map((item)=> {
                if(item.id === id){
                    item.check = true
                }
            })
        },
        checkCard: (state,action) => {
           const { a, b } = action.payload
            state.items.map((item)=>{
                if(item.id === a.id || item.id === b.id){
                    item.check=false
                }
            })
        },
        pushItem: (state,action) => {
            state.selectedItems.push(action.payload)
        },
        pointUp: (state,action) => {
            state.point += action.payload
        },
        removeSelectedItems: (state,action)=> {
            state.selectedItems = action.payload
        }


    },
})

export const { checkCard,turnCard,pushItem,pointUp,removeSelectedItems } = cardSlice.actions

export default cardSlice.reducer
