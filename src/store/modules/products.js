import cartStore from './cart'

const state = {
  items: [
    {
      id: 1,
      title: 'Macbook Pro 2015',
      category: 'laptops',
      imgPath: 'https://www.re-store.ru/upload/iblock/65d/65dee3425dcd5f6603a891b29e46a724.jpg',
      description: 'Невероятно лёгкий и тонкий MacBook оснащается процессорами седьмого поколения и улучшенными SSD-накопителями',
      price: 412,
      isInCart: false
    },
    {
      id: 2,
      title: 'Apple Watch Series 4, 44 мм, корпус из алюминия золотого цвета',
      category: 'watches',
      imgPath: 'https://www.re-store.ru/upload/resize_cache/iblock/c6a/1120_773_17f5c944b3b71591cc9304fac25365de2/c6a92d396ba0f2f588f1aed58f3794e5.jpg',
      description: 'Самый большой дисплей в линейке Apple Watch. Новый электрический датчик сердечной активности.',
      price: 541,
      isInCart: false
    },
    {
      id: 3,
      title: 'Смартфон Apple iPhone X 64GB (серый космос)',
      category: 'smartphones',
      imgPath: 'https://img.moyo.ua/img/products/3828/83_1500x_1505364451.jpg',
      description: 'Как создать высокоинтеллектуальное устройство, корпус и дисплей которого образуют единое целое?',
      price: 500,
      isInCart: false
    },
    {
      id: 4,
      title: 'Apple iPad Pro (2018) 12,9" Wi-Fi + Cellular 1 ТБ, серебристый',
      category: 'tablets',
      imgPath: 'https://www.re-store.ru/upload/resize_cache/iblock/ed5/1120_772_17f5c944b3b71591cc9304fac25365de2/ed5e3f8b7cd1b62a5e484ef1a3efc9f9.jpg',
      description: 'Новый дисплей Liquid Retina занимает всю переднюю панель — от края до края. Благодаря точной цветопередаче и технологии ProMotion ',
      price: 1200,
      isInCart: false
    },
    {
      id: 5,
      title: 'Apple iPad mini 4 Wi-Fi + Cellular 128 ГБ',
      category: 'tablets',
      imgPath: 'https://www.re-store.ru/upload/resize_cache/iblock/66d/470_556_17f5c944b3b71591cc9304fac25365de2/66dc9be4e4cc85022e779ca724b1699b.png',
      description: 'iPad mini 4 оснащён процессором A8 с 64- битной архитектурой второго поколения.',
      price: 800,
      isInCart: false
    }
  ]
}

const getters = {}

const mutations = {
  pushProductToCart (state, productInfo) {
    if (productInfo.product.isInCart) {
      // for (let i = 0; i < productInfo.productAmount; i++) {
      //   cartStore.state.items.push(productInfo.product)
      //   cartStore.state.totalPrice += productInfo.product.price
      // }
      cartStore.state.items.push(productInfo)
      cartStore.state.totalPrice += productInfo.product.price * productInfo.productAmount
      cartStore.state.totalGoods += Number(productInfo.productAmount)
    }
  }
}

const actions = {
  pushProductToCart ({commit}, payload) {
    commit('pushProductToCart', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
