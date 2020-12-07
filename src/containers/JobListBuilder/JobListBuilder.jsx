import { countBy } from 'lodash';
import React, { Component } from 'react';
import JobListForm from '../../components/Table/JobListForm';
import Table from '../../components/Table/Table';
import classes from './JobListBuilder.module.css';

export default class JobListBuilder extends Component {

    state = {
        characters : []
    };

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter( (character, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState( {characters: [...this.state.characters, character]} );
    }
    
    render() {

        const { characters } = this.state;
        const showTable = countBy(characters);
        
        return (
            <div className={['container', classes.joblist_table].join(' ')}>
                {showTable[characters] >= 0 ? (<Table characterData={characters} removeCharacter={this.removeCharacter} />) : null}
                <JobListForm handleSubmit={this.handleSubmit} />
                <h3>Add a character with Name and Job title to the table.</h3>
            </div>
        );
    }
}
