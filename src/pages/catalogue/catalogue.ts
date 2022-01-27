import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CataloguedetailPage } from '../cataloguedetail/cataloguedetail';

/**
 * Generated class for the CataloguePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-catalogue',
  templateUrl: 'catalogue.html',
})
export class CataloguePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CataloguePage');
  }

  openCatalogue() {
    this.navCtrl.push(CataloguedetailPage)
  }

}
