import userFixtures from './users';
import { createObjectId } from 'pow-mongodb-fixtures';

exports.devices = {
  userDevice1: {
    _id: createObjectId('59b50d152d9f6b4110ec0000'),
    type: 'light',
    image:{
      origUrl: 'https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/06/20/goods-img/1529469716585565185.jpg',
      alisa_id: '937455/c72c3c5848e4ef9b61d7'      
    },
    name: 'Лампочка Xiaomi YEELIGHT YLDP06YL',
    where: '^кухн',
    payload:{
      turn: 'on'
    }
  },
  userDevice2: {
    _id: createObjectId('59b50d152d9f6b4110ec0001'),
    type: 'light',
    image:{
      origUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcREa-NDY31pUZ3jXERdqZgbnHpRPKGFsWKRt2Puxdka5M2ykQE7ZtyWEvgdO9bY9xlPkfPbsFNe6pYz-lWxOTlA2u6KAoFA59pRkDlzcWnIkt-g-qPOteJB&usqp=CAE',
      alisa_id: '997614/003251359a15b1d266be'      
    },
    name: 'Лампочка Xiaomi Philips zhirui bulb light',
    where: '^спальн',
    payload:{
      turn: 'off'
    }
  },
  userDevice3: {
    _id: createObjectId('59b50d152d9f6b4110ec0002'),
    type: 'light',
    image:{
      origUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTagbRsz79w30Dm7JAO3wHgRUCXSJz9FpFYv2pQPiLg5t43S80ody9GhdYK9My-hCc0h714Lh6ePkIiu5OTNTTLNYzFposwqULID0hLnrH6jety0mEWdRtk&usqp=CAE',
      alisa_id: '1030494/d3835d4938f3b3d3f6c8'      
    },
    name: 'Лампочка Mixberry E27',
    where: '^спальн',
    payload:{
      turn: 'off'
    }    
  } 
}