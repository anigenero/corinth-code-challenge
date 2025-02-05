import {Grid} from '@mui/material';
import React, {FunctionComponent} from 'react';
import {SpeciesService} from '../../graph/species/speciesService';
import {BaseCard} from '../BaseCard/BaseCard';
import {FieldDisplay} from '../FieldDisplay/FieldDisplay';

type SpeciesCardProps = {
    species: SpeciesService.SpeciesDetail;
};

export const SpeciesCard: FunctionComponent<SpeciesCardProps> =
    ({species}) => (
        <BaseCard item={species}>
            <Grid container direction="column" spacing={1}>
                <FieldDisplay label="Avg. Height" value={`${species.averageHeight} cm`}/>
                <FieldDisplay label="Avg. Lifespan" value={`${species.averageLifespan} yrs`}/>
                <FieldDisplay label="Classification" value={species.classification}/>
                <FieldDisplay label="Designation" value={species.designation}/>
                <FieldDisplay label="Eye Colors" value={species.eyeColors.join(', ')}/>
                <FieldDisplay label="Hair Colors" value={species.hairColors.join(', ')}/>
                <FieldDisplay label="Language" value={species.language}/>
                <FieldDisplay label="Skin Colors" value={species.skinColors.join(', ')}/>
            </Grid>
        </BaseCard>
    );
