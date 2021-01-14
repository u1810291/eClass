import AvatarImg from '../assets/images/avatar-2.jpg';

export const dropdownOptions = {
  commonOptions: [
    {
      id: 1,
      value: 'Options 1',
    },
    {
      id: 2,
      value: 'Options 2',
    },
    {
      id: 3,
      value: 'Options 3',
    },
    {
      id: 4,
      value: 'Options 4',
    },
    {
      id: 5,
      value: 'Options 5',
    },
  ],
  optionsWithIcons: [
    {
      id: 1,
      icon: 'Fedex-Orders',
      value: 'Fedex',
    },
    {
      id: 2,
      icon: 'tracking',
      value: 'Tracking',
    },
    {
      id: 3,
      icon: 'pdf',
      value: 'Options 3',
    },
    {
      id: 4,
      icon: 'pdf',
      value: 'Options 4',
    },
    {
      id: 5,
      icon: 'pdf',
      value: 'Options 5',
    },
  ],

  optionsWithImg: [
    {
      id: 1,
      img: AvatarImg,
      value: 'Zafar',
    },
    {
      id: 2,
      img: AvatarImg,
      value: 'Zafar',
    },
    {
      id: 3,
      img: AvatarImg,
      value: 'Zafar',
    },
    {
      id: 4,
      img: AvatarImg,
      value: 'Zafar',
    },
    {
      id: 5,
      img: AvatarImg,
      value: 'Zafar',
    },
    {
      id: 6,
      img: AvatarImg,
      value: 'Zafar',
    },
  ],
  optionsWithImgFilter: [
    {
      id: 1,
      title: 'Fedex',
      items: [
        {
          id: 1,
          img: AvatarImg,
          value: 'Craig Ziemann 19613',
        },
        {
          id: 2,
          img: AvatarImg,
          value: 'Craig Ziemann 19613',
        },
        {
          id: 3,
          img: AvatarImg,
          value: 'Craig Ziemann 19613',
        },
        {
          id: 4,
          img: AvatarImg,
          value: 'Craig Ziemann 19613',
        },
      ],
    },
    {
      id: 2,
      title: 'Tracking',
      items: [
        {
          id: 1,
          img: AvatarImg,
          value: 'Craig Ziemann 19613',
        },
        {
          id: 2,
          img: AvatarImg,
          value: 'Craig Ziemann 19613',
        },
        {
          id: 3,
          img: AvatarImg,
          value: 'Craig Ziemann 19613',
        },
        {
          id: 4,
          img: AvatarImg,
          value: 'Craig Ziemann 19613',
        },
      ],
    },
  ],
  statusOptions: [
    {
      id: 1,
      value: 'Pending',
      color: { bg: '#FFF4DE', text: '#FFA800' },
    },
    {
      id: 2,
      value: 'Rejected',
      color: { bg: '#FFE5E8', text: '#F24142' },
    },
    {
      id: 3,
      value: 'Paid',
      color: { bg: '#E3F7EC', text: '#00AE59' },
    },
  ],
  viewOptions: [
    {
      id: 1,
      value: 'Table',
    },
    {
      id: 2,
      value: 'Calendar',
    },
  ],
};
