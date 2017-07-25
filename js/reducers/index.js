import {combineReducers} from 'redux';
import allphotos from './all-photos';
import selectedPhoto from './active-photo'

const allReducers = combineReducers({
    photo: selectedPhoto,
    photos: allphotos
});

export default allReducers;