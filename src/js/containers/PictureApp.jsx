import React, {Component} from 'react';
import Photos from '../components/picture/Photos';
import Upload from '../components/picture/Upload';
import Feedback from '../components/picture/Feedback';
import Photo from '../models/Photo';

class App extends Component {
  state = {
    photos: [],
    imageUploaded: false
  }

  getFeedback() {
    this.setState({imageUploaded: true});
  }

  handleImageUpload () {
    const {imageUploaded} = this.state;
    if (imageUploaded) {
      return <Feedback />;
    } else {
      return (
        <div>
          <p className='react_margin'>Dit is de kans om Michael weer even helemaal tot leven te laten komen. <span className='bold_italic'>Maak je eigen outfit en tover jezelf helemaal om tot ‘The King of Pop’.</span> Alle inzendingen komen op de site te staan.</p>
          <Upload handleUpload={this.getFeedback.bind(this)} />
        </div>
      );
    }
  }

  get maxId() {
    const {photos} = this.state;
    const ids = photos.map(t => t.id);
    const maxId = Math.max(...ids);
    return photos.length ? maxId + 1 : 1;
  }

  add = (...names) => { //maak mij keer een array descriptions en steek daar alles in die we op lijn 29 meekrijgen
    const {photos} = this.state;

    names.forEach(n => {
      const photo = new Photo(this.maxId, n);
      photos.push(photo);
    });

    this.setState({photos});
  }

  componentDidMount() {
    this.add(`../assets/img/react_picture_1.jpg`, `../assets/img/react_picture_2.jpg`, `../assets/img/react_picture_3.jpg`, `../assets/img/react_picture_4.jpg`);
  }

  render() {
    const {photos} = this.state;
    return (
      <section className='react_div'>
        <h1 className='react_title'>Become the King of Pop</h1>
        {this.handleImageUpload()}

        <Photos photos={photos} />

      </section>
    );
  }
}

export default App;
