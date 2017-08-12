import { h, Component } from 'preact';
import style from './style';

import Player from '@vimeo/player';

import Headroom from 'headroom.js';

export default class Home extends Component {
  componentDidMount() {
    this.player = new Player(this.iframe);

    this.player.play();
  }

	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>This is the Home component.</p>
        <iframe
          src={`https://player.vimeo.com/video/16202331?api=1`}
          ref={el => {this.iframe = el;}}
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        />
			</div>
		);
	}
}
