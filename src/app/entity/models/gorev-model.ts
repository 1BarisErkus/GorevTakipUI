export class GorevModel {
    ref_id!: number;
    kayit_tarihi!: Date;
    son_degisiklik_tarihi!: Date;
    degisiklik_gecmisi!: string;
    kimden_id!: number;
    kime_id!: number;
    konu: string = '';
    aciklama?: string;
    grup?: string;
    durum: number = 0;
    son_tarih!: string;
    yapilma_tarihi!: string;
}