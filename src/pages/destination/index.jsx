import { useState } from "react"
import data from "../../assets/data"
import {
    Container,
    SubTitle1,
    SubTitle2,
    Image,
    P,
    P1,
    Title2,
    Hr,
    ContainerDes,
    Container3,
    Container4
} from "../../components/styled"

export default function Destination() {
    const [destination, setDestination] = useState(data.destinations[0])

    return (
        <Container
            backgroundMobile="/SpaceTourismWebsite/destination/background-destination-mobile.jpg"
            backgroundTablet="/SpaceTourismWebsite/destination/background-destination-tablet.jpg"
            backgroundDesktop="/SpaceTourismWebsite/destination/background-destination-desktop.jpg"
        >
            <Container3>
                <SubTitle1>01 PICK YOUR DESTINATION</SubTitle1>

                <div>
                    <Image
                        src={`/SpaceTourismWebsite/${destination.images.png}`}
                        alt={destination.name}
                    />
                </div>
            </Container3>

            <Container3>
                <ContainerDes>
                    {data.destinations.map((des, id) => (
                        <SubTitle1
                            select={destination.name == des.name}
                            key={id}
                            onClick={() => setDestination(des)}
                        >
                            {des.name}
                        </SubTitle1>
                    ))}
                </ContainerDes>

                <Title2>{destination.name}</Title2>
                <P>{destination.description}</P>
                <Hr />

                <Container4>
                    <div>
                        <SubTitle2>AVG. DISTANCE</SubTitle2>
                        <P1>{destination.distance}</P1>
                    </div>
                    <div>
                        <SubTitle2>EST. TRAVEL TIME</SubTitle2>
                        <P1>{destination.travel}</P1>
                    </div>
                </Container4>
            </Container3>
        </Container>
    )
}
