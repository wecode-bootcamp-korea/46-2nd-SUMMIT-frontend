import { atom } from 'recoil';

export const ReservationAtom = atom({
  key: 'ReservationAtom',
  default: { name: null, email: null, date: null, time: null },
});
