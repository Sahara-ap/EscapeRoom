import { TBookingData } from '../types/types';

const bookingData: TBookingData[] = [
  {
    'id': '756751ec-847a-490d-9dae-b49183251053',
    'location': {
      'address': 'Набережная реки Карповки, 5П',
      'coords': [30.317359]
    },
    'slots': {
      'today': [
        {
          'time': '14:00',
          'isAvailable': false
        }],
      'tomorrow': [
        {
          'time': '14:00',
          'isAvailable': false
        }]
    }
  }];

export { bookingData };
