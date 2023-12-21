import { Amplifier, CdPlayer, Speakers } from "./child.js";

export class AudioFacade {
  amplifier: Amplifier | null = null;
  cdPlayer: CdPlayer | null = null;
  speakers: Speakers | null = null;
  constructor() {
    this.amplifier = new Amplifier();
    this.cdPlayer = new CdPlayer();
    this.speakers = new Speakers();
  }

  turnOnAudioSystem() {
    this.amplifier?.turnOn();
    this.cdPlayer?.play();
    this.speakers?.turnOn();
  }

  turnOffAudioSystem() {
    this.amplifier?.turnOff();
    this.cdPlayer?.stop();
    this.speakers?.turnOff();
  }
}
