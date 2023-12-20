import { TBookingQuestPostInfo, TBookingQuestResponseInfo } from '../types/types';

const bookingQuestPostInfo: TBookingQuestPostInfo = {
  'date': 'today',
  'time': '14:00',
  'contactPerson': 'Oliver',
  'phone': '899911122233',
  'withChildren': true,
  'peopleCount': 3,
  'placeId': '756751ec-847a-490d-9dae-b49183251053'
};

const bookingQuestResponseInfo: TBookingQuestResponseInfo =
{
  'date': 'today',
  'time': '14:00',
  'contactPerson': 'Oliver',
  'phone': '899911122233',
  'withChildren': true,
  'peopleCount': 3,
  'id': '0c5fa01d-e89c-478d-9b85-799cf4abe29f',
  'location': {
    'address': 'Набережная реки Карповки, 5П',
    'coords': [
      30.317359
    ]
  },
  'quest': {
    'id': 'aba664c3-bdf3-4fb3-b8f3-42e007864bbf',
    'title': 'Склеп',
    'previewImg': 'https://{server-url}/static/quest/sklep.jpg',
    'previewImgWebp': 'https://{server-url}/static/quest/sklep.webp',
    'level': 'easy',
    'type': 'adventures',
    'peopleMinMax': [
      5
    ]
  }
};

export {
  bookingQuestPostInfo,
  bookingQuestResponseInfo,
};
