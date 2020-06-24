import { ResItem, DataItem } from './types';

export default class LastfmService {
  _apiKey = `58a12fdc7d2606d49f7abdabae85de78`;

  _getUrl = (apiMethod: string) => {
    return `https://ws.audioscrobbler.com/2.0/?method=${apiMethod}&api_key=${this._apiKey}&format=json&limit=10`;
  };

  getResource = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return res.json();
  };

  getSingles = async (): Promise<DataItem[]> => {
    const method = 'chart.getTopTracks';

    const res = await this.getResource(this._getUrl(method));
    return res.tracks.track.map(this._transformSingle);
  };

  getAlbums = async (): Promise<DataItem[]> => {
    const method = 'user.gettopalbums&user=rj';

    const res = await this.getResource(this._getUrl(method));
    return res.topalbums.album.map(this._transformAlbum);
  };

  // Mapping
  _extractImage = (obj: ResItem, isBigSize?: boolean) => {
    const imageObj = obj.image[isBigSize ? 3 : 1];
    let image;
    for (let key in imageObj) {
      if (imageObj[key].length > 10) {
        image = imageObj[key];
      }
    }

    return image;
  };

  _dummyText = `Light unto very they're were of. Hath saying god seasons be. Day creeping earth let. Them created face for from. Behold seed had don't is days that winged created blessed of life image one i.`;

  _transformAlbum = (album: ResItem): DataItem => {
    return {
      id: album.playcount, // mbid есть не у всех
      category: 'album',
      artist: album.artist.name,
      title: album.name,
      playcount: album.playcount,
      text: this._dummyText,
      imageSmall: this._extractImage(album),
      imageBig: this._extractImage(album, true),
      price: Math.floor(Math.random() * 50) + 51,
    };
  };

  _transformSingle = (single: ResItem): DataItem => {
    return {
      id: single.playcount, // mbid есть не у всех
      category: 'single',
      artist: single.artist.name,
      title: single.name,
      playcount: single.playcount,
      text: this._dummyText,
      imageSmall: this._extractImage(single),
      imageBig: this._extractImage(single, true),
      price: Math.floor(Math.random() * 50) + 1,
    };
  };
}
