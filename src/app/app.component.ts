import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  girls = [
    'https://1.bp.blogspot.com/-fpifBoravvw/Xs0i20SgFZI/AAAAAAAAmvo/jKtSAynnGPoihuqVUIPSz-39hWoEAgJ3wCLcBGAsYHQ/s1600/Vietnamese-Beauties-With-Lingerie-and-Bikini-Photo-by-Le-Blanc-Studio-11-TruePic.net%2B%252820%2529.jpg',
    'https://1.bp.blogspot.com/-4E-O_OzBc-o/XueGNSdaPCI/AAAAAAAAuTI/RwH2z9Mx9fUxiHXUJbvfa7HsoORv8lCDgCLcBGAsYHQ/s1600/Beauty-Gallery-Collection-of-Asian-beauties-TruePic.net%2B%252896%2529.jpg',
    'https://1.bp.blogspot.com/-G2AnKTXvcnk/XuTL7IszigI/AAAAAAAAtxY/rhdP7WzCV8IylnVWIFR5vhpSQdXalowQQCLcBGAsYHQ/s1600/Chinese-Mode-Chinese-ancient-beauty%2B%252855%2529.jpg',
    'https://1.bp.blogspot.com/-PgpiNRZ-gzo/XmJhe0Y6doI/AAAAAAAAHP8/iXKoGagd5WIvrHy_N3WcEC-EVc5L51IDgCLcBGAsYHQ/s1600/Vietnamese%2Bhot%2Bgirl%2BQuynh%2BNhu%2BNguyen%2B-%2BShe%2Bis%2Blike%2Ba%2Bfairy%2Bof%2Bflowers%2B%25283%2529.jpg',
  ];
  avatar: string = '';
  getRandomAvatar() {
    const index = Math.floor(Math.random() * this.girls.length);
    console.log(index);
    this.avatar = this.girls[index];
  }
}
