import { action, makeObservable, observable } from 'mobx';

export class AppStore {
  stakeModal = false
  unstakeModal = false

  constructor() {
    makeObservable(this, {
      stakeModal: observable,
      unstakeModal: observable,

      setStakeModal: action.bound,
      setUnstakeModal: action.bound,
    });
  }

  setStakeModal(stakeModal: boolean) {
      this.stakeModal = stakeModal;
  }

  setUnstakeModal(unstakeModal: boolean) {
    this.unstakeModal = unstakeModal;
  }


}
