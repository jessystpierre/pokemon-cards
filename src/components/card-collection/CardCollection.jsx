import React from 'react'
import './CardCollection.css'
import Card from '../card/Card'
import Bulbasaur from '../../assets/bulbasaur.png'
import Bellossom from '../../assets/bellossom.png'
import Blastoise from '../../assets/blastoise.png'
import Gyarados from '../../assets/gyarados.png'
import Lucario from '../../assets/lucario.png'
import Gengar from '../../assets/gengar.png'
import Arcanine from '../../assets/arcanine.png'
import Electabuzz from '../../assets/electabuzz.png'
import Eevee from '../../assets/eevee.png'
import Steelix from '../../assets/steelix.png'
import GrassBg from '../../assets/grass-bg-card.png'
import FireBg from '../../assets/fire-bg-card.png'
import WaterBg from '../../assets/water-bg-card.png'
import ElectricBg from '../../assets/electric-bg-card.png'
import PsychicBg from '../../assets/psy-bg-card.png'
import FightingBg from '../../assets/fighting-bg-card.png'
import MetalBg from '../../assets/metal-bg-card.png'
import NormalBg from '../../assets/normal-bg-card.png'


const CardCollection = () => {
    return (
        <div className='cards-container'>
            <Card
                pokemonName="Bulbasaur"
                srcCard={GrassBg}
                srcPokemonImage={Bulbasaur}
                altPokemonImage="Bulbasaur"
                abilityName1="Razor Leaf"
                abilityDmg1="30"
                abilityName2="Vine Whip"
                abilityDmg2="40"
            ></Card>
            <Card
                pokemonName="Bellossom"
                srcCard={GrassBg}
                srcPokemonImage={Bellossom}
                altPokemonImage="bellossom"
                abilityName1="Mega Drain"
                abilityDmg1="40"
                abilityName2="Petal Dance"
                abilityDmg2="120"
            ></Card>
            <Card
                pokemonName="Blastoise"
                srcCard={WaterBg}
                srcPokemonImage={Blastoise}
                altPokemonImage="blastoise"
                abilityName1="Water Gun"
                abilityDmg1="40"
                abilityName2="Hydro Pump"
                abilityDmg2="110"
            ></Card>
            <Card
                pokemonName="Gyarados"
                srcCard={WaterBg}
                srcPokemonImage={Gyarados}
                altPokemonImage="Gyarados"
                abilityName1="Waterfall"
                abilityDmg1="90"
                abilityName2="Hydro Pump"
                abilityDmg2="110"
            ></Card>
            <Card
                pokemonName="Lucario"
                srcCard={FightingBg}
                srcPokemonImage={Lucario}
                altPokemonImage="Lucario"
                abilityName1="Rock Smash"
                abilityDmg1="40"
                abilityName2="Close Combat"
                abilityDmg2="120"
            ></Card>
            <Card
                pokemonName="Gengar"
                srcCard={PsychicBg}
                srcPokemonImage={Gengar}
                altPokemonImage="Gengar"
                abilityName1="Shadow Punch"
                abilityDmg1="60"
                abilityName2="Shadow Ball"
                abilityDmg2="80"
            ></Card>
            <Card
                pokemonName="Arcanine"
                srcCard={FireBg}
                srcPokemonImage={Arcanine}
                altPokemonImage="Arcanine"
                abilityName1="Fire Fang"
                abilityDmg1="65"
                abilityName2="Flare Blitz"
                abilityDmg2="120"
            ></Card>
            <Card
                pokemonName="Electabuzz"
                srcCard={ElectricBg}
                srcPokemonImage={Electabuzz}
                altPokemonImage="Electabuzz"
                abilityName1="Thunder Punch"
                abilityDmg1="75"
                abilityName2="Giga Impact"
                abilityDmg2="150"
            ></Card>
            <Card
                pokemonName="Eevee"
                srcCard={NormalBg}
                srcPokemonImage={Eevee}
                altPokemonImage="Eevee"
                abilityName1="Swift"
                abilityDmg1="60"
                abilityName2="Take Down"
                abilityDmg2="90"
            ></Card>
            <Card
                pokemonName="Steelix"
                srcCard={MetalBg}
                srcPokemonImage={Steelix}
                altPokemonImage="Steelix"
                abilityName1="Sand Tomb"
                abilityDmg1="35"
                abilityName2="Iron Tail"
                abilityDmg2="100"
            ></Card>

        </div>
    )
}

export default CardCollection