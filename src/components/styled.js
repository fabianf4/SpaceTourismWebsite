import styled from "styled-components"

export const Title = styled.h2`
    font-size: 4em;
    font-weight: 200;
    text-transform: uppercase;
    margin: 16px 0 16px 0;
    font-family: var(--font-bellefair);
    color: var(--color3-font);
    text-align: center;
`

export const Container = styled.div`
    background-image: url(${(props) => props.backgroundMobile});
    background-repeat: no-repeat;
    background-position: center;

    min-height: 100vh;
    min-width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 70px;

    font-size: 16px;

    @media (min-width: 377px) {
        background-image: url(${(props) => props.backgroundTablet});
        background-position: center;
        padding-top: 140px;
        font-size: 28px;
    }

    @media (min-width: 769px) {
        background-image: url(${(props) => props.backgroundDesktop});
        flex-direction: row;
    }
`
export const SubTitle1 = styled.h4`
    font-family: var(--font-barlowCondensed);
    text-align: center;
    font-weight: 100;
    text-transform: uppercase;

    border-bottom: ${(props) => (props.select ? "2px" : "0")} solid var(--color3-font);

    color: var(--color3-font);
    padding-bottom: 3px;
`

export const P = styled.p`
    color: var(--color2-font);
    font-family: var(--font-family2);
    text-align: center;
`

export const Explore = styled.div`
    color: #000;

    height: 7em;
    width: 7em;
    border-radius: 50%;
    background-color: aliceblue;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.3em;
    margin-top: 50px;
    padding: 10px;
    
    & > span {
        font-family: var(--font-bellefair);
        font-weight: 100;
        text-transform: uppercase;
    }
`

export const Image = styled.img`
    width: 10em;
    height: 10em;
`

export const Title2 = styled.h2`
    font-size: 2.5em;
    text-transform: uppercase;
    margin: 16px 0 16px 0;
    font-family: var(--font-bellefair);
    color: var(--color3-font);
    text-align: center;
    font-weight: 100;
`

export const SubTitle2 = styled.h4`
    font-family: var(--font-barlowCondensed);
    font-weight: 300;
    letter-spacing: 1px;
    text-align: center;
    font-size: 0.7em;
`
export const P1 = styled.p`
    font-family: var(--font-bellefair);
    font-size: 1.5em;
    margin: 0;

    text-transform: uppercase;
`

export const Hr = styled.hr`
    width: 90%;
    border-color: var(--background2);
    margin: 20px 0;
`

export const ContainerDes = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Container3 = styled.div`
    width: 90%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Container4 = styled.div`
    width: 100%;
    color: var(--color3-font);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

    @media screen and (min-width: 500px) {
        flex-direction: row;
    }
`