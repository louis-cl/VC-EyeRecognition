import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash';

import Image from "./components/image";

class App extends Component {
    BASE_URL = 'http://52.56.45.212:3000/';

    constructor(props) {
        super(props);
        this.state = {
            currentImageId: 0
        }
        this.getLooking(this.state.currentImageId);
    }

    goPrevious(id) {
        let previousId = id - 1;
        if (previousId < 0) previousId = 1520;
        this.getLooking(previousId);
        this.setState({currentImageId: previousId});
    }

    goNext(id) {
        let nextId = id + 1;
        if (nextId > 1520) nextId = 0;
        this.getLooking(nextId);
        this.setState({currentImageId: nextId});
    }

    onPerformAction = (e) => {
        const currentImageId = this.state.currentImageId;
        if (e.keyCode === 37) // <-
            this.goPrevious(currentImageId);
        else if (e.keyCode === 39) // ->
            this.goNext(currentImageId);
        else if (e.keyCode === 89) // Y
            this.updateImageInfo(true);
        else if (e.keyCode === 78) // N
            this.updateImageInfo(false);
    }

    getLooking(imageId) {
        const self = this;
        axios.get(this.BASE_URL + imageId)
            .then(function (data) {
                self.setState({looking: data.data.looking});
                console.log("GET: " + self.state.looking);
            }).catch(function (err) {
                console.log(err);
            });
    }

    updateImageInfo = (isLooking) => {
        const self = this;
        axios.post(this.BASE_URL, {
            id: self.state.currentImageId,
            looking: isLooking
        }).then(function (data) {
            self.setState({looking: data.data[0].looking});
            console.log("SET: " + self.state.looking);
        }).catch(function (err) {
            console.error(err);
        });
    }

    getNextNonClassified = () => {
        const self = this;
        axios.get(this.BASE_URL + 'next')
            .then(function (data) {
                self.getLooking(data.data.id);
                self.setState({currentImageId: data.data.id});
            }).catch(function (err) {
                console.error(err);
            });
    }

    render() {
        return (
            <div>
                <div className={"fill-width fill-height card card-style " +
                    (this.state.looking === null || this.state.looking === undefined  ? '' :
                    (this.state.looking ? 'bg-green' : 'bg-red'))}
                     tabIndex="0" onKeyDown={this.onPerformAction}>
                    <Image imageId={this.state.currentImageId}/>
                    <button className="waves-effect waves-light btn blue"
                            onClick={this.getNextNonClassified}>Next non-classified</button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#body'));
