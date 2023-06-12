import Table from 'react-bootstrap/Table'
import { Pokemon } from '../interfaces/Pokemon'
import { DisplayPokemonInterface } from '../interfaces/DisplayPokemonInterface'



export const DisplayPokemon = ({num, name, types, hp, atk, def, sp_atk, sp_def, spd}: DisplayPokemonInterface) => {
    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>num</th>
                    <th>Name</th>
                    <th>Types</th>
                    <th>Hp</th>
                    <th>Attack</th>
                    <th>Defence</th>
                    <th>Sp. Attack</th>
                    <th>Sp.Def</th>
                    <th>Speed</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {num}
                    </td>
                    <td>
                        {name}
                    </td>
                    <td>    
                       {types.join(", ")}
                    </td>
                    <td>
                        {hp}
                    </td>
                    <td>
                        {atk}
                    </td>
                    <td>
                        {def}
                    </td>
                    <td>
                        {sp_atk}
                    </td>
                    <td>
                        {sp_def}
                    </td>
                    <td>    
                        {spd}
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}