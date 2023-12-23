type TCard = {
  'id': string;
  'title': string;
  'previewImg': string;
  'previewImgWebp': string;
  'level': TLevel;
  'type': TTheme;
  'peopleMinMax': [number, number];
}

type TLevel = 'easy' | 'medium' | 'hard' | 'any';
type TFilterLevels = {
  title: string;
  id: TLevel;
}

type TTheme = 'horror' | 'mystic' | 'detective' | 'adventures' | 'sci-fi' | 'all';
type TFilterThemes = {
    title: string;
    theme: TTheme;
    logo: string;
    logoWidth: string;
    id: string;
  }

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
    'coords': [number, number];
  };
  'slots': {
    'today': [{
        'time': string;
        'isAvailable': boolean;
      }];
    'tomorrow': [{
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
type TPostArgument = {
  questId: string;
  formData: TBookingQuestPostInfo;
}
type TBookingQuestResponseInfo = {
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


type TMyReservedQuest = {
    'date': 'today' | 'tomorrow';
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
  type TPartialMyReservedQuest = Omit<TMyReservedQuest, 'quest'>


export type {
  TCard,
  TLevel,
  TFilterLevels,
  TTheme,
  TFilterThemes,

  TSelectedCard,

  TBookingData,
  TBookingQuestPostInfo,
  TPostArgument,
  TBookingQuestResponseInfo,

  TMyReservedQuest,
  TPartialMyReservedQuest,
};

