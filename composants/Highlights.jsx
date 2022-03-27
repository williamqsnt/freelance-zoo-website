
import styled from '@emotion/styled'


export default function Highlights() {

    const ZH = [
        {
            img : undefined,
            title : 'ZOOTUNES',
            desc : 'See Concerts. Save Animals.'
        },
        {
            img : undefined,
            title : 'WE ARE LIVING NORTHWEST',
            desc : 'Together we discover, we recover and we coexist'
        },
        {
            img : undefined,
            title : 'ANIMAL ADOPTIONS',
            desc : 'Adopt an animal and show your support for wildlife'
        }
    ]


    return(
        <Container>
            {ZH.map(({img, title, desc})=> {
                return(
                    <div className='block'>

                    </div>
                )
            })}
        </Container>
    )
}




const Container = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-evenly;
    flex-wrap : wrap;
    margin : 2em;
    .block{
        width : 400px;
        height : 300px;
        border : 2px solid black;
        margin : 1em;
    }

`