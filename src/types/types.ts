type TCard = {
  'id': string;
  'title': string;
  'previewImg': string;
  'previewImgWebp': string;
  'level': TLevel;
  'type': TTheme;
  'peopleMinMax': [number, number?];
}

type TLevel = 'easy' | 'medium' | 'hard' | 'any';
type TTheme = 'horror' | 'mystic' | 'detective' | 'adventures' | 'sci-fi' | 'all';

type TSelectedCard = {
  'id': string;
  'title': string;
  'previewImg': string;
  'previewImgWebp': string;
  'level': TLevel;
  'type': TTheme;
  'peopleMinMax': [number, number?];
  'description': string;
  'coverImg': string;
  'coverImgWebp': string;
}

type TBookingData = {
  'id': string;
  'location': {
    'address': string;
    'coords': [number];
  };
  'slots': {
    'today': [
      {
        'time': string;
        'isAvailable': boolean;
      }];
    'tomorrow': [
      {
        'time': string;
        'isAvailable': boolean;
      }];
  };
};

type TBookingQuestPostInfo = {
  'date': string;
  'time': string;
  'contactPerson': string;
  'phone': string;
  'withChildren': boolean;
  'peopleCount': number;
  'placeId': string;
}

type TBookingQuestResponseInfo =
  {
    'date': string;
    'time': string;
    'contactPerson': string;
    'phone': string;
    'withChildren': boolean;
    'peopleCount': number;
    'id': string;
    'location': {
      'address': string;
      'coords': [number];
    };
    'quest': TCard;
  }

type TFilterThemes =
  {
    title: string;
    theme: TTheme;
    logo: string;
    logoWidth: string;
    id: string;
  }

type TFilterLevels = {
  title: string;
  id: TLevel;
}

type TMyReservedQuests = {
    'date': 'today' | 'tomorrow';
    'time': string;
    'contactPerson': string;
    'phone': string;
    'withChildren': boolean;
    'peopleCount': number;
    'id': string;
    'location': {
      'address': string;
      'coords': [number, number?];
    };
    'quest': TCard;
  }


export type {
  TCard,
  TLevel,
  TTheme,
  TSelectedCard,
  TBookingData,
  TBookingQuestPostInfo,
  TBookingQuestResponseInfo,
  TFilterThemes,
  TFilterLevels,
  TMyReservedQuests,
};

