import {ImageSrcList} from './imageSrcList'
import {Gupname} from "../_models/_enum/enums_guptype";

export class gupImageSrc {
  src: ImageSrcList

  constructor(){
    this.src[Gupname.GUPA] = '~src/assets/images/gups/gupA.png';
    this.src[Gupname.GUPB] = '~src/assets/images/gups/gupB.png';
    this.src[Gupname.GUPC] = '~src/assets/images/gups/gupC.png';
    this.src[Gupname.GUPD] = '~src/assets/images/gups/gupD.png';
    this.src[Gupname.GUPE] = '~src/asaets/images/gups/gupE.png';
  }

}
